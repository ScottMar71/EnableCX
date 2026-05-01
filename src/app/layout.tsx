import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConsentProvider } from "@/components/consent/consent-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getGoogleSiteVerification } from "@/lib/google-site-verification";
import { absoluteUrl, siteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

function buildRootMetadata(): Metadata {
  const verification = getGoogleSiteVerification();
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "EnableCX | SaaS, CCaaS, and UCaaS Training",
      template: "%s | EnableCX",
    },
    description:
      "EnableCX helps teams adopt SaaS, CCaaS, and UCaaS platforms through practical, high-impact training.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      title: "EnableCX | SaaS, CCaaS, and UCaaS Training",
      description:
        "EnableCX helps teams adopt SaaS, CCaaS, and UCaaS platforms through practical, high-impact training.",
      url: absoluteUrl("/"),
      siteName: "EnableCX",
    },
    twitter: {
      card: "summary_large_image",
      title: "EnableCX | SaaS, CCaaS, and UCaaS Training",
      description:
        "EnableCX helps teams adopt SaaS, CCaaS, and UCaaS platforms through practical, high-impact training.",
    },
    ...(verification ? { verification } : {}),
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ConsentProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ConsentProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
