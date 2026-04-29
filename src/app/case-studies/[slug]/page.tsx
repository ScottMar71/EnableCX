import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/case-studies";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { ArrowRight, CircleCheckBig, Quote } from "lucide-react";

type CaseStudyDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CaseStudyDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);
  if (!caseStudy) return {};

  return {
    title: caseStudy.title,
    description: caseStudy.challenge,
    alternates: {
      canonical: `/case-studies/${caseStudy.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://enablecx.com/case-studies/${caseStudy.slug}`,
      title: caseStudy.title,
      description: caseStudy.challenge,
      publishedTime: caseStudy.publishedDate,
      siteName: "EnableCX",
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.challenge,
    },
  };
}

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) notFound();

  return (
    <SectionShell>
      <article className="space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-medium text-brand-primary">{caseStudy.industry}</p>
          <h1 className="text-balance text-4xl font-semibold text-text-primary md:text-5xl">
            {caseStudy.title}
          </h1>
        </header>

        <section className="space-y-2 rounded-lg border border-border-default bg-bg-elevated p-5 shadow-[var(--shadow-sm)]">
          <h2 className="text-2xl font-semibold text-text-primary">Challenge</h2>
          <p className="text-text-secondary">{caseStudy.challenge}</p>
        </section>

        <section className="space-y-2 rounded-lg border border-border-default bg-bg-elevated p-5 shadow-[var(--shadow-sm)]">
          <h2 className="text-2xl font-semibold text-text-primary">Approach</h2>
          <p className="text-text-secondary">{caseStudy.approach}</p>
        </section>

        <section className="space-y-2 rounded-lg border border-border-default bg-bg-elevated p-5 shadow-[var(--shadow-sm)]">
          <h2 className="text-2xl font-semibold text-text-primary">Delivery</h2>
          <p className="text-text-secondary">{caseStudy.delivery}</p>
        </section>

        <section className="space-y-3 rounded-lg border border-border-default bg-bg-elevated p-5 shadow-[var(--shadow-sm)]">
          <h2 className="text-2xl font-semibold text-text-primary">Results</h2>
          <ul className="space-y-2">
            {caseStudy.results.map((result) => (
              <li
                key={result}
                className="inline-flex items-start gap-2 rounded-md border border-border-default bg-bg-subtle px-4 py-3 text-text-secondary"
              >
                <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                {result}
              </li>
            ))}
          </ul>
        </section>

        <blockquote className="rounded-md border-l-4 border-brand-primary bg-bg-elevated p-5 text-text-secondary shadow-[var(--shadow-sm)]">
          <Quote className="mb-2 h-5 w-5 text-brand-accent" aria-hidden />
          &ldquo;{caseStudy.quote}&rdquo;
          <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-text-primary">
            {caseStudy.quoteAttribution}
          </footer>
        </blockquote>

        <Button asChild>
          <TrackedLink
            href="/book-call"
            eventName={analyticsEvents.ctaClickBookCall}
            location="case_study_detail"
            className="inline-flex"
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4" aria-hidden />
          </TrackedLink>
        </Button>
      </article>
    </SectionShell>
  );
}
