import { PageIntro } from "@/components/sections/page-intro";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/layout/section-shell";
import { caseStudies } from "@/content/case-studies";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { staticSeo } from "@/lib/seo";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

export const metadata = staticSeo({
  path: "/case-studies",
  title: "Case Studies",
  description:
    "See how EnableCX case studies improve adoption, confidence, and customer outcomes across SaaS, CCaaS, and UCaaS teams.",
});

export default function CaseStudiesPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="Case Studies"
          description="Examples of how EnableCX improves platform adoption and team confidence."
        />
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-border-default bg-bg-elevated px-3 py-1.5 text-xs font-semibold text-brand-primary">
          <BriefcaseBusiness className="h-3.5 w-3.5 text-icon" aria-hidden />
          Real delivery outcomes across SaaS, CCaaS, and UCaaS
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {caseStudies.map((item) => (
            <TrackedLink
              key={item.slug}
              href={`/case-studies/${item.slug}`}
              eventName={analyticsEvents.caseStudyClick}
              location="case_studies_listing"
            >
              <Card variant="case-study" className="h-full transition hover:-translate-y-0.5 hover:border-brand-primary">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {item.industry}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-text-primary">{item.title}</h2>
                <p className="mt-2 text-sm text-text-secondary">{item.challenge}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                  View case study
                  <ArrowRight className="h-4 w-4 text-icon" aria-hidden />
                </p>
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
