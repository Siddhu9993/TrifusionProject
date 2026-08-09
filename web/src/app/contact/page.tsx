import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/lib/config';
import { Mail, Phone, MapPin, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us — Discuss Your Project',
    description: 'Get in touch with Trifusion Technology LLP. Tell us about your project and we will respond within one business day.',
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-8 pb-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <span className="label-tag">Contact Us</span>
                        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#0B1F4A]"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            Let&apos;s discuss your project
                        </h1>
                        <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                            Tell us what you&apos;re building. We read every message and respond within one business day with a clear perspective on how we can help.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">

                        {/* Contact Form — main */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                                <h2 className="text-2xl font-bold text-[#0B1F4A] mb-1"
                                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                    Project inquiry
                                </h2>
                                <p className="text-slate-500 text-sm mb-8">All fields marked * are required.</p>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact Info */}
                            <div className="bg-[#0B1F4A] rounded-2xl p-6 text-white">
                                <h3 className="font-bold text-lg mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                    Get in touch
                                </h3>
                                <div className="space-y-4">
                                    <a href={`mailto:${siteConfig.contact.email}`}
                                        className="flex items-start gap-3 text-blue-200 hover:text-white transition-colors">
                                        <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                        <span className="text-sm">{siteConfig.contact.email}</span>
                                    </a>
                                    {!siteConfig.contact.phone.includes('TODO') && (
                                        <a href={`tel:${siteConfig.contact.phone}`}
                                            className="flex items-start gap-3 text-blue-200 hover:text-white transition-colors">
                                            <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span className="text-sm">{siteConfig.contact.phone}</span>
                                        </a>
                                    )}
                                    {!siteConfig.contact.whatsapp.includes('TODO') && (
                                        <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
                                            target="_blank" rel="noopener noreferrer"
                                            className="flex items-start gap-3 text-blue-200 hover:text-white transition-colors">
                                            <MessageSquare className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span className="text-sm">WhatsApp</span>
                                        </a>
                                    )}
                                    {!siteConfig.contact.address.includes('TODO') && (
                                        <div className="flex items-start gap-3 text-blue-200">
                                            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span className="text-sm">{siteConfig.contact.address}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Response time */}
                            <div className="card p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <Clock className="w-5 h-5 text-[#0066FF]" />
                                    <h4 className="font-semibold text-[#0B1F4A] text-sm">What to expect</h4>
                                </div>
                                <ul className="space-y-2">
                                    {[
                                        'We read every message personally',
                                        'Response within 1 business day',
                                        'Initial call to understand your needs',
                                        'Clear proposal with timeline and scope',
                                        'No commitment required',
                                    ].map(item => (
                                        <li key={item} className="flex items-start gap-2 text-slate-500 text-xs">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* FAQ prompt */}
                            <div className="bg-blue-50 rounded-xl p-5">
                                <p className="text-sm text-slate-600">
                                    Have a quick question?{' '}
                                    <a href="/#faq" className="text-[#0066FF] font-medium hover:underline">
                                        Check our FAQ →
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
