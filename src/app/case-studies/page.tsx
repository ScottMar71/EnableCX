import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/layout/section-shell";
import { caseStudies } from "@/content/case-studies";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { FinalCTASection } from "@/components/sections/final-cta-section";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how EnableCX case studies improve adoption, confidence, and customer outcomes across SaaS, CCaaS, and UCaaS teams.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="Case Studies"
          description="Examples of how EnableCX improves platform adoption and team confidence."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {caseStudies.map((item) => (
            <TrackedLink
              key={item.slug}
              href={`/case-studies/${item.slug}`}
              eventName={analyticsEvents.caseStudyClick}
              location="case_studies_listing"
            >
              <Card variant="case-study" className="h-full transition-colors hover:border-brand-primary">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {item.industry}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-text-primary">{item.title}</h2>
                <p className="mt-2 text-sm text-text-secondary">{item.challenge}</p>
              </Card>
            </TrackedLink>
          ))}
        </div>
      </SectionShell>
      <SectionShell subtle>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
