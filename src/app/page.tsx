import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OutcomesSection } from "@/components/sections/outcomes-section";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { SectionShell } from "@/components/layout/section-shell";

export default function Home() {
  return (
    <>
      <SectionShell>
        <HeroSection />
      </SectionShell>
      <SectionShell subtle>
        <ServicesGridSection />
      </SectionShell>
      <SectionShell>
        <OutcomesSection />
      </SectionShell>
      <SectionShell subtle>
        <FAQSection />
      </SectionShell>
      <SectionShell>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
