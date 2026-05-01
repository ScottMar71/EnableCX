import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { PageIntro } from "@/components/sections/page-intro";
import { RampTimeCalculator } from "@/components/tools/ramp-time-calculator";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { staticSeo } from "@/lib/seo";

const rampSeo = staticSeo({
  path: "/resources/ramp-time-calculator",
  title: "Ramp time cost calculator",
  description:
    "Estimate support team onboarding cost and potential savings from shorter ramp time with better training.",
});

export const metadata: Metadata = {
  ...rampSeo,
  openGraph: {
    ...rampSeo.openGraph,
    title: "Ramp time cost calculator | EnableCX",
    description:
      "Estimate support team onboarding cost and potential savings from shorter ramp time.",
  },
};

export default function RampTimeCalculatorPage() {
  return (
    <>
      <SectionShell>
        <Link
          href="/resources"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-primary underline-offset-4 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to resources
        </Link>
        <PageIntro
          title="Ramp time cost calculator"
          description="Cohort size is one onboarding wave (people starting together), not total headcount. Add optional annual hires to scale one-wave estimates to a year—then compare payroll impact, throughput gaps, and savings from a shorter ramp."
        />
        <RampTimeCalculator />
      </SectionShell>
      <SectionShell subtle>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
