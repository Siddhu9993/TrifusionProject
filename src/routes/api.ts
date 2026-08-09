import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { prisma } from '../utils/prisma';
import { authenticateToken, requireAdmin } from '../middlewares/auth';
import rateLimit from 'express-rate-limit';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret123';

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Too many requests, please try again later.' }
});

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    company: z.string().optional(),
    serviceInterest: z.string().optional(),
    message: z.string().min(1, 'Message is required'),
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

// Admin Login
router.post('/auth/login', async (req, res) => {
    try {
        const parsed = loginSchema.safeParse(req.body);
        if (!parsed.success) return res.status(400).json({ error: parsed.error?.issues[0]?.message || 'Validation error' });
        
        const { email, password } = parsed.data;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Submit Contact Form
router.post('/contact', contactLimiter, async (req, res) => {
    try {
        const parsed = contactSchema.safeParse(req.body);
        if (!parsed.success) return res.status(400).json({ error: parsed.error?.issues[0]?.message || 'Validation error' });

        const lead = await prisma.contactLead.create({
            data: parsed.data
        });

        res.status(201).json({ message: 'Message sent successfully!', leadId: lead.id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Admin Get Leads
router.get('/admin/leads', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const leads = await prisma.contactLead.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json({ leads });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Admin Update Lead Status
router.patch('/admin/leads/:id/status', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!['NEW', 'IN_PROGRESS', 'RESOLVED'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }
        const lead = await prisma.contactLead.update({
            where: { id: id as string },
            data: { status }
        });
        res.json({ lead });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
