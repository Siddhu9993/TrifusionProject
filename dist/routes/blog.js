"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = (0, express_1.Router)();
const postSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1).regex(/^[a-z0-9-]+$/),
    title: zod_1.z.string().min(1).max(300),
    excerpt: zod_1.z.string().optional(),
    content: zod_1.z.string().min(1),
    featuredImage: zod_1.z.string().optional(),
    author: zod_1.z.string().optional(),
    categoryId: zod_1.z.string().optional(),
    tags: zod_1.z.string().optional(),
    readingTime: zod_1.z.number().optional(),
    published: zod_1.z.boolean().optional(),
    featured: zod_1.z.boolean().optional(),
    publishedAt: zod_1.z.string().optional(),
    seoTitle: zod_1.z.string().optional(),
    seoDesc: zod_1.z.string().optional(),
    ogImage: zod_1.z.string().optional(),
});
router.get('/', async (req, res) => {
    try {
        const pg = (0, response_js_1.getPagination)(req.query);
        const { category, tag, search } = req.query;
        const where = req.query['all'] === 'true' ? {} : { published: true };
        if (category)
            where['category'] = { slug: category };
        if (tag)
            where['tags'] = { contains: tag };
        if (search)
            where['OR'] = [{ title: { contains: search } }, { excerpt: { contains: search } }];
        const [items, total] = await Promise.all([
            prisma_js_1.prisma.blogPost.findMany({
                where,
                orderBy: [{ featured: 'desc' }, { publishedAt: 'desc' }],
                skip: pg.skip,
                take: pg.limit,
                include: { category: true },
            }),
            prisma_js_1.prisma.blogPost.count({ where }),
        ]);
        return (0, response_js_1.ok)(res, (0, response_js_1.paginatedResponse)(items, total, pg));
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params['slug'];
        const post = await prisma_js_1.prisma.blogPost.findUnique({
            where: { slug },
            include: { category: true },
        });
        if (!post || (!post.published && !req.headers['authorization'])) {
            return (0, response_js_1.fail)(res, 'Article not found', 404, 'NOT_FOUND');
        }
        return (0, response_js_1.ok)(res, post);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.post('/', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = postSchema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const data = { ...parsed.data };
        if (parsed.data.publishedAt)
            data['publishedAt'] = new Date(parsed.data.publishedAt);
        const post = await prisma_js_1.prisma.blogPost.create({ data });
        return (0, response_js_1.created)(res, post);
    }
    catch (err) {
        if (err.code === 'P2002')
            return (0, response_js_1.fail)(res, 'Post with this slug already exists', 409, 'DUPLICATE');
        return (0, response_js_1.serverError)(res, err);
    }
});
router.put('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        const parsed = postSchema.partial().safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const data = { ...parsed.data };
        if (parsed.data.publishedAt)
            data['publishedAt'] = new Date(parsed.data.publishedAt);
        const post = await prisma_js_1.prisma.blogPost.update({ where: { id }, data });
        return (0, response_js_1.ok)(res, post);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.delete('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        await prisma_js_1.prisma.blogPost.delete({ where: { id } });
        return (0, response_js_1.ok)(res, { message: 'Post deleted' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=blog.js.map