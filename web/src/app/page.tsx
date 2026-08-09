import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { api } from '@/lib/api';
import { HeroSection } from '@/components/sections/HeroSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { EngagementModelsSection } from '@/components/sections/EngagementModelsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AnimateIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';

export const metadata: Metadata = {
    title: 'Trifusion Technology LLP | Software Engineering & Digital Products',
    description: 'Trifusion Technology LLP builds custom software, SaaS products, mobile applications, and AI-powered systems for businesses ready to scale.',
    openGraph: {
        title: 'Trifusion Technology LLP | Software Engineering & Digital Products',
        description: 'Engineering digital products that move businesses forward.',
    },
};

// Server-side data fetching
async function getHomepageData() {
    try {
        const [servicesRes, caseStudiesRes, testimonialsRes, faqsRes] = await Promise.allSettled([
            api.services.list({ limit: 6 }),
            api.caseStudies.list({ featured: 'true', limit: 3 }),
            api.testimonials.list(),
            api.faqs.list(),
        ]);

        return {
            services: servicesRes.status === 'fulfilled' ? servicesRes.value.items : [],
            caseStudies: caseStudiesRes.status === 'fulfilled' ? caseStudiesRes.value.items : [],
            testimonials: testimonialsRes.status === 'fulfilled' ? testimonialsRes.value : [],
            faqs: faqsRes.status === 'fulfilled' ? faqsRes.value : [],
        };
    } catch {
        return { services: [], caseStudies: [], testimonials: [], faqs: [] };
    }
}

export default async function HomePage() {
    const { services, caseStudies, testimonials, faqs } = await getHomepageData();

    return (
        <>
            {/* Hero */}
            <HeroSection />

            {/* Trusted By */}
            <TrustedBySection />

            {/* What We Build */}
            <WhatWeBuildSection />

            {/* Solutions */}
            <SolutionsSection services={services} />

            {/* Industries */}
            <IndustriesSection />

            {/* Case Studies */}
            {caseStudies.length > 0 && <CaseStudiesSection caseStudies={caseStudies} />}

            {/* Engagement Models */}
            <EngagementModelsSection />

            {/* Process */}
            <ProcessSection />

            {/* Tech Stack */}
            <TechStackSection />

            {/* Testimonials */}
            {testimonials.length > 0 && <TestimonialsSection testimonials={testimonials} />}

            {/* FAQ */}
            {faqs.length > 0 && <FAQSection faqs={faqs} />}

            {/* Final CTA */}
            <FinalCTASection />
        </>
    );
}

// ── Inline Sections ──────────────────────────────────────────

function TrustedBySection() {
    return (
        <section className="section bg-[#F9FAFB] border-t border-slate-100">
            <div className="container-tf">
                {/* Logo Strip */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale mb-24">
                    {['Google', 'Microsoft', 'AWS', 'Clutch', 'GoodFirms'].map((logo, i) => (
                        <div key={i} className="text-xl font-bold font-display text-slate-800">{logo}</div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <StaggerContainer staggerChildren={0.1}>
                        <StaggerItem>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-[1.1] mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                Trusted by 50+<br />
                                Clients<br />
                                Worldwide
                            </h2>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-slate-100 text-sm font-medium text-slate-600">
                                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div> No commitment</span>
                                <span>Reply within 24 hrs</span>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerChildren={0.1}>
                        {[
                            { icon: '👍', value: '100+', label: 'Happy Clients' },
                            { icon: '💼', value: '150+', label: 'Projects Shipped' },
                            { icon: '🏆', value: '4+', label: 'Years In Business' },
                            { icon: '⭐', value: '4.9★', label: 'Client Rating' }
                        ].map((stat, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-[#f4f4f5] rounded-2xl p-6 flex flex-col justify-center h-40">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl flex-shrink-0">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.value}</div>
                                            <div className="text-sm font-medium text-slate-600 mt-1">{stat.label}</div>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}

function WhatWeBuildSection() {
    const items = [
        {
            icon: '🏢',
            title: 'Digital Platform Engineering',
            desc: 'Resilient platforms built for long-term scale.',
        },
        {
            icon: '📦',
            title: 'SaaS Product Engineering',
            desc: 'From MVP to enterprise-ready multi-tenant SaaS.',
        },
        {
            icon: '🧠',
            title: 'AI-Enabled Business Systems',
            desc: 'Governed AI embedded where it drives real efficiency.',
        },
        {
            icon: '⚙️',
            title: 'Agentic & Workflow Automation',
            desc: 'Cross-system automation with approvals and auditability.',
        },
        {
            icon: '📱',
            title: 'Mobile App Development',
            desc: 'Native and cross-platform apps built for performance.',
        },
        {
            icon: '📊',
            title: 'Data Intelligence & Dashboards',
            desc: 'Turn raw data into decisions your leadership team trusts.',
        },
    ];

    return (
        <section className="section bg-[#F9FAFB]">
            <div className="container-tf">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <StaggerContainer staggerChildren={0.1}>
                        <StaggerItem>
                            <div className="text-xs font-bold tracking-widest text-[#0066FF] uppercase mb-4">WHAT WE BUILD</div>
                        </StaggerItem>
                        <StaggerItem>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#111827]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                Engineering Across Every Layer
                            </h2>
                        </StaggerItem>
                    </StaggerContainer>
                    <Link href="/solutions" className="inline-flex items-center gap-1 text-slate-600 font-medium hover:text-[#0066FF] transition-colors pb-2">
                        See More Services <ArrowRight className="w-4 h-4 -rotate-45" />
                    </Link>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerChildren={0.1}>
                    {items.map((item, index) => (
                        <StaggerItem key={item.title}>
                            <div className="card-gradient p-8 group h-[280px] flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center text-xl mb-6 relative z-10">
                                    {item.icon}
                                </div>
                                <h3 className="text-[#111827] font-bold text-xl mb-3 relative z-10" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10">{item.desc}</p>
                                <div className="mt-auto relative z-10">
                                    <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0066FF] hover:text-blue-700">
                                        Explore <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                                    </Link>
                                </div>
                                <div className="card-number">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

function FinalCTASection() {
    return (
        <section className="section">
            <div className="container-tf">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B1F4A] via-[#1246A0] to-[#0066FF] px-8 py-16 sm:py-20 text-center">
                    {/* Subtle pattern */}
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                    />

                    <AnimateIn>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            Have a product idea?
                        </h2>
                        <p className="text-xl text-blue-200 mb-3">Let&apos;s build it.</p>
                        <p className="text-blue-300 max-w-xl mx-auto mb-10 text-sm">
                            Tell us about your project. We&apos;ll respond within one business day with a clear plan for how we can help.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0066FF] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
                            >
                                Discuss Your Project
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 hover:scale-105 active:scale-95"
                            >
                                Explore Our Work
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
                            {['No commitment required', 'Response within 1 business day', 'Free initial consultation'].map(text => (
                                <div key={text} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </AnimateIn>
                </div>
            </div>
        </section>
    );
}
