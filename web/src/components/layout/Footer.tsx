import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0B1F4A] text-white">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-5 bg-white p-2.5 rounded-xl border border-white/20 shadow-sm">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logo-header.png" alt="Trifusion Technology LLP" className="h-9 w-auto object-contain" />
                        </Link>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs mb-6">
                            Engineering digital products that move businesses forward. Custom software, SaaS, AI, and mobile solutions built for scale.
                        </p>
                        {/* Contact */}
                        <div className="space-y-2.5">
                            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-colors">
                                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                {siteConfig.contact.email}
                            </a>
                            {siteConfig.contact.phone && !siteConfig.contact.phone.includes('TODO') && (
                                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-colors">
                                    <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                    {siteConfig.contact.phone}
                                </a>
                            )}
                            {siteConfig.contact.address && !siteConfig.contact.address.includes('TODO') && (
                                <div className="flex items-start gap-2 text-slate-300 text-sm">
                                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                    {siteConfig.contact.address}
                                </div>
                            )}
                        </div>
                        {/* Social */}
                        <div className="flex items-center gap-3 mt-6">
                            {siteConfig.social.linkedin && (
                                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all">
                                    <LinkedinIcon className="w-4 h-4" />
                                </a>
                            )}
                            {siteConfig.social.twitter && (
                                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 hover:bg-sky-500 hover:text-white transition-all">
                                    <TwitterIcon className="w-4 h-4" />
                                </a>
                            )}
                            {siteConfig.social.github && (
                                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-all">
                                    <GithubIcon className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Solutions</h3>
                        <ul className="space-y-2.5">
                            {siteConfig.footer.solutions.map(item => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
                        <ul className="space-y-2.5">
                            {siteConfig.footer.company.map(item => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
                        <ul className="space-y-2.5">
                            {siteConfig.footer.resources.map(item => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <p className="text-xs text-slate-400 mb-3">Ready to start a project?</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition-colors"
                            >
                                Let&apos;s Talk <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm">
                        © {year} Trifusion Technology LLP. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {siteConfig.footer.legal.map(item => (
                            <Link key={item.href} href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
