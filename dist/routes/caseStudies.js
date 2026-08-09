"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = (0, express_1.Router)();
const caseStudySchema = zod_1.z.object({
    slug: zod_1.z.string().min(1).regex(/^[a-z0-9-]+$/),
    title: zod_1.z.string().min(1).max(300),
    clientName: zod_1.z.string().optional(),
    industryId: zod_1.z.string().optional(),
    overview: zod_1.z.string().optional(),
    challenge: zod_1.z.string().optional(),
    objectives: zod_1.z.string().optional(),
    solution: zod_1.z.string().optional(),
    architecture: zod_1.z.string().optional(),
    timeline: zod_1.z.string().optional(),
    published: zod_1.z.boolean().optional(),
    featured: zod_1.z.boolean().optional(),
    heroImage: zod_1.z.string().optional(),
    sortOrder: zod_1.z.number().optional(),
    seoTitle: zod_1.z.string().optional(),
    seoDesc: zod_1.z.string().optional(),
});
router.get('/', async (req, res) => {
    try {
        const pg = (0, response_js_1.getPagination)(req.query);
        const { industry, featured } = req.query;
        const where = req.query['all'] === 'true' ? {} : { published: true };
        if (industry)
            where['industry'] = { slug: industry };
        if (featured === 'true')
            where['featured'] = true;
        const [items, total] = await Promise.all([
            prisma_js_1.prisma.caseStudy.findMany({
                where,
                orderBy: [{ featured: 'desc' }, { sortOrder: 'asc' }],
                skip: pg.skip,
                take: pg.limit,
                include: { industry: true, metrics: { orderBy: { sortOrder: 'asc' } }, technologies: true },
            }),
            prisma_js_1.prisma.caseStudy.count({ where }),
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
        const cs = await prisma_js_1.prisma.caseStudy.findUnique({
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
            return (0, response_js_1.fail)(res, 'Case study not found', 404, 'NOT_FOUND');
        }
        return (0, response_js_1.ok)(res, cs);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.post('/', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = caseStudySchema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const cs = await prisma_js_1.prisma.caseStudy.create({ data: parsed.data });
        return (0, response_js_1.created)(res, cs);
    }
    catch (err) {
        if (err.code === 'P2002')
            return (0, response_js_1.fail)(res, 'Case study with this slug already exists', 409, 'DUPLICATE');
        return (0, response_js_1.serverError)(res, err);
    }
});
router.put('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        const parsed = caseStudySchema.partial().safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const cs = await prisma_js_1.prisma.caseStudy.update({ where: { id }, data: parsed.data });
        return (0, response_js_1.ok)(res, cs);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.delete('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        await prisma_js_1.prisma.caseStudy.delete({ where: { id } });
        return (0, response_js_1.ok)(res, { message: 'Case study deleted' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=caseStudies.js.map