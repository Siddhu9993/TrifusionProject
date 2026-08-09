import { Router } from 'express';
import { prisma } from '../utils/prisma.js';
import { ok, serverError } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

// GET /api/admin/stats — dashboard overview
router.get('/stats', authenticateToken, requireAdmin, async (_req, res) => {
    try {
        const [
            totalLeads,
            newLeads,
            services,
            publishedServices,
            industries,
            caseStudies,
            products,
            testimonials,
            blogPosts,
            publishedPosts,
            jobs,
            applications,
        ] = await Promise.all([
            prisma.lead.count(),
            prisma.lead.count({ where: { status: 'NEW' } }),
            prisma.service.count(),
            prisma.service.count({ where: { published: true } }),
            prisma.industry.count({ where: { published: true } }),
            prisma.caseStudy.count({ where: { published: true } }),
            prisma.product.count({ where: { published: true } }),
            prisma.testimonial.count({ where: { published: true } }),
            prisma.blogPost.count(),
            prisma.blogPost.count({ where: { published: true } }),
            prisma.job.count({ where: { published: true } }),
            prisma.jobApplication.count(),
        ]);

        return ok(res, {
            leads: { total: totalLeads, new: newLeads },
            services: { total: services, published: publishedServices },
            industries: { published: industries },
            caseStudies: { published: caseStudies },
            products: { published: products },
            testimonials: { published: testimonials },
            blog: { total: blogPosts, published: publishedPosts },
            careers: { openJobs: jobs, applications },
        });
    } catch (err) {
        return serverError(res, err);
    }
});

// GET /api/admin/leads/recent
router.get('/leads/recent', authenticateToken, requireAdmin, async (_req, res) => {
    try {
        const leads = await prisma.lead.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
        });
        return ok(res, leads);
    } catch (err) {
        return serverError(res, err);
    }
});

// GET /api/admin/applications/recent
router.get('/applications/recent', authenticateToken, requireAdmin, async (_req, res) => {
    try {
        const apps = await prisma.jobApplication.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: { job: { select: { title: true } } },
        });
        return ok(res, apps);
    } catch (err) {
        return serverError(res, err);
    }
});

export default router;
