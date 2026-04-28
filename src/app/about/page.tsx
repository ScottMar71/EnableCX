import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { FinalCTASection } from "@/components/sections/final-cta-section";

export default function AboutPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="About EnableCX"
          description="Specialist consultancy helping teams adopt SaaS, CCaaS, and UCaaS platforms with confidence."
        />
      </SectionShell>
      <SectionShell subtle>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-text-primary">How we work</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <p className="font-semibold text-text-primary">Practical by design</p>
              <p className="mt-2 text-sm text-text-secondary">
                Training is mapped to real workflows, not generic theory.
              </p>
            </Card>
            <Card>
              <p className="font-semibold text-text-primary">Role-based delivery</p>
              <p className="mt-2 text-sm text-text-secondary">
                Sessions are tailored for frontline teams, managers, and platform owners.
              </p>
            </Card>
            <Card>
              <p className="font-semibold text-text-primary">Outcome focused</p>
              <p className="mt-2 text-sm text-text-secondary">
                Every engagement is designed to improve adoption and operational consistency.
              </p>
            </Card>
          </div>
        </div>
      </SectionShell>
      <SectionShell>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
