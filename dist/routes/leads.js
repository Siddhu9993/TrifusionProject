"use strict";
// ============================================================
// Trifusion Technology LLP — Leads Route (Google Sheets)
// Public: POST /api/leads          — contact form submission
// Admin:  GET  /api/leads          — list all leads
// Admin:  PATCH /api/leads/:id/status  — update lead status
// ============================================================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const uuid_1 = require("uuid");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const googleSheets_js_1 = require("../services/googleSheets.js");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const router = (0, express_1.Router)();
// ── Rate limiter: 10 submissions per 15 minutes ──────────────
const contactLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, error: { code: 'RATE_LIMITED', message: 'Too many requests. Please try again later.' } },
});
// ── Validation schema ────────────────────────────────────────
const leadSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters').max(100),
    email: zod_1.z.string().email('Invalid email address'),
    phone: zod_1.z.string().max(30).optional(),
    company: zod_1.z.string().max(200).optional(),
    serviceInterest: zod_1.z.string().max(200).optional(),
    projectType: zod_1.z.string().max(200).optional(),
    budgetRange: zod_1.z.string().max(100).optional(),
    preferredContactMethod: zod_1.z.string().max(100).optional(),
    message: zod_1.z.string().min(10, 'Message must be at least 10 characters').max(5000),
});
const VALID_STATUSES = ['New', 'Contacted', 'In Progress', 'Converted', 'Closed'];
// ── POST /api/leads — public contact form submission ─────────
router.post('/', contactLimiter, async (req, res) => {
    try {
        const parsed = leadSchema.safeParse(req.body);
        if (!parsed.success) {
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        }
        const { name, email, phone, company, serviceInterest, budgetRange, preferredContactMethod, message } = parsed.data;
        // Generate a unique submission ID
        const id = `TF-LEAD-${(0, uuid_1.v4)().replace(/-/g, '').slice(0, 8).toUpperCase()}`;
        const timestamp = new Date().toISOString();
        // Ensure the header row is present (idempotent)
        await (0, googleSheets_js_1.ensureLeadsHeader)();
        // Append the new lead row to Google Sheets
        await (0, googleSheets_js_1.appendLeadRow)({
            id,
            timestamp,
            name,
            email,
            phone,
            company,
            serviceInterest: serviceInterest || '',
            budgetRange: budgetRange || '',
            preferredContact: preferredContactMethod || '',
            message,
            source: 'WEBSITE',
            status: 'New',
            ipAddress: req.ip || '',
        });
        console.log(`[Leads] New lead recorded: ${id} | ${name} <${email}>`);
        return (0, response_js_1.created)(res, {
            leadRef: id,
            message: 'Your message has been received. We will be in touch soon.',
        });
    }
    catch (err) {
        // Do NOT expose Google API details to the caller
        console.error('[Leads] Google Sheets write failed:', err?.message || err);
        return res.status(500).json({
            success: false,
            error: {
                code: 'SUBMISSION_FAILED',
                message: "We couldn't submit your request right now. Please try again or contact us directly.",
            },
        });
    }
});
// ── GET /api/leads — admin: list all leads ───────────────────
router.get('/', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const { status, search } = req.query;
        const pg = (0, response_js_1.getPagination)(req.query);
        let rows = await (0, googleSheets_js_1.readLeadRows)();
        // Filter by status
        if (status) {
            rows = rows.filter(r => r['Status']?.toLowerCase() === status.toLowerCase());
        }
        // Filter by search (name, email, company)
        if (search) {
            const q = search.toLowerCase();
            rows = rows.filter(r => r['Name']?.toLowerCase().includes(q) ||
                r['Email']?.toLowerCase().includes(q) ||
                r['Company']?.toLowerCase().includes(q));
        }
        const total = rows.length;
        // Paginate
        const paginated = rows.slice(pg.skip, pg.skip + pg.limit);
        // Map to a clean object for the frontend
        const items = paginated.map(r => ({
            id: r['ID'],
            leadRef: r['ID'],
            name: r['Name'],
            email: r['Email'],
            phone: r['Phone'],
            company: r['Company'],
            serviceInterest: r['Service Interest'],
            budgetRange: r['Budget Range'],
            preferredContactMethod: r['Preferred Contact'],
            message: r['Message'],
            source: r['Source'],
            status: r['Status'],
            createdAt: r['Timestamp'],
        }));
        return (0, response_js_1.ok)(res, {
            items,
            pagination: {
                total,
                page: pg.page,
                limit: pg.limit,
                totalPages: Math.ceil(total / pg.limit),
            },
        });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// ── PATCH /api/leads/:id/status — admin: update status ───────
router.patch('/:id/status', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        const { status } = req.body;
        if (!status || !VALID_STATUSES.includes(status)) {
            return (0, response_js_1.fail)(res, `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}`);
        }
        const updated = await (0, googleSheets_js_1.updateLeadStatus)(id, status);
        if (!updated)
            return (0, response_js_1.fail)(res, 'Lead not found', 404, 'NOT_FOUND');
        return (0, response_js_1.ok)(res, { id, status, message: 'Status updated' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// ── GET /api/leads/test-connection — admin: verify sheets ────
router.get('/test-connection', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (_req, res) => {
    const result = await (0, googleSheets_js_1.testSheetsConnection)();
    if (result.ok) {
        return (0, response_js_1.ok)(res, result);
    }
    return res.status(503).json({ success: false, error: { code: 'SHEETS_UNAVAILABLE', message: result.message } });
});
exports.default = router;
//# sourceMappingURL=leads.js.map