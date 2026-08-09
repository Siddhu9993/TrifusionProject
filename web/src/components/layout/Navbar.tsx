'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/config';
import { Menu, X, ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setOpenDropdown(null);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Prevent body scroll when mobile nav open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const isActive = (href: string) => pathname.startsWith(href);

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled || mobileOpen
                    ? 'bg-white shadow-sm'
                    : 'bg-white/80 backdrop-blur-md'
            )}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
                <div className="flex items-center justify-between h-16 lg:h-18">

                    {/* Logo */}
                    <Link href="/" className="flex items-center flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo-header.png" alt="Trifusion Technology LLP" className="h-10 sm:h-11 w-auto object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {/* Solutions Dropdown */}
                        <NavDropdown
                            label="Solutions"
                            isOpen={openDropdown === 'solutions'}
                            onToggle={() => setOpenDropdown(p => p === 'solutions' ? null : 'solutions')}
                            isActive={isActive('/solutions')}
                        >
                            <MegaMenuSolutions items={siteConfig.nav.solutions} />
                        </NavDropdown>

                        <Link href="/products" className={navLinkClass(isActive('/products'))}>
                            Products
                        </Link>

                        {/* Industries Dropdown */}
                        <NavDropdown
                            label="Industries"
                            isOpen={openDropdown === 'industries'}
                            onToggle={() => setOpenDropdown(p => p === 'industries' ? null : 'industries')}
                            isActive={isActive('/industries')}
                        >
                            <DropdownList items={siteConfig.nav.industries} />
                        </NavDropdown>

                        <Link href="/case-studies" className={navLinkClass(isActive('/case-studies'))}>
                            Case Studies
                        </Link>

                        {/* Company Dropdown */}
                        <NavDropdown
                            label="Company"
                            isOpen={openDropdown === 'company'}
                            onToggle={() => setOpenDropdown(p => p === 'company' ? null : 'company')}
                            isActive={isActive('/company')}
                        >
                            <DropdownList items={[
                                ...siteConfig.nav.company,
                                { label: 'Careers', href: '/careers' },
                                { label: 'Insights', href: '/insights' },
                            ]} />
                        </NavDropdown>
                    </div>

                    {/* CTA + Mobile toggle */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Link href="/contact" className={clsx("hidden lg:block", navLinkClass(isActive('/contact')))}>
                            Contact
                        </Link>
                        <Link
                            href="/contact"
                            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 bg-[#0066FF] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Discuss Your Project
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(p => !p)}
                            aria-label="Toggle navigation"
                            aria-expanded={mobileOpen}
                            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-[#0B1F4A] hover:bg-slate-50 transition-colors"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <div className="lg:hidden border-t border-slate-100 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                        <MobileNav />
                    </div>
                )}
            </nav>
        </header>
    );
}

// ── Sub-components ───────────────────────────────────────────

function navLinkClass(active: boolean) {
    return clsx(
        'px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
        active ? 'text-[#0066FF]' : 'text-slate-700 hover:text-[#0066FF]'
    );
}

interface NavDropdownProps {
    label: string;
    isOpen: boolean;
    onToggle: () => void;
    isActive: boolean;
    children: React.ReactNode;
}

function NavDropdown({ label, isOpen, onToggle, isActive, children }: NavDropdownProps) {
    return (
        <div className="relative">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className={clsx(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                    isActive || isOpen
                        ? 'text-[#0066FF]'
                        : 'text-slate-700 hover:text-[#0066FF]'
                )}
            >
                {label}
                <ChevronDown className={clsx('w-3.5 h-3.5 transition-transform duration-300', isOpen && 'rotate-180 text-[#0066FF]')} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50"
                    >
                        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function MegaMenuSolutions({ items }: { items: { label: string; href: string }[] }) {
    return (
        <div className="w-72 grid grid-cols-1 gap-0.5">
            {items.map(item => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-blue-50 group transition-colors"
                >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-[#0066FF] transition-colors">{item.label}</span>
                </Link>
            ))}
            <div className="mt-1 pt-3 border-t border-slate-100 px-4 pb-2">
                <Link href="/solutions" className="flex items-center gap-2 text-xs font-semibold text-[#0066FF] hover:underline">
                    View all solutions <ExternalLink className="w-3 h-3" />
                </Link>
            </div>
        </div>
    );
}

function DropdownList({ items }: { items: { label: string; href: string }[] }) {
    return (
        <div className="w-52 grid grid-cols-1 gap-0.5">
            {items.map(item => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-blue-50 group transition-colors"
                >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-[#0066FF] transition-colors">{item.label}</span>
                </Link>
            ))}
        </div>
    );
}

function MobileNav() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggle = (s: string) => setOpenSection(p => p === s ? null : s);

    return (
        <div className="pb-4">
            <MobileSection
                label="Solutions"
                isOpen={openSection === 'solutions'}
                onToggle={() => toggle('solutions')}
                items={siteConfig.nav.solutions}
                viewAllHref="/solutions"
            />
            <Link href="/products" className="flex items-center px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                Products
            </Link>
            <MobileSection
                label="Industries"
                isOpen={openSection === 'industries'}
                onToggle={() => toggle('industries')}
                items={siteConfig.nav.industries}
                viewAllHref="/industries"
            />
            <Link href="/case-studies" className="flex items-center px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                Case Studies
            </Link>
            <MobileSection
                label="Company"
                isOpen={openSection === 'company'}
                onToggle={() => toggle('company')}
                items={[...siteConfig.nav.company, { label: 'Careers', href: '/careers' }, { label: 'Insights', href: '/insights' }]}
                viewAllHref="/company/about"
            />
            <div className="pt-4 px-4">
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 bg-[#0066FF] text-white text-sm font-semibold rounded-lg">
                    Discuss Your Project <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}

interface MobileSectionProps {
    label: string;
    isOpen: boolean;
    onToggle: () => void;
    items: { label: string; href: string }[];
    viewAllHref: string;
}

function MobileSection({ label, isOpen, onToggle, items, viewAllHref }: MobileSectionProps) {
    return (
        <div>
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
                {label}
                <ChevronDown className={clsx('w-4 h-4 transition-transform', isOpen && 'rotate-180')} />
            </button>
            {isOpen && (
                <div className="ml-4 mb-2 space-y-0.5 border-l-2 border-blue-100 pl-4">
                    {items.map(item => (
                        <Link key={item.href} href={item.href} className="block py-2 text-sm text-slate-600 hover:text-[#0066FF] transition-colors">
                            {item.label}
                        </Link>
                    ))}
                    <Link href={viewAllHref} className="block pt-1 text-xs font-semibold text-[#0066FF] hover:underline">
                        View all →
                    </Link>
                </div>
            )}
        </div>
    );
}
