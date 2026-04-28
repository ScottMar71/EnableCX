import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { Button } from "@/components/ui/button";

export function CaseStudyFeatureSection() {
  return (
    <div className="space-y-6 rounded-lg border border-border-default bg-white p-8">
      <h2 className="text-3xl font-semibold text-text-primary">
        Financial services transformation in action
      </h2>
      <p className="prose-shell text-text-secondary">
        A UK financial services provider modernized legacy telephony with a
        structured CCaaS and UCaaS transformation program, combining platform
        implementation, role-based training, and adoption support to improve
        handling times and service consistency.
      </p>
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
