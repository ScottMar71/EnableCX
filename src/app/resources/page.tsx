import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";

export default function ResourcesPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Resources"
        description="Insights on SaaS, CCaaS, and UCaaS adoption to help teams improve platform outcomes."
      />
    </SectionShell>
  );
}
