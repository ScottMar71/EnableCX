import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { SiteLogo } from "@/components/layout/site-logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border-default bg-white/95 backdrop-blur">
      <div className="container-shell flex h-[72px] items-center justify-between gap-8">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <SiteLogo className="h-12 w-auto drop-shadow-[0_1px_2px_rgba(15,23,42,0.18)]" priority />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <TrackedLink
          href={siteConfig.primaryCta.href}
          eventName={analyticsEvents.ctaClickBookCall}
          location="header"
        >
          <Button size="md">{siteConfig.primaryCta.label}</Button>
        </TrackedLink>
      </div>
    </header>
  );
}
