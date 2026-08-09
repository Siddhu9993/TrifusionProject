import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, created, fail, serverError, getPagination, paginatedResponse } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

const industrySchema = z.object({
    slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
    title: z.string().min(1).max(200),
    shortDesc: z.string().min(1).max(500),
    description: z.string().optional(),
    icon: z.string().optional(),
    heroImage: z.string().optional(),
    challenges: z.string().optional(),
    outcomes: z.string().optional(),
    sortOrder: z.number().optional(),
    published: z.boolean().optional(),
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
});

router.get('/', async (req, res) => {
    try {
        const pg = getPagination(req.query as Record<string, unknown>);
        const where = req.query['all'] === 'true' ? {} : { published: true };
        const [industries, total] = await Promise.all([
            prisma.industry.findMany({ where, orderBy: { sortOrder: 'asc' }, skip: pg.skip, take: pg.limit }),
            prisma.industry.count({ where }),
        ]);
        return ok(res, paginatedResponse(industries, total, pg));
    } catch (err) {
        return serverError(res, err);
    }
});

router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params['slug'] as string;
        const industry = await prisma.industry.findUnique({
            where: { slug },
            include: {
                services: { include: { service: true } },
                caseStudies: { where: { published: true }, take: 4 },
                faqs: { where: { published: true }, orderBy: { sortOrder: 'asc' } },
            },
        });
        if (!industry || (!industry.published && !req.headers['authorization'])) {
            return fail(res, 'Industry not found', 404, 'NOT_FOUND');
        }
        return ok(res, industry);
    } catch (err) {
        return serverError(res, err);
    }
});

router.post('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const parsed = industrySchema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const industry = await prisma.industry.create({ data: parsed.data });
        return created(res, industry);
    } catch (err: any) {
        if (err.code === 'P2002') return fail(res, 'Industry with this slug already exists', 409, 'DUPLICATE');
        return serverError(res, err);
    }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const parsed = industrySchema.partial().safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const industry = await prisma.industry.update({ where: { id }, data: parsed.data });
        return ok(res, industry);
    } catch (err) {
        return serverError(res, err);
    }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        await prisma.industry.delete({ where: { id } });
        return ok(res, { message: 'Industry deleted' });
    } catch (err) {
        return serverError(res, err);
    }
});

export default router;
