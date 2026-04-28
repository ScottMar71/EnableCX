import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";

export function HeroSection() {
  return (
    <div className="grid gap-10 py-16 md:py-24">
      <div className="space-y-6">
        <Badge>Customer Platform Training</Badge>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-text-primary md:text-5xl">
          Turn platform rollout into confident daily execution.
        </h1>
        <p className="prose-shell text-lg text-text-secondary">
          EnableCX helps support, success, and operations teams adopt SaaS, CCaaS, and
          UCaaS platforms faster with role-based training that reduces ramp time,
          standardises workflows, and improves customer experience consistency.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <TrackedLink
          href="/book-call"
          eventName={analyticsEvents.ctaClickBookCall}
          location="home_hero"
        >
          <Button size="lg">Book a Call</Button>
        </TrackedLink>
        <TrackedLink
          href="/resources"
          eventName={analyticsEvents.ctaClickResources}
          location="home_hero"
        >
          <Button variant="secondary" size="lg">
            Get the Adoption Checklist
          </Button>
        </TrackedLink>
      </div>
    </div>
  );
}
