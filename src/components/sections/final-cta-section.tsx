import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";

export function FinalCTASection() {
  return (
    <div className="rounded-lg bg-[#0AA09B]/18 p-8 text-text-primary md:p-12">
      <h2 className="text-3xl font-semibold">Ready to improve adoption and team confidence?</h2>
      <p className="mt-4 max-w-2xl text-text-secondary">
        In a short discovery call, we review your current adoption gaps and map
        a practical training plan for your teams and platform goals.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          asChild
          className="bg-brand-primary text-[#ffffff] hover:bg-brand-primary-hover"
        >
          <TrackedLink
            href="/book-call"
            className="inline-flex text-[#ffffff]"
            eventName={analyticsEvents.ctaClickBookCall}
            location="final_cta"
          >
            Book a Discovery Call
          </TrackedLink>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-brand-primary bg-brand-primary text-[#ffffff] hover:bg-brand-primary-hover"
        >
          <TrackedLink
            href="/resources"
            className="inline-flex text-[#ffffff]"
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
