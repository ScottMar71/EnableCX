import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { resources } from "@/content/resources";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { staticSeo } from "@/lib/seo";
import { ArrowRight, BookOpenText, Calculator, ClipboardList, Gauge } from "lucide-react";

export const metadata = staticSeo({
  path: "/resources",
  title: "Resources",
  description:
    "Read practical EnableCX resources on SaaS, CCaaS, and UCaaS rollout, adoption, and team enablement best practices.",
});

export default function ResourcesPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="Resources"
          description="Insights on SaaS, CCaaS, and UCaaS adoption to help teams improve platform outcomes."
        />
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-border-default bg-bg-elevated px-3 py-1.5 text-xs font-semibold text-brand-primary">
          <BookOpenText className="h-3.5 w-3.5 text-icon" aria-hidden />
          Practical guidance for leaders and delivery teams
        </p>
        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">Tools</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TrackedLink
              href="/resources/ramp-time-calculator"
              eventName={analyticsEvents.calculatorOpen}
              location="resources_tools_grid"
            >
              <Card className="h-full transition hover:-translate-y-0.5 hover:border-brand-primary">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  Calculator
                </p>
                <h3 className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-text-primary">
                  <Calculator className="h-5 w-5 shrink-0 text-icon" aria-hidden />
                  Ramp time cost
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Per-cohort ramp cost, optional annual scaling, and savings from a shorter ramp with
                  stronger training.
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                  Open calculator
                  <ArrowRight className="h-4 w-4 text-icon" aria-hidden />
                </p>
              </Card>
            </TrackedLink>
            <TrackedLink
              href="/resources/training-plan-generator"
              eventName={analyticsEvents.trainingPlanGeneratorOpen}
              location="resources_tools_grid"
            >
              <Card className="h-full transition hover:-translate-y-0.5 hover:border-brand-primary">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  Generator
                </p>
                <h3 className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-text-primary">
                  <ClipboardList className="h-5 w-5 shrink-0 text-icon" aria-hidden />
                  Role-based training plan
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Onboarding outlines for Support, CSM, and Ops—editable sections, copy to clipboard,
                  or print / PDF.
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                  Open generator
                  <ArrowRight className="h-4 w-4 text-icon" aria-hidden />
                </p>
              </Card>
            </TrackedLink>
            <TrackedLink
              href="/resources/ai-capability-diagnostic"
              eventName={analyticsEvents.aiDiagnosticOpen}
              location="resources_tools_grid"
            >
              <Card className="h-full transition hover:-translate-y-0.5 hover:border-brand-primary">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  Diagnostic
                </p>
                <h3 className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-text-primary">
                  <Gauge className="h-5 w-5 shrink-0 text-icon" aria-hidden />
                  AI capability diagnostic
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Five-dimension maturity snapshot: Likert confidence, scenario knowledge scores, weighted
                  capability index, strengths, gaps, and exportable recommendations.
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                  Start assessment
                  <ArrowRight className="h-4 w-4 text-icon" aria-hidden />
                </p>
              </Card>
            </TrackedLink>
          </div>
        </div>
        <h2 className="mt-14 text-sm font-semibold uppercase tracking-wide text-text-muted">
          Articles
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`}>
              <Card className="h-full transition hover:-translate-y-0.5 hover:border-brand-primary">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {resource.category}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-text-primary">
                  {resource.title}
                </h2>
                <p className="mt-2 text-sm text-text-secondary">{resource.excerpt}</p>
                <p className="mt-3 text-xs text-text-muted">{resource.readTime}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                  Read article
                  <ArrowRight className="h-4 w-4 text-icon" aria-hidden />
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </SectionShell>
      <SectionShell subtle>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
