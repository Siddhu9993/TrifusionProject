"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = (0, express_1.Router)();
const industrySchema = zod_1.z.object({
    slug: zod_1.z.string().min(1).regex(/^[a-z0-9-]+$/),
    title: zod_1.z.string().min(1).max(200),
    shortDesc: zod_1.z.string().min(1).max(500),
    description: zod_1.z.string().optional(),
    icon: zod_1.z.string().optional(),
    heroImage: zod_1.z.string().optional(),
    challenges: zod_1.z.string().optional(),
    outcomes: zod_1.z.string().optional(),
    sortOrder: zod_1.z.number().optional(),
    published: zod_1.z.boolean().optional(),
    seoTitle: zod_1.z.string().optional(),
    seoDesc: zod_1.z.string().optional(),
});
router.get('/', async (req, res) => {
    try {
        const pg = (0, response_js_1.getPagination)(req.query);
        const where = req.query['all'] === 'true' ? {} : { published: true };
        const [industries, total] = await Promise.all([
            prisma_js_1.prisma.industry.findMany({ where, orderBy: { sortOrder: 'asc' }, skip: pg.skip, take: pg.limit }),
            prisma_js_1.prisma.industry.count({ where }),
        ]);
        return (0, response_js_1.ok)(res, (0, response_js_1.paginatedResponse)(industries, total, pg));
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params['slug'];
        const industry = await prisma_js_1.prisma.industry.findUnique({
            where: { slug },
            include: {
                services: { include: { service: true } },
                caseStudies: { where: { published: true }, take: 4 },
                faqs: { where: { published: true }, orderBy: { sortOrder: 'asc' } },
            },
        });
        if (!industry || (!industry.published && !req.headers['authorization'])) {
            return (0, response_js_1.fail)(res, 'Industry not found', 404, 'NOT_FOUND');
        }
        return (0, response_js_1.ok)(res, industry);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.post('/', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = industrySchema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const industry = await prisma_js_1.prisma.industry.create({ data: parsed.data });
        return (0, response_js_1.created)(res, industry);
    }
    catch (err) {
        if (err.code === 'P2002')
            return (0, response_js_1.fail)(res, 'Industry with this slug already exists', 409, 'DUPLICATE');
        return (0, response_js_1.serverError)(res, err);
    }
});
router.put('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        const parsed = industrySchema.partial().safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const industry = await prisma_js_1.prisma.industry.update({ where: { id }, data: parsed.data });
        return (0, response_js_1.ok)(res, industry);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.delete('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        await prisma_js_1.prisma.industry.delete({ where: { id } });
        return (0, response_js_1.ok)(res, { message: 'Industry deleted' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=industries.js.map