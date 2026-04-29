import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConsentProvider } from "@/components/consent/consent-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enablecx.com"),
  title: {
    default: "EnableCX | SaaS, CCaaS, and UCaaS Training",
    template: "%s | EnableCX",
  },
  description:
    "EnableCX helps teams adopt SaaS, CCaaS, and UCaaS platforms through practical, high-impact training.",
  openGraph: {
    type: "website",
    title: "EnableCX | SaaS, CCaaS, and UCaaS Training",
    description:
      "EnableCX helps teams adopt SaaS, CCaaS, and UCaaS platforms through practical, high-impact training.",
    url: "https://enablecx.com",
    siteName: "EnableCX",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

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
      </body>
    </html>
  );
}
