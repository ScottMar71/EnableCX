import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SiteLogo } from "@/components/layout/site-logo";

const footerIcons: Record<string, string> = {
  Services: "/icons/services.svg",
  About: "/icons/about.svg",
  Contact: "/icons/contact.svg",
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border-default bg-white py-12">
      <div className="container-shell grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <SiteLogo className="h-11 w-auto drop-shadow-[0_1px_2px_rgba(15,23,42,0.14)]" />
          <p className="text-sm text-text-secondary">{siteConfig.description}</p>
          <div className="space-y-1 text-sm text-text-secondary">
            <p>Email: hello@enablecx.com</p>
            <p>Typical response time: within 1 business day</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary">
            <Image
              src={footerIcons.Services}
              alt=""
              aria-hidden
              width={16}
              height={16}
              className="h-4 w-4 shrink-0"
            />
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
          <p className="text-sm font-semibold text-text-primary">Company</p>
          <div className="space-y-2">
            {siteConfig.footerLinks.company.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary"
              >
                {footerIcons[item.label] ? (
                  <Image
                    src={footerIcons[item.label]}
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
