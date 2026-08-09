import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, created, fail, serverError, getPagination, paginatedResponse } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

const productSchema = z.object({
    slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
    name: z.string().min(1).max(200),
    tagline: z.string().optional(),
    description: z.string().min(1),
    logo: z.string().optional(),
    heroImage: z.string().optional(),
    category: z.string().optional(),
    status: z.enum(['ACTIVE', 'BETA', 'COMING_SOON', 'DEPRECATED']).optional(),
    externalUrl: z.string().url().optional().or(z.literal('')),
    targetIndustry: z.string().optional(),
    published: z.boolean().optional(),
    featured: z.boolean().optional(),
    sortOrder: z.number().optional(),
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
});

router.get('/', async (req, res) => {
    try {
        const pg = getPagination(req.query as Record<string, unknown>);
        const where = req.query['all'] === 'true' ? {} : { published: true };
        const [items, total] = await Promise.all([
            prisma.product.findMany({
                where,
                orderBy: [{ featured: 'desc' }, { sortOrder: 'asc' }],
                skip: pg.skip,
                take: pg.limit,
                include: { features: { orderBy: { sortOrder: 'asc' } }, technologies: true, screenshots: { orderBy: { sortOrder: 'asc' } } },
            }),
            prisma.product.count({ where }),
        ]);
        return ok(res, paginatedResponse(items, total, pg));
    } catch (err) {
        return serverError(res, err);
    }
});

router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params['slug'] as string;
        const product = await prisma.product.findUnique({
            where: { slug },
            include: { features: { orderBy: { sortOrder: 'asc' } }, technologies: true, screenshots: { orderBy: { sortOrder: 'asc' } } },
        });
        if (!product || (!product.published && !req.headers['authorization'])) {
            return fail(res, 'Product not found', 404, 'NOT_FOUND');
        }
        return ok(res, product);
    } catch (err) {
        return serverError(res, err);
    }
});

router.post('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const parsed = productSchema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const product = await prisma.product.create({ data: parsed.data });
        return created(res, product);
    } catch (err: any) {
        if (err.code === 'P2002') return fail(res, 'Product with this slug already exists', 409, 'DUPLICATE');
        return serverError(res, err);
    }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const parsed = productSchema.partial().safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const product = await prisma.product.update({ where: { id }, data: parsed.data });
        return ok(res, product);
    } catch (err) {
        return serverError(res, err);
    }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        await prisma.product.delete({ where: { id } });
        return ok(res, { message: 'Product deleted' });
    } catch (err) {
        return serverError(res, err);
    }
});

export default router;
