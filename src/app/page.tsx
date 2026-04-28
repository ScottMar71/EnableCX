import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OutcomesSection } from "@/components/sections/outcomes-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CaseStudyFeatureSection } from "@/components/sections/case-study-feature-section";
import { SectionShell } from "@/components/layout/section-shell";

export default function Home() {
  return (
    <>
      <SectionShell>
        <HeroSection />
      </SectionShell>
      <SectionShell subtle>
        <PainPointsSection />
      </SectionShell>
      <SectionShell>
        <ServicesGridSection />
      </SectionShell>
      <SectionShell subtle>
        <OutcomesSection />
      </SectionShell>
      <SectionShell>
        <ProcessSection />
      </SectionShell>
      <SectionShell subtle>
        <CaseStudyFeatureSection />
      </SectionShell>
      <SectionShell>
        <TestimonialsSection />
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
