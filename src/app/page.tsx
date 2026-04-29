import { FinalCTASection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OutcomesSection } from "@/components/sections/outcomes-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CaseStudyFeatureSection } from "@/components/sections/case-study-feature-section";
import { SectionShell } from "@/components/layout/section-shell";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EnableCX",
          url: "https://enablecx.com",
          description:
            "Practical SaaS, CCaaS, and UCaaS training programmes that improve platform adoption, team confidence, and customer outcomes.",
          areaServed: "Global",
        }}
      />
      <SectionShell>
        <HeroSection />
      </SectionShell>
      <SectionShell subtle>
        <PainPointsSection />
      </SectionShell>
      <SectionShell subtle>
        <OutcomesSection />
      </SectionShell>
      <SectionShell subtle>
        <CaseStudyFeatureSection />
      </SectionShell>
      <SectionShell>
        <TestimonialsSection />
      </SectionShell>
      <SectionShell>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
