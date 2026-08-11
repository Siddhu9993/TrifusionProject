import { Router } from 'express';
import { prisma } from '../utils/prisma.js';
import { readLeadRows } from '../services/googleSheets.js';
import { ok, serverError } from '../utils/response.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = Router();

// GET /api/admin/stats — dashboard overview
router.get('/stats', authenticateToken, requireAdmin, async (_req, res) => {
    try {
        // Leads come from Google Sheets; everything else from Prisma/SQLite
        const [
            leadRows,
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
            readLeadRows().catch(() => []),        // graceful fallback
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

        const totalLeads = leadRows.length;
        const newLeads   = leadRows.filter(r => r['Status'] === 'New').length;

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
        const rows = await readLeadRows();
        // Return the 5 most recent (rows are in append order, so last 5)
        const recent = rows.slice(-5).reverse().map(r => ({
            id:        r['ID'],
            leadRef:   r['ID'],
            name:      r['Name'],
            email:     r['Email'],
            company:   r['Company'],
            status:    r['Status'],
            createdAt: r['Timestamp'],
        }));
        return ok(res, recent);
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
