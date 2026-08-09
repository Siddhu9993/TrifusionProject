"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = (0, express_1.Router)();
const schema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(200),
    title: zod_1.z.string().optional(),
    company: zod_1.z.string().optional(),
    avatar: zod_1.z.string().optional(),
    quote: zod_1.z.string().min(10),
    rating: zod_1.z.number().min(1).max(5).optional(),
    published: zod_1.z.boolean().optional(),
    featured: zod_1.z.boolean().optional(),
    sortOrder: zod_1.z.number().optional(),
});
router.get('/', async (_req, res) => {
    try {
        const testimonials = await prisma_js_1.prisma.testimonial.findMany({
            where: { published: true },
            orderBy: [{ featured: 'desc' }, { sortOrder: 'asc' }],
        });
        return (0, response_js_1.ok)(res, testimonials);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.post('/', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const t = await prisma_js_1.prisma.testimonial.create({ data: parsed.data });
        return (0, response_js_1.created)(res, t);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.put('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = schema.partial().safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const t = await prisma_js_1.prisma.testimonial.update({ where: { id: req.params['id'] }, data: parsed.data });
        return (0, response_js_1.ok)(res, t);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.delete('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        await prisma_js_1.prisma.testimonial.delete({ where: { id: req.params['id'] } });
        return (0, response_js_1.ok)(res, { message: 'Deleted' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=testimonials.js.map