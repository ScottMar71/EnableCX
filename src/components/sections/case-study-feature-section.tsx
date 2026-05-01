import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, ShieldCheck, TimerReset } from "lucide-react";

export function CaseStudyFeatureSection() {
  return (
    <div className="space-y-6 rounded-lg border border-border-default bg-bg-elevated p-8 shadow-[var(--shadow-sm)]">
      <h2 className="text-balance text-3xl font-semibold text-text-primary">
        Proof of impact: financial services transformation
      </h2>
      <p className="prose-shell text-pretty text-text-secondary">
        A UK financial services provider modernized legacy telephony with a
        structured CCaaS and UCaaS transformation program, combining platform
        implementation, role-based training, and adoption support to reduce
        handling times and improve service consistency.
      </p>
      <div className="grid gap-3 md:grid-cols-3">
        <p className="rounded-md border border-border-default bg-bg-subtle px-4 py-3 text-sm text-text-secondary">
          <TimerReset className="mb-2 h-4 w-4 text-icon" aria-hidden />
          25% reduction in average handling time within six months.
        </p>
        <p className="rounded-md border border-border-default bg-bg-subtle px-4 py-3 text-sm text-text-secondary">
          <ShieldCheck className="mb-2 h-4 w-4 text-icon" aria-hidden />
          Better first contact resolution through workflow standardisation.
        </p>
        <p className="rounded-md border border-border-default bg-bg-subtle px-4 py-3 text-sm text-text-secondary">
          <BarChart3 className="mb-2 h-4 w-4 text-icon" aria-hidden />
          Improved visibility with real-time performance analytics.
        </p>
      </div>
      <Button asChild variant="secondary">
        <TrackedLink
          href="/case-studies/financial-services-cloud-communications-transformation"
          eventName={analyticsEvents.caseStudyClick}
          location="home_case_study"
        >
          Read the Case Study
          <ArrowRight className="h-4 w-4 text-icon" aria-hidden />
        </TrackedLink>
      </Button>
    </div>
  );
}
