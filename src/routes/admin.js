"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_js_1 = require("../utils/prisma.js");
const response_js_1 = require("../utils/response.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = (0, express_1.Router)();
// GET /api/admin/stats — dashboard overview
router.get('/stats', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (_req, res) => {
    try {
        const [totalLeads, newLeads, services, publishedServices, industries, caseStudies, products, testimonials, blogPosts, publishedPosts, jobs, applications,] = await Promise.all([
            prisma_js_1.prisma.lead.count(),
            prisma_js_1.prisma.lead.count({ where: { status: 'NEW' } }),
            prisma_js_1.prisma.service.count(),
            prisma_js_1.prisma.service.count({ where: { published: true } }),
            prisma_js_1.prisma.industry.count({ where: { published: true } }),
            prisma_js_1.prisma.caseStudy.count({ where: { published: true } }),
            prisma_js_1.prisma.product.count({ where: { published: true } }),
            prisma_js_1.prisma.testimonial.count({ where: { published: true } }),
            prisma_js_1.prisma.blogPost.count(),
            prisma_js_1.prisma.blogPost.count({ where: { published: true } }),
            prisma_js_1.prisma.job.count({ where: { published: true } }),
            prisma_js_1.prisma.jobApplication.count(),
        ]);
        return (0, response_js_1.ok)(res, {
            leads: { total: totalLeads, new: newLeads },
            services: { total: services, published: publishedServices },
            industries: { published: industries },
            caseStudies: { published: caseStudies },
            products: { published: products },
            testimonials: { published: testimonials },
            blog: { total: blogPosts, published: publishedPosts },
            careers: { openJobs: jobs, applications },
        });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// GET /api/admin/leads/recent
router.get('/leads/recent', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (_req, res) => {
    try {
        const leads = await prisma_js_1.prisma.lead.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
        });
        return (0, response_js_1.ok)(res, leads);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// GET /api/admin/applications/recent
router.get('/applications/recent', auth_js_1.authenticateToken, auth_js_1.requireAdmin, async (_req, res) => {
    try {
        const apps = await prisma_js_1.prisma.jobApplication.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: { job: { select: { title: true } } },
        });
        return (0, response_js_1.ok)(res, apps);
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
exports.default = router;
//# sourceMappingURL=admin.js.map