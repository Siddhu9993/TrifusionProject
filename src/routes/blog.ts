import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, created, fail, serverError, getPagination, paginatedResponse } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

const postSchema = z.object({
    slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
    title: z.string().min(1).max(300),
    excerpt: z.string().optional(),
    content: z.string().min(1),
    featuredImage: z.string().optional(),
    author: z.string().optional(),
    categoryId: z.string().optional(),
    tags: z.string().optional(),
    readingTime: z.number().optional(),
    published: z.boolean().optional(),
    featured: z.boolean().optional(),
    publishedAt: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
    ogImage: z.string().optional(),
});

router.get('/', async (req, res) => {
    try {
        const pg = getPagination(req.query as Record<string, unknown>);
        const { category, tag, search } = req.query as { category?: string; tag?: string; search?: string };
        const where: Record<string, unknown> = req.query['all'] === 'true' ? {} : { published: true };
        if (category) where['category'] = { slug: category };
        if (tag) where['tags'] = { contains: tag };
        if (search) where['OR'] = [{ title: { contains: search } }, { excerpt: { contains: search } }];

        const [items, total] = await Promise.all([
            prisma.blogPost.findMany({
                where,
                orderBy: [{ featured: 'desc' }, { publishedAt: 'desc' }],
                skip: pg.skip,
                take: pg.limit,
                include: { category: true },
            }),
            prisma.blogPost.count({ where }),
        ]);
        return ok(res, paginatedResponse(items, total, pg));
    } catch (err) { return serverError(res, err); }
});

router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params['slug'] as string;
        const post = await prisma.blogPost.findUnique({
            where: { slug },
            include: { category: true },
        });
        if (!post || (!post.published && !req.headers['authorization'])) {
            return fail(res, 'Article not found', 404, 'NOT_FOUND');
        }
        return ok(res, post);
    } catch (err) { return serverError(res, err); }
});

router.post('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const parsed = postSchema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const data: any = { ...parsed.data };
        if (parsed.data.publishedAt) data['publishedAt'] = new Date(parsed.data.publishedAt);
        const post = await prisma.blogPost.create({ data });
        return created(res, post);
    } catch (err: any) {
        if (err.code === 'P2002') return fail(res, 'Post with this slug already exists', 409, 'DUPLICATE');
        return serverError(res, err);
    }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const parsed = postSchema.partial().safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const data: any = { ...parsed.data };
        if (parsed.data.publishedAt) data['publishedAt'] = new Date(parsed.data.publishedAt);
        const post = await prisma.blogPost.update({ where: { id }, data });
        return ok(res, post);
    } catch (err) { return serverError(res, err); }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        await prisma.blogPost.delete({ where: { id } });
        return ok(res, { message: 'Post deleted' });
    } catch (err) { return serverError(res, err); }
});

export default router;
