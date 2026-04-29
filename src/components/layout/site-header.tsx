"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentType, useState } from "react";
import { BookOpen, BriefcaseBusiness, CircleUserRound, Mail, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { SiteLogo } from "@/components/layout/site-logo";

const navIcons: Record<string, ComponentType<{ className?: string }>> = {
  Services: BriefcaseBusiness,
  "Case Studies": BookOpen,
  About: CircleUserRound,
  Resources: BookOpen,
  Contact: Mail,
};

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isCurrentPath = (href: string) => {
    const normalizedHref = href.split("#")[0];
    return pathname === normalizedHref || pathname.startsWith(`${normalizedHref}/`);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-border-default bg-bg-elevated/95 backdrop-blur">
      <div className="container-shell flex h-[72px] items-center justify-between gap-8">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <SiteLogo className="h-12 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const Icon = navIcons[item.label];
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrentPath(item.href) ? "page" : undefined}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-subtle hover:text-text-primary aria-[current=page]:bg-brand-primary/10 aria-[current=page]:text-brand-primary"
              >
                {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden /> : null}
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="md">
            <TrackedLink
              href={siteConfig.primaryCta.href}
              eventName={analyticsEvents.ctaClickBookCall}
              location="header"
              className="inline-flex text-white"
            >
              {siteConfig.primaryCta.label}
            </TrackedLink>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border-default bg-bg-elevated p-2 text-text-primary md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>
      {mobileMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-border-default bg-bg-elevated px-6 py-4 md:hidden">
          <nav className="grid gap-3" aria-label="Mobile primary">
            {siteConfig.nav.map((item) => {
              const Icon = navIcons[item.label];
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrentPath(item.href) ? "page" : undefined}
                  className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-subtle hover:text-text-primary aria-[current=page]:text-brand-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden /> : null}
                  {item.label}
                </Link>
              );
            })}
            <Button asChild size="md" className="mt-2">
              <TrackedLink
                href={siteConfig.primaryCta.href}
                eventName={analyticsEvents.ctaClickBookCall}
                location="header_mobile"
                className="inline-flex text-white"
              >
                {siteConfig.primaryCta.label}
              </TrackedLink>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
