"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("zod");
const prisma_1 = require("../utils/prisma");
const auth_1 = require("../middlewares/auth");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const router = (0, express_1.Router)();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret123';
const contactLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Too many requests, please try again later.' }
});
const contactSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    email: zod_1.z.string().email('Invalid email'),
    company: zod_1.z.string().optional(),
    serviceInterest: zod_1.z.string().optional(),
    message: zod_1.z.string().min(1, 'Message is required'),
});
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(1),
});
// Admin Login
router.post('/auth/login', async (req, res) => {
    try {
        const parsed = loginSchema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json({ error: parsed.error?.issues[0]?.message || 'Validation error' });
        const { email, password } = parsed.data;
        const user = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (!user)
            return res.status(401).json({ error: 'Invalid credentials' });
        const valid = await bcryptjs_1.default.compare(password, user.password);
        if (!valid)
            return res.status(401).json({ error: 'Invalid credentials' });
        const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});
// Submit Contact Form
router.post('/contact', contactLimiter, async (req, res) => {
    try {
        const parsed = contactSchema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json({ error: parsed.error?.issues[0]?.message || 'Validation error' });
        const lead = await prisma_1.prisma.contactLead.create({
            data: parsed.data
        });
        res.status(201).json({ message: 'Message sent successfully!', leadId: lead.id });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});
// Admin Get Leads
router.get('/admin/leads', auth_1.authenticateToken, auth_1.requireAdmin, async (req, res) => {
    try {
        const leads = await prisma_1.prisma.contactLead.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json({ leads });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});
// Admin Update Lead Status
router.patch('/admin/leads/:id/status', auth_1.authenticateToken, auth_1.requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!['NEW', 'IN_PROGRESS', 'RESOLVED'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }
        const lead = await prisma_1.prisma.contactLead.update({
            where: { id: id },
            data: { status }
        });
        res.json({ lead });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.default = router;
//# sourceMappingURL=api.js.map