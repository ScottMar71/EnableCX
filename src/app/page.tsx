import { FinalCTASection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OutcomesSection } from "@/components/sections/outcomes-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CaseStudyFeatureSection } from "@/components/sections/case-study-feature-section";
import { SectionShell } from "@/components/layout/section-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EnableCX",
          url: absoluteUrl("/"),
          description:
            "Practical SaaS, CCaaS, and UCaaS training programmes that improve platform adoption, team confidence, and customer outcomes.",
          areaServed: "Global",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "EnableCX",
          url: absoluteUrl("/"),
          publisher: {
            "@type": "Organization",
            name: "EnableCX",
            url: absoluteUrl("/"),
          },
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
