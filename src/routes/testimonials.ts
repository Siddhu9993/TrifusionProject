import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, created, fail, serverError } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

const schema = z.object({
    name: z.string().min(1).max(200),
    title: z.string().optional(),
    company: z.string().optional(),
    avatar: z.string().optional(),
    quote: z.string().min(10),
    rating: z.number().min(1).max(5).optional(),
    published: z.boolean().optional(),
    featured: z.boolean().optional(),
    sortOrder: z.number().optional(),
});

router.get('/', async (_req, res) => {
    try {
        const testimonials = await prisma.testimonial.findMany({
            where: { published: true },
            orderBy: [{ featured: 'desc' }, { sortOrder: 'asc' }],
        });
        return ok(res, testimonials);
    } catch (err) { return serverError(res, err); }
});

router.post('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const t = await prisma.testimonial.create({ data: parsed.data });
        return created(res, t);
    } catch (err) { return serverError(res, err); }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const parsed = schema.partial().safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const t = await prisma.testimonial.update({ where: { id }, data: parsed.data });
        return ok(res, t);
    } catch (err) { return serverError(res, err); }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        await prisma.testimonial.delete({ where: { id } });
        return ok(res, { message: 'Deleted' });
    } catch (err) { return serverError(res, err); }
});

export default router;
