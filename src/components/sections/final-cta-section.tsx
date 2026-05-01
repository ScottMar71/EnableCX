import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { ArrowRight, CalendarClock, ShieldCheck } from "lucide-react";

export function FinalCTASection() {
  return (
    <div className="rounded-lg border border-border-default bg-bg-elevated p-8 text-text-primary shadow-[var(--shadow-md)] md:p-12">
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
        <CalendarClock className="h-4 w-4 text-icon" aria-hidden />
        Next step
      </p>
      <h2 className="mt-3 text-balance text-3xl font-semibold">
        Ready to improve adoption and team confidence?
      </h2>
      <p className="mt-4 max-w-2xl text-text-secondary">
        In a short discovery call, we review your current adoption gaps and map
        a practical training plan for your teams and platform goals.
      </p>
      <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-text-secondary">
        <ShieldCheck className="h-4 w-4 text-icon" aria-hidden />
        No hard sell. Practical recommendations tailored to your context.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <TrackedLink
            href="/book-call"
            className="inline-flex"
            eventName={analyticsEvents.ctaClickBookCall}
            location="final_cta"
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4" aria-hidden />
          </TrackedLink>
        </Button>
        <Button
          asChild
          variant="secondary"
        >
          <TrackedLink
            href="/resources"
            eventName={analyticsEvents.ctaClickResources}
            location="final_cta"
          >
            View Resources First
          </TrackedLink>
        </Button>
      </div>
    </div>
  );
}
