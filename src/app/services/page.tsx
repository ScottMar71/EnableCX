import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { SectionShell } from "@/components/layout/section-shell";
import { ProcessSection } from "@/components/sections/process-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { Card } from "@/components/ui/card";
import { AudiencePathwaysSection } from "@/components/sections/audience-pathways-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore EnableCX services for SaaS, CCaaS, and UCaaS adoption training that improves consistency, confidence, and measurable platform value.",
};

export default function ServicesPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="Services"
          description="We offer AI specialist training and enablement across SaaS, CCaaS, and UCaaS environments."
        />
      </SectionShell>
      <SectionShell subtle>
        <ServicesGridSection />
      </SectionShell>
      <SectionShell>
        <AudiencePathwaysSection />
      </SectionShell>
      <SectionShell>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-text-primary">Why Training Is Business-Critical</h2>
            <p className="text-text-secondary">
              Training is not a support activity. It is a growth lever that improves commercial
              performance, customer experience, and operational efficiency.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <p className="text-sm font-semibold text-text-primary">Organisations</p>
              <p className="mt-2 text-sm text-text-secondary">
                Improve sales, engagement, retention, and satisfaction while reducing costly
                adoption gaps.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-text-primary">Partners</p>
              <p className="mt-2 text-sm text-text-secondary">
                Increase revenue, reduce churn, lower support demand, and accelerate onboarding.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-text-primary">Employees</p>
              <p className="mt-2 text-sm text-text-secondary">
                Build confidence, productivity, and consistency to improve team performance and
                long-term retention.
              </p>
            </Card>
          </div>
        </div>
      </SectionShell>
      <SectionShell>
        <ProcessSection />
      </SectionShell>
      <SectionShell subtle>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
