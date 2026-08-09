"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = (0, express_1.Router)();
const serviceSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase with hyphens only'),
    title: zod_1.z.string().min(1).max(200),
    shortDesc: zod_1.z.string().min(1).max(500),
    description: zod_1.z.string().min(1),
    icon: zod_1.z.string().optional(),
    heroImage: zod_1.z.string().optional(),
    problemStatement: zod_1.z.string().optional(),
    sortOrder: zod_1.z.number().optional(),
    published: zod_1.z.boolean().optional(),
    featured: zod_1.z.boolean().optional(),
    seoTitle: zod_1.z.string().optional(),
    seoDesc: zod_1.z.string().optional(),
});
// GET /api/services  — public, only published
router.get('/', async (req, res) => {
    try {
        const showAll = req.query['all'] === 'true' && req.headers['authorization'];
        const pg = (0, response_js_1.getPagination)(req.query);
        const where = showAll ? {} : { published: true };
        const [services, total] = await Promise.all([
            prisma_js_1.prisma.service.findMany({
                where,
                orderBy: { sortOrder: 'asc' },
                skip: pg.skip,
                take: pg.limit,
                include: { features: { orderBy: { sortOrder: 'asc' } }, technologies: true },
            }),
            prisma_js_1.prisma.service.count({ where }),
        ]);
        return (0, response_js_1.ok)(res, (0, response_js_1.paginatedResponse)(services, total, pg));
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// GET /api/services/:slug
router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params['slug'];
        const service = await prisma_js_1.prisma.service.findUnique({
            where: { slug },
            include: {
                features: { orderBy: { sortOrder: 'asc' } },
                technologies: true,
                faqs: { where: { published: true }, orderBy: { sortOrder: 'asc' } },
            },
        });
        if (!service || (!service.published && !req.headers['authorization'])) {
            return (0, response_js_1.fail)(res, 'Service not found', 404, 'NOT_FOUND');
        }
        return (0, response_js_1.ok)(res, service);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// POST /api/services  — admin only
router.post('/', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = serviceSchema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const service = await prisma_js_1.prisma.service.create({ data: parsed.data });
        return (0, response_js_1.created)(res, service);
    }
    catch (err) {
        if (err.code === 'P2002')
            return (0, response_js_1.fail)(res, 'A service with this slug already exists', 409, 'DUPLICATE');
        return (0, response_js_1.serverError)(res, err);
    }
});
// PUT /api/services/:id  — admin only
router.put('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        const parsed = serviceSchema.partial().safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const service = await prisma_js_1.prisma.service.update({ where: { id }, data: parsed.data });
        return (0, response_js_1.ok)(res, service);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// DELETE /api/services/:id  — admin only
router.delete('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        await prisma_js_1.prisma.service.delete({ where: { id } });
        return (0, response_js_1.ok)(res, { message: 'Service deleted' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=services.js.map