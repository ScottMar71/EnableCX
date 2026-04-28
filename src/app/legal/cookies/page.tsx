import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";

export default function CookiesPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Cookie Policy"
        description="Information about how EnableCX uses cookies and similar technologies on this website."
      />
      <article className="prose-shell mt-8 space-y-6 text-text-secondary">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">Effective date</h2>
          <p>Effective date: 28 April 2026.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">What are cookies</h2>
          <p>
            Cookies are small text files stored in your browser that help websites function and
            provide usage insights.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">How we use cookies</h2>
          <p>We use cookies for essential site operation and basic performance analytics.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">Cookie categories</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Essential cookies required for core functionality.</li>
            <li>Analytics cookies used to understand site usage trends.</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">Managing cookies</h2>
          <p>
            You can manage or delete cookies in your browser settings. Disabling essential cookies
            may affect website functionality.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">Contact</h2>
          <p>
            For cookie-related questions, contact{" "}
            <a href="mailto:privacy@enablecx.com">privacy@enablecx.com</a>.
          </p>
        </section>
      </article>
    </SectionShell>
  );
}
