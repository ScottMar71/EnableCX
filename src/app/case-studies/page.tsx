import { PageIntro } from "@/components/sections/page-intro";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/layout/section-shell";

export default function CaseStudiesPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Case Studies"
        description="Examples of how EnableCX improves platform adoption and team confidence."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card variant="case-study">Case study content scaffold for Sprint 3.</Card>
        <Card variant="case-study">Case study content scaffold for Sprint 3.</Card>
      </div>
    </SectionShell>
  );
}
