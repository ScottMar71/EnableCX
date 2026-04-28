import { PageIntro } from "@/components/sections/page-intro";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { SectionShell } from "@/components/layout/section-shell";

export default function SaaSTrainingPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="SaaS Training"
          description="Role-based enablement designed to improve SaaS adoption and workflow consistency."
        />
      </SectionShell>
      <SectionShell>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
