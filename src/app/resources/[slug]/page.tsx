import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/layout/section-shell";
import { resources } from "@/content/resources";
import { FinalCTASection } from "@/components/sections/final-cta-section";

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
  };
}

export function generateStaticParams() {
  return resources.map((item) => ({ slug: item.slug }));
}

export default async function ResourceDetailPage({ params }: ResourceDetailProps) {
  const { slug } = await params;
  const article = resources.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <SectionShell>
        <article className="space-y-6">
          <p className="text-sm font-medium text-brand-primary">
            {article.category} · {article.readTime}
          </p>
          <h1 className="text-4xl font-semibold text-text-primary md:text-5xl">
            {article.title}
          </h1>
          <p className="text-lg text-text-secondary">{article.excerpt}</p>
          <div className="space-y-4">
            {article.body.map((paragraph) => (
              <p key={paragraph} className="prose-shell text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </SectionShell>
      <SectionShell subtle>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
