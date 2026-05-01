import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { staticSeo } from "@/lib/seo";
import { ArrowUpRight, Building2, Handshake, Lightbulb, Target, Users } from "lucide-react";

export const metadata = staticSeo({
  path: "/about",
  title: "About",
  description:
    "Learn how EnableCX helps teams increase adoption and performance across SaaS, CCaaS, and UCaaS platforms through practical training.",
});

export default function AboutPage() {
  return (
    <>
      <SectionShell>
        <PageIntro
          title="About EnableCX"
          description="Specialist consultancy offering AI specialist training to help teams adopt SaaS, CCaaS, and UCaaS platforms with confidence."
        />
      </SectionShell>
      <SectionShell subtle>
        <div className="space-y-8">
          <div className="space-y-3 rounded-lg border border-border-default bg-bg-elevated p-6 shadow-[var(--shadow-sm)]">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
              <Lightbulb className="h-4 w-4 text-icon" aria-hidden />
              What we do
            </p>
            <h2 className="text-balance text-3xl font-semibold text-text-primary">What We Do</h2>
            <p className="text-text-secondary">
              We offer AI specialist training and hands-on, value-driven enablement designed to
              help partners, customers, and internal teams succeed in an increasingly digital,
              cloud-first world.
            </p>
            <p className="text-text-secondary">
              At the core of our approach is a belief that training should be more than knowledge
              transfer - it should drive real business impact. We design engaging, practical
              learning experiences that empower individuals, accelerate adoption, and unlock the
              full value of technology investments, particularly across CCaaS, UCaaS, and SaaS
              environments.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-text-primary">How We Create Impact</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <p className="inline-flex items-center gap-2 text-sm text-text-secondary">
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-icon" aria-hidden />
                  Increase revenue by enabling better sales conversations and product
                  understanding.
                </p>
              </Card>
              <Card>
                <p className="inline-flex items-center gap-2 text-sm text-text-secondary">
                  <Target className="h-4 w-4 shrink-0 text-icon" aria-hidden />
                  Reduce churn through stronger customer engagement and confidence.
                </p>
              </Card>
              <Card>
                <p className="inline-flex items-center gap-2 text-sm text-text-secondary">
                  <Users className="h-4 w-4 shrink-0 text-icon" aria-hidden />
                  Improve customer experience by equipping teams with the skills to deliver
                  consistently high-quality service.
                </p>
              </Card>
              <Card>
                <p className="inline-flex items-center gap-2 text-sm text-text-secondary">
                  <Building2 className="h-4 w-4 shrink-0 text-icon" aria-hidden />
                  Drive adoption of platforms and tools, ensuring organisations realise full ROI.
                </p>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-text-primary">Our Approach</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <p className="text-sm text-text-secondary">
                  Design engaging, hands-on learning experiences tailored to real-world use cases.
                </p>
              </Card>
              <Card>
                <p className="text-sm text-text-secondary">
                  Prioritise value-driven outcomes, not just course completion.
                </p>
              </Card>
              <Card>
                <p className="text-sm text-text-secondary">
                  Empower agents and teams to perform with confidence and autonomy.
                </p>
              </Card>
              <Card>
                <p className="text-sm text-text-secondary">
                  Support continuous digital growth through ongoing learning and optimisation.
                </p>
              </Card>
            </div>
            <p className="text-text-secondary">
              We embrace individual strengths, foster a culture of empowerment, and ensure every
              programme is aligned to both business goals and user needs.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-text-primary">Our Mission</h3>
            <p className="text-text-secondary">
              To equip partners and customers with the knowledge, tools, and confidence they need
              to succeed - while helping organisations transform training into a strategic driver
              of growth, efficiency, and customer experience.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-text-primary">
              Why Training Matters Across the Business Ecosystem
            </h3>
            <p className="text-text-secondary">
              Training creates value across every level of a business ecosystem, from commercial
              partners to internal teams.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <h4 className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                  <Handshake className="h-4 w-4 text-icon" aria-hidden />
                  For Partners
                </h4>
                <p className="mt-2 text-sm text-text-secondary">
                  Effective training drives increased revenue, reduces churn and support demand,
                  and speeds up onboarding to build stronger, more sustainable relationships.
                </p>
              </Card>
              <Card>
                <h4 className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                  <Building2 className="h-4 w-4 text-icon" aria-hidden />
                  For Organisations
                </h4>
                <p className="mt-2 text-sm text-text-secondary">
                  It improves sales performance, customer engagement, retention, and satisfaction
                  while reducing support tickets, shortening onboarding time, and preventing costly
                  adoption gaps.
                </p>
              </Card>
              <Card>
                <h4 className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                  <Users className="h-4 w-4 text-icon" aria-hidden />
                  For Employees
                </h4>
                <p className="mt-2 text-sm text-text-secondary">
                  Training increases productivity, confidence, consistency, and technical capability
                  while reducing supervision overhead and improving team performance and retention.
                </p>
              </Card>
            </div>
            <p className="text-text-secondary">
              In short, training is not just a support function. It is a strategic driver of
              growth, efficiency, customer experience, and long-term business success.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-text-primary">In Short</h3>
            <p className="text-text-secondary">We don&apos;t just deliver training.</p>
            <p className="text-text-secondary">
              We enable performance, accelerate adoption, and drive measurable business outcomes.
            </p>
          </div>
        </div>
      </SectionShell>
      <SectionShell>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}
