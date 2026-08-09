import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.seo.defaultTitle,
        template: siteConfig.seo.titleTemplate,
    },
    description: siteConfig.seo.defaultDescription,
    keywords: ["software development", "SaaS", "mobile apps", "AI", "custom software", "Trifusion Technology", "digital products"],
    authors: [{ name: "Trifusion Technology LLP" }],
    creator: "Trifusion Technology LLP",
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
};

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
                <Navbar />
                <main className="flex-1 pt-16">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
