import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SiteLogo } from "@/components/layout/site-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-default bg-white py-12">
      <div className="container-shell grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <SiteLogo className="h-9 w-auto" />
          <p className="text-sm text-text-secondary">{siteConfig.description}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-text-primary">Services</p>
          <div className="space-y-2">
            {siteConfig.footerLinks.services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-text-secondary hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-text-primary">Company</p>
          <div className="space-y-2">
            {siteConfig.footerLinks.company.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-text-secondary hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-text-primary">Legal</p>
          <div className="space-y-2">
            {siteConfig.footerLinks.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-text-secondary hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
