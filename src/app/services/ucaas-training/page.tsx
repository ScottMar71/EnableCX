import { PageIntro } from "@/components/sections/page-intro";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { SectionShell } from "@/components/layout/section-shell";

export default function UcaaSTrainingPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="UCaaS Training"
          description="Rollout and adoption support for unified communications platforms across teams."
        />
      </SectionShell>
      <SectionShell>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
