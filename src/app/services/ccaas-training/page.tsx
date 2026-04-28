import { PageIntro } from "@/components/sections/page-intro";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { SectionShell } from "@/components/layout/section-shell";

export default function CcaaSTrainingPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="CCaaS Training"
          description="Contact center training focused on adoption, agent confidence, and operational consistency."
        />
      </SectionShell>
      <SectionShell>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
