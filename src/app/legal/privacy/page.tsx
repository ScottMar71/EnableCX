import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";

export default function PrivacyPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Privacy Policy"
        description="This page will define how EnableCX handles personal and operational data."
      />
    </SectionShell>
  );
}
