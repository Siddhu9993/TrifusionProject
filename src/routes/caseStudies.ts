import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, created, fail, serverError, getPagination, paginatedResponse } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

const caseStudySchema = z.object({
    slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
    title: z.string().min(1).max(300),
    clientName: z.string().optional(),
    industryId: z.string().optional(),
    overview: z.string().optional(),
    challenge: z.string().optional(),
    objectives: z.string().optional(),
    solution: z.string().optional(),
    architecture: z.string().optional(),
    timeline: z.string().optional(),
    published: z.boolean().optional(),
    featured: z.boolean().optional(),
    heroImage: z.string().optional(),
    sortOrder: z.number().optional(),
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
});

router.get('/', async (req, res) => {
    try {
        const pg = getPagination(req.query as Record<string, unknown>);
        const { industry, featured } = req.query as { industry?: string; featured?: string };
        const where: Record<string, unknown> = req.query['all'] === 'true' ? {} : { published: true };
        if (industry) where['industry'] = { slug: industry };
        if (featured === 'true') where['featured'] = true;

        const [items, total] = await Promise.all([
            prisma.caseStudy.findMany({
                where,
                orderBy: [{ featured: 'desc' }, { sortOrder: 'asc' }],
                skip: pg.skip,
                take: pg.limit,
                include: { industry: true, metrics: { orderBy: { sortOrder: 'asc' } }, technologies: true },
            }),
            prisma.caseStudy.count({ where }),
        ]);
        return ok(res, paginatedResponse(items, total, pg));
    } catch (err) {
        return serverError(res, err);
    }
});

router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params['slug'] as string;
        const cs = await prisma.caseStudy.findUnique({
            where: { slug },
            include: {
                industry: true,
                metrics: { orderBy: { sortOrder: 'asc' } },
                technologies: true,
                images: { orderBy: { sortOrder: 'asc' } },
                services: { include: { service: true } },
                testimonial: true,
            },
        });
        if (!cs || (!cs.published && !req.headers['authorization'])) {
            return fail(res, 'Case study not found', 404, 'NOT_FOUND');
        }
        return ok(res, cs);
    } catch (err) {
        return serverError(res, err);
    }
});

router.post('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const parsed = caseStudySchema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const cs = await prisma.caseStudy.create({ data: parsed.data });
        return created(res, cs);
    } catch (err: any) {
        if (err.code === 'P2002') return fail(res, 'Case study with this slug already exists', 409, 'DUPLICATE');
        return serverError(res, err);
    }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const parsed = caseStudySchema.partial().safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const cs = await prisma.caseStudy.update({ where: { id }, data: parsed.data });
        return ok(res, cs);
    } catch (err) {
        return serverError(res, err);
    }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        await prisma.caseStudy.delete({ where: { id } });
        return ok(res, { message: 'Case study deleted' });
    } catch (err) {
        return serverError(res, err);
    }
});

export default router;
