import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CircleCheckBig, Gauge, Sparkles, Users } from "lucide-react";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";

export function HeroSection() {
  return (
    <div className="grid gap-8 rounded-lg border border-border-default bg-bg-elevated px-6 py-10 shadow-[var(--shadow-md)] md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-10 md:py-14">
      <div className="space-y-6 md:space-y-7">
        <Badge className="bg-brand-primary/10 text-brand-primary">Customer Platform Training</Badge>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-text-primary md:text-6xl">
          Turn platform rollout into confident, repeatable daily execution.
        </h1>
        <p className="prose-shell text-pretty text-lg text-text-secondary">
          EnableCX helps support, success, and operations teams adopt SaaS, CCaaS, and
          UCaaS platforms faster with role-based training that reduces ramp time,
          standardises workflows, and improves customer experience consistency.
        </p>
        <ul className="grid gap-2 text-sm font-medium text-text-secondary sm:grid-cols-2">
          <li className="inline-flex items-center gap-2">
            <CircleCheckBig className="h-4 w-4 text-brand-primary" aria-hidden />
            Practical role-based learning paths
          </li>
          <li className="inline-flex items-center gap-2">
            <CircleCheckBig className="h-4 w-4 text-brand-primary" aria-hidden />
            Behaviour change, not just attendance
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 self-end">
        <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
          <div className="rounded-md border border-border-default bg-bg-subtle p-4">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
              <Gauge className="h-4 w-4 text-brand-accent" aria-hidden />
              Faster time-to-competence
            </div>
            <p className="mt-2 text-sm text-text-secondary">Cut ramp friction with role-ready workflows.</p>
          </div>
          <div className="rounded-md border border-border-default bg-bg-subtle p-4">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
              <Users className="h-4 w-4 text-brand-accent" aria-hidden />
              Team-level consistency
            </div>
            <p className="mt-2 text-sm text-text-secondary">Align frontline and admin execution standards.</p>
          </div>
          <div className="rounded-md border border-border-default bg-bg-subtle p-4">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
              <Sparkles className="h-4 w-4 text-brand-accent" aria-hidden />
              Measurable adoption outcomes
            </div>
            <p className="mt-2 text-sm text-text-secondary">Tie enablement to customer and operational metrics.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5">
        <Button asChild size="lg">
          <TrackedLink
            href="/book-call"
            eventName={analyticsEvents.ctaClickBookCall}
            location="home_hero"
            className="text-white"
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4" aria-hidden />
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
    </div>
  );
}
