import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, created, fail, serverError } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

const schema = z.object({
    key: z.string().min(1).regex(/^[A-Z0-9_]+$/),
    value: z.string().optional(),
    label: z.string().optional(),
    group: z.string().optional(),
});

// GET all public settings
router.get('/', async (_req, res) => {
    try {
        const settings = await prisma.siteSetting.findMany({ orderBy: { group: 'asc' } });
        const map: Record<string, string | null> = {};
        settings.forEach(s => { map[s.key] = s.value; });
        return ok(res, map);
    } catch (err) { return serverError(res, err); }
});

// Admin: get all settings with metadata
router.get('/admin/all', authenticateToken, requireAdmin, async (_req, res) => {
    try {
        const settings = await prisma.siteSetting.findMany({ orderBy: { group: 'asc' } });
        return ok(res, settings);
    } catch (err) { return serverError(res, err); }
});

// Admin: upsert setting
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const s = await prisma.siteSetting.upsert({
            where: { key: parsed.data.key },
            create: parsed.data,
            update: { value: parsed.data.value, label: parsed.data.label },
        });
        return ok(res, s);
    } catch (err) { return serverError(res, err); }
});

// Admin: bulk update settings
router.put('/bulk', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const updates = req.body as Array<{ key: string; value: string }>;
        if (!Array.isArray(updates)) return fail(res, 'Expected array of {key, value}');
        await Promise.all(updates.map(({ key, value }) =>
            prisma.siteSetting.upsert({ where: { key }, create: { key, value }, update: { value } })
        ));
        return ok(res, { message: `Updated ${updates.length} setting(s)` });
    } catch (err) { return serverError(res, err); }
});

export default router;
