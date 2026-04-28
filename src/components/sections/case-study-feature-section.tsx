import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { Button } from "@/components/ui/button";

export function CaseStudyFeatureSection() {
  return (
    <div className="space-y-6 rounded-lg border border-border-default bg-white p-8">
      <h2 className="text-3xl font-semibold text-text-primary">
        Proof that training drives results
      </h2>
      <p className="prose-shell text-text-secondary">
        A growing customer operations team adopted a new platform with role-based
        enablement from EnableCX, reducing ramp time and improving workflow
        consistency across teams.
      </p>
      <TrackedLink
        href="/case-studies"
        eventName={analyticsEvents.caseStudyClick}
        location="home_case_study"
      >
        <Button variant="secondary">Read Case Studies</Button>
      </TrackedLink>
    </div>
  );
}
