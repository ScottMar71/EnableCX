import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";

export default function PrivacyPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Privacy Policy"
        description="How EnableCX collects, uses, and protects personal information when you use this website or engage our services."
      />
      <article className="prose-shell mt-8 space-y-6 text-text-secondary">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">Effective date</h2>
          <p>Effective date: 28 April 2026.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">What we collect</h2>
          <p>
            We collect information you submit through contact and booking forms, including name,
            email address, company name, and details you share about your project requirements.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">How we use your information</h2>
          <p>
            We use this data to respond to enquiries, scope potential engagements, and provide
            requested services. We may also use limited analytics data to improve site experience.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">Data sharing and processors</h2>
          <p>
            We use trusted third-party service providers to operate this site and manage submitted
            leads. We do not sell personal data.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">Data retention</h2>
          <p>
            We retain enquiry data only as long as needed for legitimate business and legal
            purposes, then delete or anonymize it.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">Your rights</h2>
          <p>
            You may request access, correction, or deletion of personal data we hold about you,
            subject to applicable law.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">Contact</h2>
          <p>
            For privacy requests, contact <a href="mailto:privacy@enablecx.com">privacy@enablecx.com</a>.
          </p>
        </section>
      </article>
    </SectionShell>
  );
}
