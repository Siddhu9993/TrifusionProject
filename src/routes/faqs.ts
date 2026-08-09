import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, created, fail, serverError } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

const schema = z.object({
    question: z.string().min(5),
    answer: z.string().min(10),
    categoryId: z.string().optional(),
    serviceId: z.string().optional(),
    industryId: z.string().optional(),
    published: z.boolean().optional(),
    sortOrder: z.number().optional(),
});

router.get('/', async (req, res) => {
    try {
        const { serviceId, industryId, categoryId } = req.query as Record<string, string | undefined>;
        const where: Record<string, unknown> = { published: true };
        if (serviceId) where['serviceId'] = serviceId;
        if (industryId) where['industryId'] = industryId;
        if (categoryId) where['categoryId'] = categoryId;

        const faqs = await prisma.fAQ.findMany({
            where,
            orderBy: { sortOrder: 'asc' },
            include: { category: true },
        });
        return ok(res, faqs);
    } catch (err) { return serverError(res, err); }
});

router.post('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const faq = await prisma.fAQ.create({ data: parsed.data });
        return created(res, faq);
    } catch (err) { return serverError(res, err); }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const parsed = schema.partial().safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const faq = await prisma.fAQ.update({ where: { id }, data: parsed.data });
        return ok(res, faq);
    } catch (err) { return serverError(res, err); }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        await prisma.fAQ.delete({ where: { id } });
        return ok(res, { message: 'FAQ deleted' });
    } catch (err) { return serverError(res, err); }
});

export default router;
