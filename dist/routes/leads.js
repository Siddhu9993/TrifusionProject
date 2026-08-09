"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const router = (0, express_1.Router)();
const contactLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { success: false, error: { code: 'RATE_LIMITED', message: 'Too many requests. Please try again later.' } },
});
const leadSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters').max(100),
    email: zod_1.z.string().email('Invalid email address'),
    phone: zod_1.z.string().optional(),
    company: zod_1.z.string().optional(),
    serviceInterest: zod_1.z.string().optional(),
    projectType: zod_1.z.string().optional(),
    budgetRange: zod_1.z.string().optional(),
    preferredContactMethod: zod_1.z.string().optional(),
    message: zod_1.z.string().min(10, 'Message must be at least 10 characters').max(5000),
});
// POST /api/leads  — public contact form submission
router.post('/', contactLimiter, async (req, res) => {
    try {
        const parsed = leadSchema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const leadRef = (0, response_js_1.generateLeadRef)();
        const lead = await prisma_js_1.prisma.lead.create({
            data: {
                ...parsed.data,
                leadRef,
                source: 'WEBSITE',
                ipAddress: req.ip,
            },
        });
        return (0, response_js_1.created)(res, { leadRef: lead.leadRef, message: 'Your message has been received. We will be in touch soon.' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// GET /api/leads  — admin only
router.get('/', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const pg = (0, response_js_1.getPagination)(req.query);
        const { status, search } = req.query;
        const where = {};
        if (status)
            where['status'] = status;
        if (search) {
            where['OR'] = [
                { name: { contains: search } },
                { email: { contains: search } },
                { company: { contains: search } },
            ];
        }
        const [leads, total] = await Promise.all([
            prisma_js_1.prisma.lead.findMany({ where, orderBy: { createdAt: 'desc' }, skip: pg.skip, take: pg.limit, include: { notes: true } }),
            prisma_js_1.prisma.lead.count({ where }),
        ]);
        return (0, response_js_1.ok)(res, (0, response_js_1.paginatedResponse)(leads, total, pg));
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// GET /api/leads/:id
router.get('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        const lead = await prisma_js_1.prisma.lead.findUnique({ where: { id }, include: { notes: { include: { user: { select: { name: true, email: true } } } } } });
        if (!lead)
            return (0, response_js_1.fail)(res, 'Lead not found', 404, 'NOT_FOUND');
        return (0, response_js_1.ok)(res, lead);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// PATCH /api/leads/:id/status
router.patch('/:id/status', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        const { status } = req.body;
        const valid = ['NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL', 'NEGOTIATION', 'WON', 'LOST'];
        if (!valid.includes(status))
            return (0, response_js_1.fail)(res, 'Invalid status value');
        const lead = await prisma_js_1.prisma.lead.update({ where: { id }, data: { status } });
        return (0, response_js_1.ok)(res, lead);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// POST /api/leads/:id/notes
router.post('/:id/notes', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        const { note } = req.body;
        if (!note?.trim())
            return (0, response_js_1.fail)(res, 'Note content is required');
        const authReq = req;
        const newNote = await prisma_js_1.prisma.leadNote.create({
            data: { leadId: id, userId: authReq.user.id, note: note.trim() },
        });
        return (0, response_js_1.created)(res, newNote);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// DELETE /api/leads/:id
router.delete('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        await prisma_js_1.prisma.lead.delete({ where: { id } });
        return (0, response_js_1.ok)(res, { message: 'Lead deleted' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=leads.js.map