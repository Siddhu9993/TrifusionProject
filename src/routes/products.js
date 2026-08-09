"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = (0, express_1.Router)();
const productSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1).regex(/^[a-z0-9-]+$/),
    name: zod_1.z.string().min(1).max(200),
    tagline: zod_1.z.string().optional(),
    description: zod_1.z.string().min(1),
    logo: zod_1.z.string().optional(),
    heroImage: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    status: zod_1.z.enum(['ACTIVE', 'BETA', 'COMING_SOON', 'DEPRECATED']).optional(),
    externalUrl: zod_1.z.string().url().optional().or(zod_1.z.literal('')),
    targetIndustry: zod_1.z.string().optional(),
    published: zod_1.z.boolean().optional(),
    featured: zod_1.z.boolean().optional(),
    sortOrder: zod_1.z.number().optional(),
    seoTitle: zod_1.z.string().optional(),
    seoDesc: zod_1.z.string().optional(),
});
router.get('/', async (req, res) => {
    try {
        const pg = (0, response_js_1.getPagination)(req.query);
        const where = req.query['all'] === 'true' ? {} : { published: true };
        const [items, total] = await Promise.all([
            prisma_js_1.prisma.product.findMany({
                where,
                orderBy: [{ featured: 'desc' }, { sortOrder: 'asc' }],
                skip: pg.skip,
                take: pg.limit,
                include: { features: { orderBy: { sortOrder: 'asc' } }, technologies: true, screenshots: { orderBy: { sortOrder: 'asc' } } },
            }),
            prisma_js_1.prisma.product.count({ where }),
        ]);
        return (0, response_js_1.ok)(res, (0, response_js_1.paginatedResponse)(items, total, pg));
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.get('/:slug', async (req, res) => {
    try {
        const product = await prisma_js_1.prisma.product.findUnique({
            where: { slug: req.params['slug'] },
            include: { features: { orderBy: { sortOrder: 'asc' } }, technologies: true, screenshots: { orderBy: { sortOrder: 'asc' } } },
        });
        if (!product || (!product.published && !req.headers['authorization'])) {
            return (0, response_js_1.fail)(res, 'Product not found', 404, 'NOT_FOUND');
        }
        return (0, response_js_1.ok)(res, product);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.post('/', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = productSchema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const product = await prisma_js_1.prisma.product.create({ data: parsed.data });
        return (0, response_js_1.created)(res, product);
    }
    catch (err) {
        if (err.code === 'P2002')
            return (0, response_js_1.fail)(res, 'Product with this slug already exists', 409, 'DUPLICATE');
        return (0, response_js_1.serverError)(res, err);
    }
});
router.put('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = productSchema.partial().safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const product = await prisma_js_1.prisma.product.update({ where: { id: req.params['id'] }, data: parsed.data });
        return (0, response_js_1.ok)(res, product);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.delete('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        await prisma_js_1.prisma.product.delete({ where: { id: req.params['id'] } });
        return (0, response_js_1.ok)(res, { message: 'Product deleted' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=products.js.map