import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";

export default function TermsPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Terms of Service"
        description="This page will define the service terms and engagement conditions for EnableCX."
      />
    </SectionShell>
  );
}
