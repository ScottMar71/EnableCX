import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";

export default function CookiesPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Cookie Policy"
        description="This page will outline cookies used for analytics and website performance."
      />
    </SectionShell>
  );
}
