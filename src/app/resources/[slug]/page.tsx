import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/layout/section-shell";
import { resources } from "@/content/resources";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { Accordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CircleCheckBig, Lightbulb, ListChecks } from "lucide-react";

type ResourceDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ResourceDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const article = resources.find((item) => item.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/resources/${article.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://enablecx.com/resources/${article.slug}`,
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedDate,
      siteName: "EnableCX",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export function generateStaticParams() {
  return resources.map((item) => ({ slug: item.slug }));
}

export default async function ResourceDetailPage({ params }: ResourceDetailProps) {
  const { slug } = await params;
  const article = resources.find((item) => item.slug === slug);
  if (!article) notFound();
  const relatedResources = resources.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.publishedDate,
          author: {
            "@type": "Organization",
            name: "EnableCX",
          },
          publisher: {
            "@type": "Organization",
            name: "EnableCX",
          },
          mainEntityOfPage: `https://enablecx.com/resources/${article.slug}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <SectionShell>
        <article className="space-y-6">
          <p className="text-sm font-medium text-brand-primary">
            {article.category} · {article.readTime}
          </p>
          <h1 className="text-balance text-4xl font-semibold text-text-primary md:text-5xl">
            {article.title}
          </h1>
          <p className="text-pretty text-lg text-text-secondary">{article.excerpt}</p>
          <div className="space-y-4">
            {article.body.map((paragraph) => (
              <p key={paragraph} className="prose-shell text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
          <section className="space-y-3 rounded-md border border-border-default bg-bg-subtle p-5">
            <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-text-primary">
              <Lightbulb className="h-5 w-5 text-brand-accent" aria-hidden />
              Key takeaways
            </h2>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway) => (
                <li key={takeaway} className="inline-flex items-start gap-2 text-sm text-text-secondary">
                  <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
                  {takeaway}
                </li>
              ))}
            </ul>
          </section>
          <section className="space-y-3 rounded-md border border-border-default bg-bg-elevated p-5">
            <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-text-primary">
              <ArrowRight className="h-5 w-5 text-brand-accent" aria-hidden />
              Related next steps
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href={article.relatedServiceHref}
                className="text-sm font-medium text-brand-primary underline-offset-4 hover:underline"
              >
                Explore the related service
              </Link>
              <Button asChild>
                <TrackedLink
                  href="/book-call"
                  eventName={analyticsEvents.ctaClickBookCall}
                  location="resource_detail"
                  className="inline-flex"
                >
                  Book a Discovery Call
                </TrackedLink>
              </Button>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {relatedResources.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="rounded-md border border-border-default bg-bg-subtle px-4 py-3 text-sm text-text-secondary transition-colors hover:border-brand-primary"
                >
                  {resource.title}
                </Link>
              ))}
            </div>
          </section>
          <section className="space-y-3 rounded-md border border-border-default bg-bg-elevated p-5">
            <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-text-primary">
              <ListChecks className="h-5 w-5 text-brand-accent" aria-hidden />
              Frequently asked questions
            </h2>
            <Accordion items={article.faqs} />
          </section>
        </article>
      </SectionShell>
      <SectionShell subtle>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
