import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";

export default function AboutPage() {
  return (
    <SectionShell>
      <PageIntro
        title="About EnableCX"
        description="Specialist consultancy helping teams adopt SaaS, CCaaS, and UCaaS platforms with confidence."
      />
    </SectionShell>
  );
}
