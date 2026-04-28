import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/case-studies";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";

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
          <h1 className="text-4xl font-semibold text-text-primary md:text-5xl">
            {caseStudy.title}
          </h1>
        </header>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-text-primary">Challenge</h2>
          <p className="text-text-secondary">{caseStudy.challenge}</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-text-primary">Approach</h2>
          <p className="text-text-secondary">{caseStudy.approach}</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-text-primary">Delivery</h2>
          <p className="text-text-secondary">{caseStudy.delivery}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-text-primary">Results</h2>
          <ul className="space-y-2">
            {caseStudy.results.map((result) => (
              <li
                key={result}
                className="rounded-md border border-border-default bg-white px-4 py-3 text-text-secondary"
              >
                {result}
              </li>
            ))}
          </ul>
        </section>

        <blockquote className="rounded-md border-l-4 border-brand-primary bg-white p-5 text-text-secondary">
          &ldquo;{caseStudy.quote}&rdquo;
          <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-text-primary">
            {caseStudy.quoteAttribution}
          </footer>
        </blockquote>

        <TrackedLink
          href="/book-call"
          eventName={analyticsEvents.ctaClickBookCall}
          location="case_study_detail"
          className="inline-flex"
        >
          <Button>Book a Discovery Call</Button>
        </TrackedLink>
      </article>
    </SectionShell>
  );
}
