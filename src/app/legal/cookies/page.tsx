import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { staticSeo } from "@/lib/seo";
import { Cookie, Mail } from "lucide-react";

export const metadata = staticSeo({
  path: "/legal/cookies",
  title: "Cookie Policy",
  description:
    "Information about how EnableCX uses cookies and similar technologies on this website.",
});

export default function CookiesPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Cookie Policy"
        description="Information about how EnableCX uses cookies and similar technologies on this website."
      />
      <article className="prose-shell mt-8 space-y-4 rounded-lg border border-border-default bg-bg-elevated p-6 text-text-secondary shadow-[var(--shadow-sm)]">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
          <Cookie className="h-4 w-4 text-icon" aria-hidden />
          Consent-first cookie controls
        </p>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">Effective date</h2>
          <p>Effective date: 28 April 2026.</p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">What are cookies</h2>
          <p>
            Cookies are small text files stored in your browser that help websites function and
            provide usage insights.
          </p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">How we use cookies</h2>
          <p>
            We use essential cookies for core site operation. Analytics and marketing cookies are
            disabled by default and only activated after explicit consent.
          </p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">Cookie categories</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Essential cookies required for core functionality.</li>
            <li>
              Analytics cookies used to understand site usage trends (only with explicit opt-in).
            </li>
            <li>
              Marketing cookies used by advertising platforms (only with explicit opt-in).
            </li>
          </ul>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">Managing and withdrawing consent</h2>
          <p>
            You can change your preferences at any time using the Manage Cookies button in the
            footer. You can also clear cookies via your browser settings. Disabling essential
            cookies may affect website functionality.
          </p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">UK GDPR and ICO alignment</h2>
          <p>
            We request granular consent before placing non-essential cookies, do not pre-tick
            optional categories, and retain evidence of consent choices to support UK GDPR and ICO
            guidance on consent.
          </p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-text-primary">
            <Mail className="h-5 w-5 text-icon" aria-hidden />
            Contact
          </h2>
          <p>
            For cookie-related questions, contact{" "}
            <a href="mailto:privacy@enablecx.com">privacy@enablecx.com</a>.
          </p>
        </section>
      </article>
    </SectionShell>
  );
}
