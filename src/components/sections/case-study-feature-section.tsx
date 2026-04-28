import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { Button } from "@/components/ui/button";

export function CaseStudyFeatureSection() {
  return (
    <div className="space-y-6 rounded-lg border border-border-default bg-white p-8">
      <h2 className="text-3xl font-semibold text-text-primary">
        Proof of impact: financial services transformation
      </h2>
      <p className="prose-shell text-text-secondary">
        A UK financial services provider modernized legacy telephony with a
        structured CCaaS and UCaaS transformation program, combining platform
        implementation, role-based training, and adoption support to reduce
        handling times and improve service consistency.
      </p>
      <div className="grid gap-3 md:grid-cols-3">
        <p className="rounded-md border border-border-default bg-slate-50 px-4 py-3 text-sm text-text-secondary">
          25% reduction in average handling time within six months.
        </p>
        <p className="rounded-md border border-border-default bg-slate-50 px-4 py-3 text-sm text-text-secondary">
          Better first contact resolution through workflow standardisation.
        </p>
        <p className="rounded-md border border-border-default bg-slate-50 px-4 py-3 text-sm text-text-secondary">
          Improved visibility with real-time performance analytics.
        </p>
      </div>
      <TrackedLink
        href="/case-studies/financial-services-cloud-communications-transformation"
        eventName={analyticsEvents.caseStudyClick}
        location="home_case_study"
      >
        <Button variant="secondary">Read the Case Study</Button>
      </TrackedLink>
    </div>
  );
}
