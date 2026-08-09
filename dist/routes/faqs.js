"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = (0, express_1.Router)();
const schema = zod_1.z.object({
    question: zod_1.z.string().min(5),
    answer: zod_1.z.string().min(10),
    categoryId: zod_1.z.string().optional(),
    serviceId: zod_1.z.string().optional(),
    industryId: zod_1.z.string().optional(),
    published: zod_1.z.boolean().optional(),
    sortOrder: zod_1.z.number().optional(),
});
router.get('/', async (req, res) => {
    try {
        const { serviceId, industryId, categoryId } = req.query;
        const where = { published: true };
        if (serviceId)
            where['serviceId'] = serviceId;
        if (industryId)
            where['industryId'] = industryId;
        if (categoryId)
            where['categoryId'] = categoryId;
        const faqs = await prisma_js_1.prisma.fAQ.findMany({
            where,
            orderBy: { sortOrder: 'asc' },
            include: { category: true },
        });
        return (0, response_js_1.ok)(res, faqs);
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
        const faq = await prisma_js_1.prisma.fAQ.create({ data: parsed.data });
        return (0, response_js_1.created)(res, faq);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.put('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        const parsed = schema.partial().safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const faq = await prisma_js_1.prisma.fAQ.update({ where: { id }, data: parsed.data });
        return (0, response_js_1.ok)(res, faq);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.delete('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'];
        await prisma_js_1.prisma.fAQ.delete({ where: { id } });
        return (0, response_js_1.ok)(res, { message: 'FAQ deleted' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=faqs.js.map