import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { staticSeo } from "@/lib/seo";
import { FileText, Mail } from "lucide-react";

export const metadata = staticSeo({
  path: "/legal/terms",
  title: "Terms of Service",
  description:
    "The terms that govern use of the EnableCX website and professional services.",
});

export default function TermsPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Terms of Service"
        description="The terms that govern use of this website and professional services provided by EnableCX."
      />
      <article className="prose-shell mt-8 space-y-4 rounded-lg border border-border-default bg-bg-elevated p-6 text-text-secondary shadow-[var(--shadow-sm)]">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
          <FileText className="h-4 w-4 text-icon" aria-hidden />
          Website and service terms
        </p>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">Effective date</h2>
          <p>Effective date: 28 April 2026.</p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">Use of this website</h2>
          <p>
            You may use this website for lawful purposes only. You agree not to misuse, disrupt,
            or attempt unauthorized access to systems connected to the website.
          </p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">Service engagements</h2>
          <p>
            Consulting and training services are governed by separate signed commercial agreements,
            including scope, pricing, timelines, and acceptance criteria.
          </p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">Intellectual property</h2>
          <p>
            Content on this website is owned by or licensed to EnableCX. You may not reproduce or
            distribute it without prior written permission.
          </p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, EnableCX is not liable for indirect or
            consequential losses arising from website use or reliance on site content.
          </p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="text-xl font-semibold text-text-primary">Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales unless a signed client
            contract states otherwise.
          </p>
        </section>
        <section className="space-y-2 rounded-md border border-border-default bg-bg-subtle p-4">
          <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-text-primary">
            <Mail className="h-5 w-5 text-icon" aria-hidden />
            Contact
          </h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:legal@enablecx.com">legal@enablecx.com</a>.
          </p>
        </section>
      </article>
    </SectionShell>
  );
}
