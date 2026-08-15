import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactWidget } from "@/components/ui/FloatingContactWidget";
import { ProjectDrawer } from "@/components/ui/ProjectDrawer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.seo.defaultTitle,
        template: siteConfig.seo.titleTemplate,
    },
    description: siteConfig.seo.defaultDescription,
    keywords: ["software development", "GST accounting", "mobile apps", "AI", "custom software", "TriFusion Tech LLP", "digital products"],
    authors: [{ name: "TriFusion Tech LLP" }],
    creator: "TriFusion Tech LLP",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: siteConfig.url,
        title: siteConfig.seo.defaultTitle,
        description: siteConfig.seo.defaultDescription,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.seo.defaultTitle,
        description: siteConfig.seo.defaultDescription,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: siteConfig.url,
    },
};

import { PublicOnly, MainWrapper } from "@/components/layout/PublicOnly";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="min-h-screen flex flex-col">
                <PublicOnly>
                    <Navbar />
                </PublicOnly>
                
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": siteConfig.name,
                            "image": `${siteConfig.url}${siteConfig.ogImage}`,
                            "@id": siteConfig.url,
                            "url": siteConfig.url,
                            "telephone": siteConfig.contact.phone,
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": siteConfig.contact.addressShort,
                                "addressLocality": "Pune",
                                "addressRegion": "Maharashtra",
                                "postalCode": "411046",
                                "addressCountry": "IN"
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday"
                                ],
                                "opens": "09:00",
                                "closes": "18:00"
                            },
                            "sameAs": [
                                siteConfig.social.linkedin,
                                siteConfig.social.twitter,
                                siteConfig.social.instagram,
                                siteConfig.social.facebook
                            ].filter(Boolean)
                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": siteConfig.name,
                            "url": siteConfig.url,
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": `${siteConfig.url}/search?q={search_term_string}`,
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />

                <MainWrapper>
                    {children}
                </MainWrapper>
                
                <PublicOnly>
                    <Footer />
                    <FloatingContactWidget />
                    <ProjectDrawer />
                </PublicOnly>
            </body>
        </html>
    );
}

