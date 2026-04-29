import Link from "next/link";
import { BriefcaseBusiness, Building2, Mail, Scale } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ManageCookiesButton } from "@/components/consent/manage-cookies-button";
import { SiteLogo } from "@/components/layout/site-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-default bg-bg-elevated py-14">
      <div className="container-shell grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <SiteLogo className="h-14 w-auto" />
          <p className="text-sm text-text-secondary">{siteConfig.description}</p>
          <div className="space-y-2 rounded-md border border-border-default bg-bg-subtle px-4 py-3 text-sm text-text-secondary">
            <p className="inline-flex items-center gap-2 font-medium text-text-primary">
              <Mail className="h-4 w-4" aria-hidden />
              hello@enablecx.com
            </p>
            <p>Typical response time: within 1 business day</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary">
            <BriefcaseBusiness className="h-4 w-4" aria-hidden />
            Services
          </p>
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
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary">
            <Building2 className="h-4 w-4" aria-hidden />
            Company
          </p>
          <div className="space-y-2">
            {siteConfig.footerLinks.company.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary">
            <Scale className="h-4 w-4" aria-hidden />
            Legal
          </p>
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
          <ManageCookiesButton />
        </div>
      </div>
    </footer>
  );
}
