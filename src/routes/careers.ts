import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, created, fail, serverError, getPagination, paginatedResponse } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

const jobSchema = z.object({
    slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
    title: z.string().min(1).max(200),
    department: z.string().optional(),
    location: z.string().optional(),
    employmentType: z.string().optional(),
    experience: z.string().optional(),
    description: z.string().optional(),
    responsibilities: z.string().optional(),
    requirements: z.string().optional(),
    benefits: z.string().optional(),
    salaryRange: z.string().optional(),
    published: z.boolean().optional(),
    closingDate: z.string().optional(),
});

const applicationSchema = z.object({
    name: z.string().min(2).max(200),
    email: z.string().email(),
    phone: z.string().optional(),
    resumeUrl: z.string().url().optional().or(z.literal('')),
    linkedin: z.string().url().optional().or(z.literal('')),
    portfolio: z.string().url().optional().or(z.literal('')),
    coverMessage: z.string().optional(),
});

// Public: get active jobs
router.get('/', async (req, res) => {
    try {
        const pg = getPagination(req.query as Record<string, unknown>);
        const where = req.query['all'] === 'true' ? {} : { published: true };
        const [jobs, total] = await Promise.all([
            prisma.job.findMany({ where, orderBy: { createdAt: 'desc' }, skip: pg.skip, take: pg.limit }),
            prisma.job.count({ where }),
        ]);
        return ok(res, paginatedResponse(jobs, total, pg));
    } catch (err) { return serverError(res, err); }
});

router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params['slug'] as string;
        const job = await prisma.job.findUnique({ where: { slug } });
        if (!job || (!job.published && !req.headers['authorization'])) {
            return fail(res, 'Job not found', 404, 'NOT_FOUND');
        }
        return ok(res, job);
    } catch (err) { return serverError(res, err); }
});

// Public: submit application
router.post('/:slug/apply', async (req, res) => {
    try {
        const slug = req.params['slug'] as string;
        const job = await prisma.job.findUnique({ where: { slug } });
        if (!job || !job.published) return fail(res, 'Job not found', 404, 'NOT_FOUND');

        const parsed = applicationSchema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');

        const app = await prisma.jobApplication.create({ data: { ...parsed.data, jobId: job.id } });
        return created(res, { id: app.id, message: 'Application submitted successfully. We will review it and be in touch.' });
    } catch (err) { return serverError(res, err); }
});

// Admin CRUD
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const parsed = jobSchema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const data: any = { ...parsed.data };
        if (parsed.data.closingDate) data['closingDate'] = new Date(parsed.data.closingDate);
        const job = await prisma.job.create({ data });
        return created(res, job);
    } catch (err: any) {
        if (err.code === 'P2002') return fail(res, 'Job with this slug already exists', 409, 'DUPLICATE');
        return serverError(res, err);
    }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const parsed = jobSchema.partial().safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');
        const job = await prisma.job.update({ where: { id }, data: parsed.data });
        return ok(res, job);
    } catch (err) { return serverError(res, err); }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        await prisma.job.delete({ where: { id } });
        return ok(res, { message: 'Job deleted' });
    } catch (err) { return serverError(res, err); }
});

// Admin: get applications for a job
router.get('/:id/applications', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const id = req.params['id'] as string;
        const apps = await prisma.jobApplication.findMany({
            where: { jobId: id },
            orderBy: { createdAt: 'desc' },
        });
        return ok(res, apps);
    } catch (err) { return serverError(res, err); }
});

export default router;
