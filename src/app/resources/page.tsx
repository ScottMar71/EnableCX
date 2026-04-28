import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { resources } from "@/content/resources";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { ConversionPathSection } from "@/components/sections/conversion-path-section";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Read practical EnableCX resources on SaaS, CCaaS, and UCaaS rollout, adoption, and team enablement best practices.",
};

export default function ResourcesPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="Resources"
          description="Insights on SaaS, CCaaS, and UCaaS adoption to help teams improve platform outcomes."
        />
        <div className="mt-8">
          <ConversionPathSection compact />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`}>
              <Card className="h-full transition-colors hover:border-brand-primary">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {resource.category}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-text-primary">
                  {resource.title}
                </h2>
                <p className="mt-2 text-sm text-text-secondary">{resource.excerpt}</p>
                <p className="mt-3 text-xs text-text-muted">{resource.readTime}</p>
              </Card>
            </Link>
          ))}
        </div>
      </SectionShell>
      <SectionShell subtle>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
