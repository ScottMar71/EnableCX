import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { PageIntro } from "@/components/sections/page-intro";
import { AiCapabilityDiagnostic } from "@/components/tools/ai-capability-diagnostic";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { staticSeo } from "@/lib/seo";

const diagnosticSeo = staticSeo({
  path: "/resources/ai-capability-diagnostic",
  title: "AI capability diagnostic",
  description:
    "Assess AI awareness, practical usage, business application, governance, and adoption behaviour—then get a maturity snapshot and tailored recommendations.",
});

export const metadata: Metadata = {
  ...diagnosticSeo,
  openGraph: {
    ...diagnosticSeo.openGraph,
    title: "AI capability diagnostic | EnableCX",
    description:
      "Measure AI capability across five dimensions with self-assessment and scenario questions—instant insights for teams and leaders.",
  },
};

export default function AiCapabilityDiagnosticPage() {
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
          title="AI capability diagnostic"
          description="A structured 25-question assessment spanning awareness, hands-on usage, business application, governance risk, and adoption behaviour. You will see a weighted maturity index, pillar-level confidence vs. knowledge signals, and pragmatic next steps—all processed locally in your browser until you choose to export."
        />
        <AiCapabilityDiagnostic />
      </SectionShell>
      <SectionShell subtle>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
