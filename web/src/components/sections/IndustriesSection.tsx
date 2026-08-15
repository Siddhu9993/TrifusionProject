'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

import { fallbackIndustries } from '@/lib/fallbackData';

export function IndustriesSection() {
    const [active, setActive] = useState(0);
    const current = fallbackIndustries[active];

    return (
        <section className="section bg-white">
            <div className="container-tf">
                <div className="text-center mb-12">
                    <span className="label-tag">Industries</span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B1F4A]">
                        Sector expertise that matters
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-xl mx-auto">
                        We understand your industry&apos;s specific challenges, compliance requirements, and user expectations — not just the technology.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Tabs */}
                    <div className="lg:col-span-2 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                        {fallbackIndustries.map((ind, i) => (
                            <button
                                key={ind.slug}
                                onClick={() => setActive(i)}
                                className={clsx(
                                    'flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-200 flex-shrink-0',
                                    active === i
                                        ? 'bg-[#0B1F4A] text-white shadow-lg'
                                        : 'bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-[#0B1F4A]'
                                )}
                            >
                                <span className="text-xl">{ind.icon}</span>
                                <span className="font-medium text-sm">{ind.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    {current && (
                        <div className="lg:col-span-3">
                            <div className="card p-8 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-4xl">{current.icon}</span>
                                    <h3 className="text-2xl font-bold text-[#0B1F4A]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        {current.title}
                                    </h3>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-red-50 rounded-xl p-5">
                                        <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-2">Industry Challenge</h4>
                                        <p className="text-slate-700 text-sm leading-relaxed">{current.challenge}</p>
                                    </div>
                                    <div className="bg-green-50 rounded-xl p-5">
                                        <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-2">Our Solution</h4>
                                        <p className="text-slate-700 text-sm leading-relaxed">{current.solution}</p>
                                    </div>
                                </div>

                                <Link
                                    href={`/industries/${current.slug}`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B1F4A] text-white text-sm font-semibold rounded-lg hover:bg-[#1246A0] transition-colors"
                                >
                                    Explore {current.title} Solutions
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
