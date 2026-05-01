import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { PageIntro } from "@/components/sections/page-intro";
import { RoleTrainingPlanGenerator } from "@/components/tools/role-training-plan-generator";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { staticSeo } from "@/lib/seo";

const planSeo = staticSeo({
  path: "/resources/training-plan-generator",
  title: "Role-Based Training Plan Generator",
  description:
    "Generate editable onboarding and training outlines for Support, Customer Success, and Operations—copy to clipboard or print.",
});

export const metadata: Metadata = {
  ...planSeo,
  openGraph: {
    ...planSeo.openGraph,
    title: "Role-Based Training Plan Generator | EnableCX",
    description:
      "Structured onboarding outlines for Support Agent, CSM, and Ops with editable sections.",
  },
};

export default function TrainingPlanGeneratorPage() {
  return (
    <>
      <SectionShell>
        <Link
          href="/resources"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-primary underline-offset-4 hover:underline print:hidden"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to resources
        </Link>
        <PageIntro
          title="Role-Based Training Plan Generator"
          description="Pick Support Agent, Customer Success Manager, or Ops to load a structured onboarding outline. Customize every section, then copy as plain text or print / save as PDF."
        />
        <RoleTrainingPlanGenerator />
      </SectionShell>
      <SectionShell subtle className="print:hidden">
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
