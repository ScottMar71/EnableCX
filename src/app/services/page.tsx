import { PageIntro } from "@/components/sections/page-intro";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { SectionShell } from "@/components/layout/section-shell";
import { ProcessSection } from "@/components/sections/process-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";

export default function ServicesPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="Services"
          description="Training and enablement across SaaS, CCaaS, and UCaaS environments."
        />
      </SectionShell>
      <SectionShell subtle>
        <ServicesGridSection />
      </SectionShell>
      <SectionShell>
        <ProcessSection />
      </SectionShell>
      <SectionShell subtle>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
