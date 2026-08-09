'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import type { FAQ } from '@/lib/api';

interface Props {
    faqs: FAQ[];
}

export function FAQSection({ faqs }: Props) {
    const [open, setOpen] = useState<string | null>(null);

    return (
        <section className="section bg-white" id="faq">
            <div className="container-tf">
                <div className="text-center mb-12">
                    <span className="label-tag">FAQ</span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B1F4A]">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-xl mx-auto">
                        Clear answers to the questions we hear most often.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map(faq => (
                        <div key={faq.id} className="border border-slate-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpen(p => p === faq.id ? null : faq.id)}
                                aria-expanded={open === faq.id}
                                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-semibold text-[#0B1F4A] text-sm sm:text-base pr-4"
                                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={clsx('w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200', open === faq.id && 'rotate-180')}
                                />
                            </button>
                            {open === faq.id && (
                                <div className="px-6 pb-5 bg-slate-50/50 border-t border-slate-100">
                                    <p className="text-slate-600 text-sm leading-relaxed pt-4">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
