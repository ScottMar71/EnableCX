import { FinalCTASection } from "@/components/sections/final-cta-section";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { Accordion } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

type ServiceDetailTemplateProps = {
  title: string;
  description: string;
  audience: string[];
  challenges: string[];
  inclusions: string[];
  outcomes: string[];
  faqs: { id: string; question: string; answer: string }[];
};

export function ServiceDetailTemplate({
  title,
  description,
  audience,
  challenges,
  inclusions,
  outcomes,
  faqs,
}: ServiceDetailTemplateProps) {
  return (
    <>
      <SectionShell>
        <PageIntro title={title} description={description} />
      </SectionShell>

      <SectionShell subtle>
        <ServiceListSection title="Who this is for" items={audience} />
      </SectionShell>

      <SectionShell>
        <ServiceListSection title="Common challenges" items={challenges} />
      </SectionShell>

      <SectionShell subtle>
        <ServiceListSection title="What's included" items={inclusions} />
      </SectionShell>

      <SectionShell>
        <ServiceListSection title="Outcomes" items={outcomes} />
      </SectionShell>

      <SectionShell subtle>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-text-primary">FAQ</h2>
          <Accordion items={faqs} />
        </div>
      </SectionShell>

      <SectionShell>
        <FinalCTASection />
      </SectionShell>
    </>
  );
}

function ServiceListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-text-primary">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item}>
            <p className="text-sm text-text-secondary">{item}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
