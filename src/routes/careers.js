"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = (0, express_1.Router)();
const jobSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1).regex(/^[a-z0-9-]+$/),
    title: zod_1.z.string().min(1).max(200),
    department: zod_1.z.string().optional(),
    location: zod_1.z.string().optional(),
    employmentType: zod_1.z.string().optional(),
    experience: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    responsibilities: zod_1.z.string().optional(),
    requirements: zod_1.z.string().optional(),
    benefits: zod_1.z.string().optional(),
    salaryRange: zod_1.z.string().optional(),
    published: zod_1.z.boolean().optional(),
    closingDate: zod_1.z.string().optional(),
});
const applicationSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(200),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string().optional(),
    resumeUrl: zod_1.z.string().url().optional().or(zod_1.z.literal('')),
    linkedin: zod_1.z.string().url().optional().or(zod_1.z.literal('')),
    portfolio: zod_1.z.string().url().optional().or(zod_1.z.literal('')),
    coverMessage: zod_1.z.string().optional(),
});
// Public: get active jobs
router.get('/', async (req, res) => {
    try {
        const pg = (0, response_js_1.getPagination)(req.query);
        const where = req.query['all'] === 'true' ? {} : { published: true };
        const [jobs, total] = await Promise.all([
            prisma_js_1.prisma.job.findMany({ where, orderBy: { createdAt: 'desc' }, skip: pg.skip, take: pg.limit }),
            prisma_js_1.prisma.job.count({ where }),
        ]);
        return (0, response_js_1.ok)(res, (0, response_js_1.paginatedResponse)(jobs, total, pg));
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.get('/:slug', async (req, res) => {
    try {
        const job = await prisma_js_1.prisma.job.findUnique({ where: { slug: req.params['slug'] } });
        if (!job || (!job.published && !req.headers['authorization'])) {
            return (0, response_js_1.fail)(res, 'Job not found', 404, 'NOT_FOUND');
        }
        return (0, response_js_1.ok)(res, job);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// Public: submit application
router.post('/:slug/apply', async (req, res) => {
    try {
        const job = await prisma_js_1.prisma.job.findUnique({ where: { slug: req.params['slug'] } });
        if (!job || !job.published)
            return (0, response_js_1.fail)(res, 'Job not found', 404, 'NOT_FOUND');
        const parsed = applicationSchema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const app = await prisma_js_1.prisma.jobApplication.create({ data: { ...parsed.data, jobId: job.id } });
        return (0, response_js_1.created)(res, { id: app.id, message: 'Application submitted successfully. We will review it and be in touch.' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// Admin CRUD
router.post('/', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = jobSchema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const data = { ...parsed.data };
        if (parsed.data.closingDate)
            data['closingDate'] = new Date(parsed.data.closingDate);
        const job = await prisma_js_1.prisma.job.create({ data });
        return (0, response_js_1.created)(res, job);
    }
    catch (err) {
        if (err.code === 'P2002')
            return (0, response_js_1.fail)(res, 'Job with this slug already exists', 409, 'DUPLICATE');
        return (0, response_js_1.serverError)(res, err);
    }
});
router.put('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const parsed = jobSchema.partial().safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const job = await prisma_js_1.prisma.job.update({ where: { id: req.params['id'] }, data: parsed.data });
        return (0, response_js_1.ok)(res, job);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
router.delete('/:id', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        await prisma_js_1.prisma.job.delete({ where: { id: req.params['id'] } });
        return (0, response_js_1.ok)(res, { message: 'Job deleted' });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// Admin: get applications for a job
router.get('/:id/applications', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (req, res) => {
    try {
        const apps = await prisma_js_1.prisma.jobApplication.findMany({
            where: { jobId: req.params['id'] },
            orderBy: { createdAt: 'desc' },
        });
        return (0, response_js_1.ok)(res, apps);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=careers.js.map