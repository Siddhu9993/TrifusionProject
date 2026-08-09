import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, created, fail, serverError, getPagination, paginatedResponse } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

const serviceSchema = z.object({
    slug: z.string().min(1).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase with hyphens only'),
    title: z.string().min(1).max(200),
    shortDesc: z.string().min(1).max(500),
    description: z.string().min(1),
    icon: z.string().optional(),
    heroImage: z.string().optional(),
    problemStatement: z.string().optional(),
    sortOrder: z.number().optional(),
    published: z.boolean().optional(),
    featured: z.boolean().optional(),
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
});

// GET /api/services  — public, only published
router.get('/', async (req, res) => {
    try {
        const showAll = req.query['all'] === 'true' && req.headers['authorization'];
        const pg = getPagination(req.query as Record<string, unknown>);

        const where = showAll ? {} : { published: true };
        const [services, total] = await Promise.all([
            prisma.service.findMany({
                where,
                orderBy: { sortOrder: 'asc' },
                skip: pg.skip,
                take: pg.limit,
                include: { features: { orderBy: { sortOrder: 'asc' } }, technologies: true },
            }),
            prisma.service.count({ where }),
        ]);
        return ok(res, paginatedResponse(services, total, pg));
    } catch (err) {
        return serverError(res, err);
    }
});

// GET /api/services/:slug
router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params['slug'] as string;
        const service = await prisma.service.findUnique({
            where: { slug },
            include: {
                features: { orderBy: { sortOrder: 'asc' } },
                technologies: true,
                faqs: { where: { published: true }, orderBy: { sortOrder: 'asc' } },
            },
        });
        if (!service || (!service.published && !req.headers['authorization'])) {
            return fail(res, 'Service not found', 404, 'NOT_FOUND');
        }
        return ok(res, service);
    } catch (err) {
        return serverError(res, err);
    }
});

// POST /api/services  — admin only
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const parsed = serviceSchema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');

        const service = await prisma.service.create({ data: parsed.data });
        return created(res, service);
    } catch (err: any) {
        if (err.code === 'P2002') return fail(res, 'A service with this slug already exists', 409, 'DUPLICATE');
        return serverError(res, err);
    }
});

// PUT /api/services/:id  — admin only
router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const parsed = serviceSchema.partial().safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');

        const service = await prisma.service.update({ where: { id }, data: parsed.data });
        return ok(res, service);
    } catch (err) {
        return serverError(res, err);
    }
});

// DELETE /api/services/:id  — admin only
router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        await prisma.service.delete({ where: { id } });
        return ok(res, { message: 'Service deleted' });
    } catch (err) {
        return serverError(res, err);
    }
});

export default router;
