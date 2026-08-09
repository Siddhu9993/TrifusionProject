'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import { DynamicCanvasBackground } from '@/components/ui/DynamicCanvasBackground';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F4FF] via-[#F8FAFF] to-white">
            {/* 60fps Dynamic Particle & Web Canvas */}
            <DynamicCanvasBackground />

            {/* Glowing background gradient spheres */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div
                    className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[850px] rounded-full opacity-40 blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.25) 0%, rgba(59,130,246,0.08) 50%, transparent 70%)' }}
                />
                <div
                    className="absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full opacity-30 blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute top-1/2 -right-32 w-[450px] h-[450px] rounded-full opacity-30 blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)' }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
                <StaggerContainer staggerChildren={0.15}>
                    {/* Eyebrow badge */}
                    <StaggerItem>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 backdrop-blur-md mb-8 shadow-sm">
                            <Sparkles className="w-4 h-4 text-[#0066FF]" />
                            <span className="text-xs sm:text-sm tracking-[0.15em] font-bold text-[#0066FF] uppercase">
                                Enterprise Platform & AI Engineering
                            </span>
                        </div>
                    </StaggerItem>

                    {/* Headline */}
                    <StaggerItem>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#0B1F4A] leading-[1.08] mb-8"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.03em' }}>
                            We Build Digital Systems<br />
                            That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C8FF]">Work For You</span>
                        </h1>
                    </StaggerItem>

                    {/* Subheadline */}
                    <StaggerItem>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
                            From AI-powered platforms to custom SaaS — we engineer technology that gives you operational control and competitive edge.
                        </p>
                    </StaggerItem>

                    {/* CTAs */}
                    <StaggerItem>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0066FF] text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl text-lg min-w-[210px] active:scale-95"
                            >
                                <span>Start a Project</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all text-lg min-w-[210px] shadow-sm hover:shadow-md"
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </StaggerItem>

                    {/* Badges */}
                    <StaggerItem>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-600 font-medium bg-white/70 backdrop-blur-md py-3 px-6 rounded-2xl border border-slate-100 max-w-2xl mx-auto shadow-sm">
                            <div className="flex items-center gap-2">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <span className="font-semibold text-slate-800">4.9/5 Rating</span>
                                <span className="text-slate-400">•</span>
                                <span className="text-slate-500">80+ Google Reviews</span>
                            </div>
                            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                            <div className="text-slate-700 font-semibold">
                                Trusted by 200+ Enterprises
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}
