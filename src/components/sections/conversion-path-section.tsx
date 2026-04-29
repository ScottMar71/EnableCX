import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { ArrowRight } from "lucide-react";

type ConversionPathSectionProps = {
  compact?: boolean;
};

export function ConversionPathSection({ compact = false }: ConversionPathSectionProps) {
  return (
    <div className="space-y-6 rounded-lg border border-border-default bg-bg-elevated p-8 shadow-[var(--shadow-sm)]">
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold text-text-primary">Choose your next step</h2>
        <p className="prose-shell text-pretty text-text-secondary">
          If you are still exploring, start with a practical checklist. If you already know your
          adoption gaps, book a short discovery call.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-md border border-border-default bg-bg-subtle p-5">
          <p className="text-sm font-semibold text-text-primary">Learn First</p>
          <p className="mt-2 text-sm text-text-secondary">
            Get the UCaaS rollout checklist to identify common adoption blockers and immediate
            fixes.
          </p>
          <Button asChild variant="secondary" className="mt-4">
            <TrackedLink
              href="/resources/ucaas-rollout-checklist"
              eventName={analyticsEvents.ctaClickChecklist}
              location={compact ? "resources_conversion_path" : "home_conversion_path"}
              className="inline-flex"
            >
              View Checklist
            </TrackedLink>
          </Button>
        </div>
        <div className="rounded-md border border-border-default bg-bg-subtle p-5">
          <p className="text-sm font-semibold text-text-primary">Need a Tailored Plan?</p>
          <p className="mt-2 text-sm text-text-secondary">
            Book a 20-minute call and we will map your priorities, audiences, and rollout support
            plan.
          </p>
          <Button asChild className="mt-4">
            <TrackedLink
              href="/book-call"
              eventName={analyticsEvents.ctaClickBookCall}
              location={compact ? "resources_conversion_path" : "home_conversion_path"}
              className="inline-flex text-white"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4" aria-hidden />
            </TrackedLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
