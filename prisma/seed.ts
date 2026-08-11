// ============================================================
// Trifusion Technology LLP — Development Seed Data
// IMPORTANT: This is SAMPLE DEVELOPMENT DATA ONLY.
// It must NOT be presented as real Trifusion business data.
// All client names, metrics, testimonials are PLACEHOLDER content.
// ============================================================

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding Trifusion development data...\n');

    // ── Admin User ───────────────────────────────────────────
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@trifusiontechnology.in';
    const adminPass = process.env.ADMIN_PASSWORD || 'ChangeMe@2024!';
    const hashedPassword = await bcrypt.hash(adminPass, 12);

    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: { email: adminEmail, name: process.env.ADMIN_NAME || 'Trifusion Admin', password: hashedPassword, role: 'ADMIN' },
    });
    console.log(`✅ Admin user: ${admin.email}`);

    // ── Site Settings ────────────────────────────────────────
    const settings = [
        { key: 'SITE_NAME', value: 'Trifusion Technology LLP', label: 'Site Name', group: 'GENERAL' },
        { key: 'SITE_TAGLINE', value: 'Engineering Digital Products That Move Businesses Forward', label: 'Tagline', group: 'GENERAL' },
        { key: 'CONTACT_EMAIL', value: process.env.TRIFUSION_EMAIL || 'hello@trifusiontechnology.in', label: 'Contact Email', group: 'CONTACT' },
        { key: 'CONTACT_PHONE', value: process.env.TRIFUSION_PHONE || '[TODO: Add phone]', label: 'Phone', group: 'CONTACT' },
        { key: 'CONTACT_WHATSAPP', value: process.env.TRIFUSION_WHATSAPP || '[TODO: Add WhatsApp]', label: 'WhatsApp', group: 'CONTACT' },
        { key: 'CONTACT_ADDRESS', value: process.env.TRIFUSION_ADDRESS || '[TODO: Add address]', label: 'Address', group: 'CONTACT' },
        { key: 'SEO_DEFAULT_TITLE', value: 'Trifusion Technology LLP | Software Engineering & Digital Products', label: 'Default SEO Title', group: 'SEO' },
        { key: 'SEO_DEFAULT_DESC', value: 'Trifusion Technology LLP builds custom software, SaaS products, mobile apps, and AI-powered systems for businesses ready to scale.', label: 'Default SEO Description', group: 'SEO' },
        { key: 'LINKEDIN_URL', value: 'https://linkedin.com/company/[TODO]', label: 'LinkedIn', group: 'SOCIAL' },
        { key: 'TWITTER_URL', value: '', label: 'Twitter/X', group: 'SOCIAL' },
        { key: 'GITHUB_URL', value: '', label: 'GitHub', group: 'SOCIAL' },
    ];

    for (const s of settings) {
        await prisma.siteSetting.upsert({ where: { key: s.key }, create: s, update: { value: s.value } });
    }
    console.log(`✅ Site settings: ${settings.length} configured`);

    // ── FAQ Categories ───────────────────────────────────────
    const faqCategories = [
        { name: 'General', slug: 'general', sortOrder: 0 },
        { name: 'Engagement & Process', slug: 'engagement', sortOrder: 1 },
        { name: 'Technical', slug: 'technical', sortOrder: 2 },
        { name: 'Pricing', slug: 'pricing', sortOrder: 3 },
    ];

    for (const cat of faqCategories) {
        await prisma.fAQCategory.upsert({ where: { slug: cat.slug }, create: cat, update: {} });
    }

    const generalCat = await prisma.fAQCategory.findUnique({ where: { slug: 'general' } });
    const engCat = await prisma.fAQCategory.findUnique({ where: { slug: 'engagement' } });
    const priceCat = await prisma.fAQCategory.findUnique({ where: { slug: 'pricing' } });
    console.log(`✅ FAQ categories: ${faqCategories.length} created`);

    // ── Services ─────────────────────────────────────────────
    const servicesData = [
        {
            slug: 'custom-software-development',
            title: 'Custom Software Development',
            shortDesc: 'Bespoke software engineered around your exact business workflows, not forced into an off-the-shelf template.',
            description: 'We design and build software that fits your operations precisely. From greenfield systems to legacy modernization, our engineering teams deliver scalable, maintainable, production-grade solutions.',
            icon: 'code-2',
            problemStatement: 'Generic software creates operational constraints. Businesses reach a ceiling when their tools don\'t match their unique processes.',
            sortOrder: 0,
            published: true,
            featured: true,
        },
        {
            slug: 'web-application-development',
            title: 'Web Application Development',
            shortDesc: 'High-performance web applications built with modern frameworks and engineered for scale.',
            description: 'We build web applications that perform under load, look professional on every screen, and convert visitors into customers. From customer portals to internal tools.',
            icon: 'globe',
            problemStatement: 'Slow, outdated web applications drive customers away and limit your team\'s productivity.',
            sortOrder: 1,
            published: true,
            featured: true,
        },
        {
            slug: 'mobile-app-development',
            title: 'Mobile App Development',
            shortDesc: 'Native and cross-platform mobile applications for iOS and Android.',
            description: 'From consumer apps to enterprise mobile solutions, we build intuitive mobile experiences that users actually want to use. React Native, Flutter, and native development.',
            icon: 'smartphone',
            problemStatement: 'Mobile is where your users are. A poor mobile experience means lost opportunities.',
            sortOrder: 2,
            published: true,
            featured: true,
        },
        {
            slug: 'smart-gst-accounting',
            title: 'Smart GST & Accounting Systems',
            shortDesc: 'Compliance made effortless, with audit‑ready records and automated filings built into your workflows.',
            description: 'We help businesses streamline their accounting and GST compliance with automated, audit-ready solutions integrated directly into their operational workflows.',
            icon: 'layers',
            problemStatement: 'Building a SaaS product is complex. Multi-tenancy, billing, security, and scalability must be right from the start.',
            sortOrder: 3,
            published: true,
            featured: true,
        },
        {
            slug: 'ai-ml',
            title: 'AI & Machine Learning',
            shortDesc: 'Practical AI integrations and custom ML models that solve real business problems.',
            description: 'We implement LLM integrations, recommendation systems, predictive analytics, computer vision, and NLP solutions — focused on ROI, not buzzwords.',
            icon: 'brain',
            problemStatement: 'AI has moved from hype to essential. Businesses not leveraging AI are already falling behind.',
            sortOrder: 4,
            published: true,
            featured: true,
        },
        {
            slug: 'data-analytics',
            title: 'Data Analytics & Business Intelligence',
            shortDesc: 'Transform raw data into clear business insights with robust analytics infrastructure.',
            description: 'We build data pipelines, dashboards, and BI systems that give leadership real-time visibility into what matters most.',
            icon: 'bar-chart-3',
            problemStatement: 'Decision-making based on gut feel or siloed spreadsheets is a competitive liability.',
            sortOrder: 5,
            published: true,
        },
        {
            slug: 'cloud-devops',
            title: 'Cloud & DevOps',
            shortDesc: 'Cloud architecture, infrastructure automation, and CI/CD pipelines for reliable deployments.',
            description: 'We design cloud-native architectures on AWS, GCP, and Azure, and build the DevOps pipelines that enable your team to ship confidently.',
            icon: 'cloud',
            problemStatement: 'Manual deployments, fragile infrastructure, and lack of observability slow down every team.',
            sortOrder: 6,
            published: true,
        },
        {
            slug: 'api-integration',
            title: 'API & System Integration',
            shortDesc: 'Connect your platforms, automate workflows, and eliminate data silos.',
            description: 'We design and build API layers that connect disparate systems, automate business processes, and create a unified data foundation.',
            icon: 'plug',
            problemStatement: 'Disconnected systems create manual work, data inconsistency, and operational drag.',
            sortOrder: 7,
            published: true,
        },
        {
            slug: 'ui-ux',
            title: 'UI/UX Engineering',
            shortDesc: 'Design systems and interfaces that users understand intuitively and businesses are proud of.',
            description: 'We combine UX research, information architecture, interaction design, and frontend engineering into cohesive digital experiences.',
            icon: 'pen-tool',
            problemStatement: 'Poor UX costs money. Confused users don\'t convert, don\'t retain, and don\'t recommend.',
            sortOrder: 8,
            published: true,
        },
        {
            slug: 'digital-transformation',
            title: 'Digital Transformation',
            shortDesc: 'End-to-end digital transformation strategy and implementation for established businesses.',
            description: 'We work with established businesses to modernize their technology stack, digitize operations, and build the digital capabilities needed to compete.',
            icon: 'refresh-cw',
            problemStatement: 'Legacy processes and technology create invisible ceilings. Transformation is a survival strategy.',
            sortOrder: 9,
            published: true,
        },
    ];

    const createdServices: Record<string, string> = {};
    for (const s of servicesData) {
        const svc = await prisma.service.upsert({ where: { slug: s.slug }, create: s, update: { published: s.published } });
        createdServices[s.slug] = svc.id;
    }
    console.log(`✅ Services: ${servicesData.length} created`);

    // ── Industries ───────────────────────────────────────────
    const industriesData = [
        {
            slug: 'healthcare',
            title: 'Healthcare',
            shortDesc: 'Secure, compliant software for healthcare providers, clinics, and health-tech startups.',
            icon: 'heart-pulse',
            challenges: JSON.stringify(['Data security and HIPAA compliance', 'Legacy system modernization', 'Patient engagement and retention', 'Interoperability between systems']),
            outcomes: JSON.stringify(['Faster patient workflows', 'Reduced administrative overhead', 'Improved care coordination', 'Scalable digital health infrastructure']),
            sortOrder: 0,
            published: true,
        },
        {
            slug: 'education',
            title: 'Education',
            shortDesc: 'E-learning platforms, student management systems, and EdTech products that improve outcomes.',
            icon: 'graduation-cap',
            challenges: JSON.stringify(['Low student engagement on digital platforms', 'Scalability for large learner cohorts', 'Content management complexity', 'Assessment and credentialing']),
            outcomes: JSON.stringify(['Higher course completion rates', 'Scalable LMS infrastructure', 'Personalized learning paths', 'Reduced administrative workload']),
            sortOrder: 1,
            published: true,
        },
        {
            slug: 'fintech',
            title: 'FinTech',
            shortDesc: 'Secure financial applications, payment systems, and regulatory-compliant fintech solutions.',
            icon: 'landmark',
            challenges: JSON.stringify(['Regulatory compliance (PCI DSS, GDPR)', 'Fraud detection and prevention', 'Real-time transaction processing', 'User trust and security perception']),
            outcomes: JSON.stringify(['Compliant financial workflows', 'Reduced fraud exposure', 'Faster transaction processing', 'Improved user trust']),
            sortOrder: 2,
            published: true,
        },
        {
            slug: 'ecommerce',
            title: 'E-Commerce',
            shortDesc: 'Scalable e-commerce platforms, marketplace systems, and retail tech solutions.',
            icon: 'shopping-bag',
            challenges: JSON.stringify(['Peak load performance', 'Cart abandonment', 'Inventory management complexity', 'Multi-channel retail coordination']),
            outcomes: JSON.stringify(['Improved conversion rates', 'Faster page loads', 'Unified inventory visibility', 'Better customer retention']),
            sortOrder: 3,
            published: true,
        },
        {
            slug: 'logistics',
            title: 'Logistics',
            shortDesc: 'Fleet management, route optimization, tracking, and supply-chain software.',
            icon: 'truck',
            challenges: JSON.stringify(['Real-time fleet visibility', 'Last-mile delivery optimization', 'Manual tracking and documentation', 'Supply chain disruptions']),
            outcomes: JSON.stringify(['Reduced fuel costs', 'Faster delivery times', 'Real-time shipment visibility', 'Paperless operations']),
            sortOrder: 4,
            published: true,
        },
        {
            slug: 'real-estate',
            title: 'Real Estate',
            shortDesc: 'Property management platforms, listing portals, and PropTech solutions.',
            icon: 'building',
            challenges: JSON.stringify(['Lead management inefficiency', 'Scattered property data', 'Manual transaction workflows', 'Customer experience in digital channels']),
            outcomes: JSON.stringify(['Faster deal cycles', 'Centralized property database', 'Automated lead nurturing', 'Professional digital presence']),
            sortOrder: 5,
            published: true,
        },
        {
            slug: 'manufacturing',
            title: 'Manufacturing',
            shortDesc: 'MES, ERP integrations, IoT dashboards, and production workflow systems.',
            icon: 'factory',
            challenges: JSON.stringify(['Production visibility gaps', 'Quality control tracking', 'Equipment downtime and maintenance', 'Supply chain coordination']),
            outcomes: JSON.stringify(['Improved OEE', 'Reduced defect rates', 'Predictive maintenance capability', 'Better supply chain visibility']),
            sortOrder: 6,
            published: true,
        },
        {
            slug: 'retail',
            title: 'Retail',
            shortDesc: 'Point-of-sale systems, loyalty platforms, and omnichannel retail technology.',
            icon: 'store',
            challenges: JSON.stringify(['Omnichannel coordination', 'Customer data fragmentation', 'Inventory accuracy', 'Loyalty program complexity']),
            outcomes: JSON.stringify(['Unified customer view', 'Accurate inventory', 'Higher repeat purchase rates', 'Improved NPS']),
            sortOrder: 7,
            published: true,
        },
    ];

    const createdIndustries: Record<string, string> = {};
    for (const ind of industriesData) {
        const industry = await prisma.industry.upsert({ where: { slug: ind.slug }, create: ind, update: { published: ind.published } });
        createdIndustries[ind.slug] = industry.id;
    }
    console.log(`✅ Industries: ${industriesData.length} created`);

    // ── FAQs ─────────────────────────────────────────────────
    const faqsData = [
        { question: 'What types of projects does Trifusion work on?', answer: 'We work on a wide range of digital projects including custom software, SaaS products, mobile applications, AI integrations, web applications, and data analytics systems. Our focus is on B2B technology projects where engineering quality and business outcomes both matter.', categoryId: generalCat?.id, published: true, sortOrder: 0 },
        { question: 'How does your engagement process work?', answer: 'We start with a discovery call to understand your goals and requirements. Then we move to a scoped proposal covering timeline, team, and investment. Once aligned, we begin with a sprint-zero kickoff — architecture planning, design system setup, and sprint structure before any development starts.', categoryId: engCat?.id, published: true, sortOrder: 0 },
        { question: 'Do you work with startups or only established companies?', answer: 'Both. We work with funded startups building their first product, and with established companies modernizing or extending their existing systems. The team composition and engagement model are adapted to each context.', categoryId: generalCat?.id, published: true, sortOrder: 1 },
        { question: 'What is the minimum project size you work with?', answer: 'We\'re best suited for projects with meaningful scope and clear business intent. For discovery engagements, we can start smaller. Reach out and we\'ll give you an honest assessment of fit.', categoryId: priceCat?.id, published: true, sortOrder: 0 },
        { question: 'How do you handle intellectual property?', answer: 'All intellectual property created during your project is fully transferred to you upon project completion and final payment. We operate under clean work-for-hire agreements.', categoryId: generalCat?.id, published: true, sortOrder: 2 },
        { question: 'Do you offer post-launch support?', answer: 'Yes. We offer structured support and maintenance plans covering bug fixes, performance monitoring, minor enhancements, and infrastructure management. Support terms are defined in your engagement agreement.', categoryId: engCat?.id, published: true, sortOrder: 1 },
        { question: 'What technologies do you use?', answer: 'We are technology pragmatists — we choose the right tool for each context. Our team is strong across React, Next.js, Node.js, Python, PostgreSQL, AWS, and mobile frameworks including React Native and Flutter. We\'re also active with AI/ML tooling including LLMs, vector databases, and ML pipelines.', categoryId: null, published: true, sortOrder: 3 },
        { question: 'How do you ensure code quality?', answer: 'We follow structured engineering practices: code reviews on every pull request, automated testing at multiple levels, TypeScript for type safety, CI/CD pipelines, and regular architecture reviews. Quality is not a phase — it\'s part of every sprint.', categoryId: null, published: true, sortOrder: 4 },
    ];

    for (const faq of faqsData) {
        await prisma.fAQ.create({ data: faq }).catch(() => {}); // skip duplicates on re-seed
    }
    console.log(`✅ FAQs: ${faqsData.length} created`);

    // ── Blog Categories ──────────────────────────────────────
    const blogCats = [
        { name: 'Engineering', slug: 'engineering', sortOrder: 0 },
        { name: 'Product', slug: 'product', sortOrder: 1 },
        { name: 'Business', slug: 'business', sortOrder: 2 },
        { name: 'AI & Technology', slug: 'ai-technology', sortOrder: 3 },
    ];

    const createdBlogCats: Record<string, string> = {};
    for (const cat of blogCats) {
        const bc = await prisma.blogCategory.upsert({ where: { slug: cat.slug }, create: cat, update: {} });
        createdBlogCats[cat.slug] = bc.id;
    }

    // ── Sample Blog Posts ────────────────────────────────────
    // [DEVELOPMENT SAMPLE DATA — not real articles]
    const blogPosts = [
        {
            slug: 'why-most-saas-products-fail-at-architecture',
            title: 'Why Most SaaS Products Fail at Architecture (And How to Not Be One of Them)',
            excerpt: 'The architectural decisions you make in weeks 1–4 determine whether your SaaS product scales gracefully or becomes a rewrite project at month 18.',
            content: `# Why Most SaaS Products Fail at Architecture

The first few weeks of a SaaS product feel fast. Features ship, demos impress, and the feedback loop is tight. Then, around month 12–18, something shifts. The codebase becomes harder to change. New features take longer. The team spends more time debugging than building.

This is almost never a language or framework problem. It's almost always an architecture problem that was baked in early.

## The Three Most Common Early Mistakes

**1. Single-tenant thinking in a multi-tenant world**

Building a SaaS product for a single customer or yourself and then trying to "add multi-tenancy later" is one of the most expensive refactors in software development.

**2. Skipping the data model**

Rushing to UI without establishing a clean, normalized data model creates compounding technical debt that becomes impossible to pay off cleanly.

**3. No separation of concerns**

Mixing business logic, API handling, and data access in the same files makes testing hard and refactoring harder.

## What Good SaaS Architecture Looks Like

A well-architected SaaS product has clear boundaries: the API layer doesn't know about the database, the business logic layer doesn't know about the HTTP layer, and the frontend doesn't know about implementation details.

[DEVELOPMENT SAMPLE — This is placeholder content]`,
            categoryId: createdBlogCats['engineering'],
            author: 'Trifusion Engineering',
            readingTime: 7,
            published: true,
            featured: true,
            publishedAt: new Date('2026-07-15'),
            seoTitle: 'Why SaaS Products Fail at Architecture | Trifusion Technology',
            seoDesc: 'The architectural decisions you make in weeks 1–4 determine whether your SaaS product scales or becomes a rewrite. Here\'s what to do differently.',
            tags: JSON.stringify(['SaaS', 'Architecture', 'Engineering']),
        },
        {
            slug: 'building-ai-features-that-actually-work',
            title: 'Building AI Features That Actually Work in Production',
            excerpt: 'LLMs are powerful but non-deterministic. Here\'s how we think about integrating AI features into production software without creating brittle systems.',
            content: `# Building AI Features That Actually Work in Production

Everybody wants AI features. Not everybody knows what "AI features" means in a production context.

There\'s a large gap between "we have an API call to GPT-4" and "we have a reliable, testable, maintainable AI feature that our customers depend on."

## Treating AI Outputs Like Untrusted Input

The key mental model shift is this: treat your LLM\'s output like user input. Validate it. Handle failures. Design for inconsistency.

[DEVELOPMENT SAMPLE — This is placeholder content]`,
            categoryId: createdBlogCats['ai-technology'],
            author: 'Trifusion Engineering',
            readingTime: 9,
            published: true,
            featured: false,
            publishedAt: new Date('2026-07-28'),
            seoTitle: 'Building AI Features That Work in Production | Trifusion Technology',
            seoDesc: 'How to integrate LLMs and AI capabilities into production software without creating brittle, untestable systems.',
            tags: JSON.stringify(['AI', 'LLM', 'Engineering', 'Production']),
        },
    ];

    for (const post of blogPosts) {
        await prisma.blogPost.upsert({ where: { slug: post.slug }, create: post, update: {} });
    }
    console.log(`✅ Blog: ${blogCats.length} categories, ${blogPosts.length} sample posts`);

    // ── Sample Jobs ──────────────────────────────────────────
    const jobs = [
        {
            slug: 'senior-full-stack-engineer',
            title: 'Senior Full-Stack Engineer',
            department: 'Engineering',
            location: 'Remote / India',
            employmentType: 'FULL_TIME',
            experience: '4–6 years',
            description: 'We are looking for a Senior Full-Stack Engineer to join our core product team. You will work across the stack on challenging client products and internal tooling.',
            responsibilities: JSON.stringify([
                'Design and implement full-stack features across multiple client projects',
                'Conduct code reviews and maintain engineering standards',
                'Collaborate with design and product on architecture decisions',
                'Mentor junior engineers',
                'Contribute to technical documentation',
            ]),
            requirements: JSON.stringify([
                '4+ years of professional full-stack development experience',
                'Strong TypeScript / JavaScript expertise',
                'Production experience with React and Node.js',
                'Experience with PostgreSQL or similar relational databases',
                'Familiarity with cloud platforms (AWS, GCP, or Azure)',
            ]),
            benefits: JSON.stringify([
                'Competitive compensation',
                'Remote-first work culture',
                'Learning and development budget',
                'Flexible working hours',
                'Opportunity to work on diverse, challenging projects',
            ]),
            published: true,
        },
        {
            slug: 'ui-ux-designer',
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote / India',
            employmentType: 'FULL_TIME',
            experience: '3–5 years',
            description: 'We\'re looking for a UI/UX Designer who thinks in systems, not screens. You will lead design across client engagements from research to final implementation handoff.',
            responsibilities: JSON.stringify([
                'Lead UX research and user journey mapping',
                'Design intuitive interfaces for complex B2B workflows',
                'Create and maintain component design systems in Figma',
                'Work directly with frontend engineers to ensure design fidelity',
                'Conduct usability testing and iterate based on feedback',
            ]),
            requirements: JSON.stringify([
                '3+ years of UI/UX design experience for digital products',
                'Strong Figma expertise',
                'Experience designing for B2B and enterprise contexts',
                'Understanding of frontend development constraints',
                'Portfolio demonstrating information architecture and interaction design',
            ]),
            benefits: JSON.stringify([
                'Competitive compensation',
                'Remote-first culture',
                'Learning budget',
                'Work on real products with real impact',
            ]),
            published: true,
        },
    ];

    for (const job of jobs) {
        await prisma.job.upsert({ where: { slug: job.slug }, create: job, update: {} });
    }
    console.log(`✅ Jobs: ${jobs.length} sample positions`);

    // ── Sample Case Study ────────────────────────────────────
    // [DEVELOPMENT SAMPLE DATA ONLY]
    const caseStudy = await prisma.caseStudy.upsert({
        where: { slug: 'saas-fleet-management-platform' },
        create: {
            slug: 'saas-fleet-management-platform',
            title: 'Multi-Tenant Fleet Management SaaS Platform',
            clientName: '[Sample Client — Development Data]',
            industryId: createdIndustries['logistics'],
            overview: 'A logistics company needed to replace a fragile, single-tenant legacy system with a scalable multi-tenant SaaS platform supporting hundreds of fleet operators.',
            challenge: 'The existing system was a monolith built 8 years ago. It couldn\'t support multiple fleet operators without separate deployments, had no real-time visibility, and was failing to scale beyond 500 concurrent users.',
            solution: 'We designed and built a greenfield multi-tenant SaaS platform with real-time GPS tracking, route optimization, driver management, and a full admin portal — deployed on AWS with automated CI/CD.',
            architecture: 'Next.js frontend, Node.js/Express API, PostgreSQL with row-level security for multi-tenancy, Redis for real-time pub/sub, AWS ECS for container orchestration.',
            published: true,
            featured: true,
            heroImage: '/images/case-studies/fleet-management-hero.jpg',
        },
        update: {},
    });

    // Metrics for the sample case study
    const metrics = [
        { caseStudyId: caseStudy.id, label: 'Reduction in manual tracking work', value: '70%', sortOrder: 0 },
        { caseStudyId: caseStudy.id, label: 'Fleet operators on platform', value: '120+', sortOrder: 1 },
        { caseStudyId: caseStudy.id, label: 'System uptime after launch', value: '99.9%', sortOrder: 2 },
        { caseStudyId: caseStudy.id, label: 'Months to production', value: '6', sortOrder: 3 },
    ];
    for (const m of metrics) {
        await prisma.caseStudyMetric.create({ data: m }).catch(() => {});
    }

    console.log(`✅ Case studies: 1 sample created`);

    console.log('\n🎉 Seed complete!\n');
    console.log('📌 Development credentials:');
    console.log(`   Admin: ${adminEmail}`);
    console.log(`   Password: ${adminPass}`);
    console.log('   ⚠️  Change these before production!\n');
    console.log('📌 IMPORTANT: All case studies, testimonials, and blog posts are SAMPLE DATA.');
    console.log('   Replace with real Trifusion content before launching.\n');
}

main()
    .then(async () => { await prisma.$disconnect(); })
    .catch(async (e) => {
        console.error('Seed failed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
