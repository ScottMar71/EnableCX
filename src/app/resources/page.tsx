import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { resources } from "@/content/resources";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { ArrowRight, BookOpenText } from "lucide-react";

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
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-border-default bg-bg-elevated px-3 py-1.5 text-xs font-semibold text-brand-primary">
          <BookOpenText className="h-3.5 w-3.5" aria-hidden />
          Practical guidance for leaders and delivery teams
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`}>
              <Card className="h-full transition hover:-translate-y-0.5 hover:border-brand-primary">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {resource.category}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-text-primary">
                  {resource.title}
                </h2>
                <p className="mt-2 text-sm text-text-secondary">{resource.excerpt}</p>
                <p className="mt-3 text-xs text-text-muted">{resource.readTime}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                  Read article
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </p>
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
