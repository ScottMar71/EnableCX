import { PageIntro } from "@/components/sections/page-intro";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { SectionShell } from "@/components/layout/section-shell";

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
    </>
  );
}
