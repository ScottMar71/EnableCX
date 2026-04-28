"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { SiteLogo } from "@/components/layout/site-logo";

const navIcons: Record<string, string> = {
  Services: "/icons/services.svg",
  "Case Studies": "/icons/case-studies.svg",
  About: "/icons/about.svg",
  Resources: "/icons/resources.svg",
  Contact: "/icons/contact.svg",
};

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isCurrentPath = (href: string) => {
    const normalizedHref = href.split("#")[0];
    return pathname === normalizedHref || pathname.startsWith(`${normalizedHref}/`);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-border-default bg-white/95 backdrop-blur">
      <div className="container-shell flex h-[72px] items-center justify-between gap-8">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <SiteLogo className="h-12 w-auto drop-shadow-[0_1px_2px_rgba(15,23,42,0.18)]" priority />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrentPath(item.href) ? "page" : undefined}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary aria-[current=page]:text-text-primary"
            >
              {navIcons[item.label] ? (
                <Image
                  src={navIcons[item.label]}
                  alt=""
                  aria-hidden
                  width={16}
                  height={16}
                  className="h-4 w-4 shrink-0"
                />
              ) : null}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <TrackedLink
            href={siteConfig.primaryCta.href}
            eventName={analyticsEvents.ctaClickBookCall}
            location="header"
          >
            <Button size="md">{siteConfig.primaryCta.label}</Button>
          </TrackedLink>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border-default p-2 text-text-primary md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <Image
            src={mobileMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
            alt=""
            aria-hidden
            width={20}
            height={20}
            className="h-5 w-5"
          />
        </button>
      </div>
      {mobileMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-border-default px-6 py-4 md:hidden">
          <nav className="grid gap-3" aria-label="Mobile primary">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrentPath(item.href) ? "page" : undefined}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary aria-[current=page]:text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navIcons[item.label] ? (
                  <Image
                    src={navIcons[item.label]}
                    alt=""
                    aria-hidden
                    width={16}
                    height={16}
                    className="h-4 w-4 shrink-0"
                  />
                ) : null}
                {item.label}
              </Link>
            ))}
            <TrackedLink
              href={siteConfig.primaryCta.href}
              eventName={analyticsEvents.ctaClickBookCall}
              location="header_mobile"
              className="mt-2 inline-flex"
            >
              <Button size="md">{siteConfig.primaryCta.label}</Button>
            </TrackedLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
