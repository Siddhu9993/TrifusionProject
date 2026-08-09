"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = (0, express_1.Router)();
const schema = zod_1.z.object({
    key: zod_1.z.string().min(1).regex(/^[A-Z0-9_]+$/),
    value: zod_1.z.string().optional(),
    label: zod_1.z.string().optional(),
    group: zod_1.z.string().optional(),
});
// GET all public settings
router.get('/', async (_req, res) => {
    try {
        const settings = await prisma_js_1.prisma.siteSetting.findMany({ orderBy: { group: 'asc' } });
        const map = {};
        settings.forEach(s => { map[s.key] = s.value; });
        return (0, response_js_1.ok)(res, map);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// Admin: get all settings with metadata
router.get('/admin/all', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (_req, res) => {
    try {
        const settings = await prisma_js_1.prisma.siteSetting.findMany({ orderBy: { group: 'asc' } });
        return (0, response_js_1.ok)(res, settings);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// Admin: upsert setting
router.post('/', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const s = await prisma_js_1.prisma.siteSetting.upsert({
            where: { key: parsed.data.key },
            create: parsed.data,
            update: { value: parsed.data.value, label: parsed.data.label },
        });
        return (0, response_js_1.ok)(res, s);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// Admin: bulk update settings
router.put('/bulk', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const updates = req.body;
        if (!Array.isArray(updates))
            return (0, response_js_1.fail)(res, 'Expected array of {key, value}');
        await Promise.all(updates.map(({ key, value }) => prisma_js_1.prisma.siteSetting.upsert({ where: { key }, create: { key, value }, update: { value } })));
        return (0, response_js_1.ok)(res, { message: `Updated ${updates.length} setting(s)` });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=settings.js.map