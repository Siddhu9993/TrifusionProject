import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, created, fail, serverError, getPagination, paginatedResponse, generateLeadRef } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';
import rateLimit from 'express-rate-limit';

const router = Router();

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { success: false, error: { code: 'RATE_LIMITED', message: 'Too many requests. Please try again later.' } },
});

const leadSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    company: z.string().optional(),
    serviceInterest: z.string().optional(),
    projectType: z.string().optional(),
    budgetRange: z.string().optional(),
    preferredContactMethod: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

// POST /api/leads  — public contact form submission
router.post('/', contactLimiter, async (req, res) => {
    try {
        const parsed = leadSchema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');

        const leadRef = generateLeadRef();
        const lead = await prisma.lead.create({
            data: {
                ...parsed.data,
                leadRef,
                source: 'WEBSITE',
                ipAddress: req.ip,
            },
        });

        return created(res, { leadRef: lead.leadRef, message: 'Your message has been received. We will be in touch soon.' });
    } catch (err) {
        return serverError(res, err);
    }
});

// GET /api/leads  — admin only
router.get('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const pg = getPagination(req.query as Record<string, unknown>);
        const { status, search } = req.query as { status?: string; search?: string };

        const where: Record<string, unknown> = {};
        if (status) where['status'] = status;
        if (search) {
            where['OR'] = [
                { name: { contains: search } },
                { email: { contains: search } },
                { company: { contains: search } },
            ];
        }

        const [leads, total] = await Promise.all([
            prisma.lead.findMany({ where, orderBy: { createdAt: 'desc' }, skip: pg.skip, take: pg.limit, include: { notes: true } }),
            prisma.lead.count({ where }),
        ]);

        return ok(res, paginatedResponse(leads, total, pg));
    } catch (err) {
        return serverError(res, err);
    }
});

// GET /api/leads/:id
router.get('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const lead = await prisma.lead.findUnique({ where: { id }, include: { notes: { include: { user: { select: { name: true, email: true } } } } } });
        if (!lead) return fail(res, 'Lead not found', 404, 'NOT_FOUND');
        return ok(res, lead);
    } catch (err) {
        return serverError(res, err);
    }
});

// PATCH /api/leads/:id/status
router.patch('/:id/status', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const { status } = req.body;
        const valid = ['NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL', 'NEGOTIATION', 'WON', 'LOST'];
        if (!valid.includes(status)) return fail(res, 'Invalid status value');

        const lead = await prisma.lead.update({ where: { id }, data: { status } });
        return ok(res, lead);
    } catch (err) {
        return serverError(res, err);
    }
});

// POST /api/leads/:id/notes
router.post('/:id/notes', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const { note } = req.body;
        if (!note?.trim()) return fail(res, 'Note content is required');

        const authReq = req as any;
        const newNote = await prisma.leadNote.create({
            data: { leadId: id, userId: authReq.user.id, note: note.trim() },
        });
        return created(res, newNote);
    } catch (err) {
        return serverError(res, err);
    }
});

// DELETE /api/leads/:id
router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        await prisma.lead.delete({ where: { id } });
        return ok(res, { message: 'Lead deleted' });
    } catch (err) {
        return serverError(res, err);
    }
});

export default router;
