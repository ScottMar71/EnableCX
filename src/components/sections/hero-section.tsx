import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";

export function HeroSection() {
  return (
    <div className="grid gap-8 rounded-lg border border-brand-primary/10 bg-brand-primary/[0.04] px-6 py-10 md:gap-10 md:px-10 md:py-14">
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
      <div className="flex flex-wrap gap-2.5">
        <Button asChild size="lg">
          <TrackedLink
            href="/book-call"
            eventName={analyticsEvents.ctaClickBookCall}
            location="home_hero"
            className="text-[#ffffff]"
          >
            Book a Call
          </TrackedLink>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <TrackedLink
            href="/resources"
            eventName={analyticsEvents.ctaClickResources}
            location="home_hero"
          >
            Get the Adoption Checklist
          </TrackedLink>
        </Button>
      </div>
    </div>
  );
}
