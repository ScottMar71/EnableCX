import { PageIntro } from "@/components/sections/page-intro";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { SectionShell } from "@/components/layout/section-shell";
import { ProcessSection } from "@/components/sections/process-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { servicesPageFaqs } from "@/content/services-page-faqs";
import { Card } from "@/components/ui/card";
import { staticSeo } from "@/lib/seo";
import { ArrowUpRight, Building2, Handshake, Sparkles, Users } from "lucide-react";

export const metadata = staticSeo({
  path: "/services",
  title: "Services",
  description:
    "Explore EnableCX services for SaaS, CCaaS, and UCaaS adoption training that improves consistency, confidence, and measurable platform value.",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: servicesPageFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <SectionShell>
        <PageIntro
          title="Services"
          description="We offer AI specialist training and enablement across SaaS, CCaaS, and UCaaS environments."
        />
        <div className="mt-8 rounded-lg border border-border-default bg-bg-elevated p-6 shadow-[var(--shadow-sm)]">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
            <Sparkles className="h-4 w-4 text-icon" aria-hidden />
            Strategic enablement
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-text-primary">AI Training for Every Level</h2>
          <p className="mt-3 text-text-secondary">
            EnableCX delivers practical, role-based AI training designed for everyone, from
            beginners to advanced users. Whether your teams are just getting started or looking to
            embed AI into daily workflows, we focus on real use cases, not theory. The result:
            confident teams, smarter processes, and measurable productivity gains across support,
            success, and operations.
          </p>
        </div>
      </SectionShell>
      <SectionShell subtle>
        <ServicesGridSection />
      </SectionShell>
      <SectionShell>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold text-text-primary">
              Why Training Is Business-Critical
            </h2>
            <p className="text-text-secondary">
              Training is not a support activity. It is a growth lever that improves commercial
              performance, customer experience, and operational efficiency.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                <Building2 className="h-4 w-4 text-icon" aria-hidden />
                Organisations
              </p>
              <p className="mt-2 text-sm text-text-secondary">
                Improve sales, engagement, retention, and satisfaction while reducing costly
                adoption gaps.
              </p>
            </Card>
            <Card>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                <Handshake className="h-4 w-4 text-icon" aria-hidden />
                Partners
              </p>
              <p className="mt-2 text-sm text-text-secondary">
                Increase revenue, reduce churn, lower support demand, and accelerate onboarding.
              </p>
            </Card>
            <Card>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                <Users className="h-4 w-4 text-icon" aria-hidden />
                Employees
              </p>
              <p className="mt-2 text-sm text-text-secondary">
                Build confidence, productivity, and consistency to improve team performance and
                long-term retention.
              </p>
            </Card>
          </div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
            <ArrowUpRight className="h-4 w-4 text-icon" aria-hidden />
            Delivery is tailored by workflow, role maturity, and business outcomes.
          </p>
        </div>
      </SectionShell>
      <SectionShell>
        <ProcessSection />
      </SectionShell>
      <SectionShell subtle>
        <FAQSection />
      </SectionShell>
      <SectionShell subtle>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
