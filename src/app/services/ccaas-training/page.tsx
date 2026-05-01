import { ServiceDetailTemplate } from "@/components/sections/service-detail-template";
import { staticSeo } from "@/lib/seo";

export const metadata = staticSeo({
  path: "/services/ccaas-training",
  title: "CCaaS Training",
  description:
    "AI specialist contact center training focused on adoption, agent confidence, and operational consistency.",
});

export default function CcaaSTrainingPage() {
  return (
    <ServiceDetailTemplate
      servicePath="/services/ccaas-training"
      title="CCaaS Training"
      description="AI specialist contact center training focused on adoption, agent confidence, and operational consistency."
      audience={[
        "Contact center leaders and operations managers.",
        "Agents, supervisors, and quality teams.",
      ]}
      challenges={[
        "Inconsistent handling across channels.",
        "Low confidence in platform workflows.",
        "Underused supervisor and QA tooling.",
      ]}
      inclusions={[
        "Agent and supervisor role-path training.",
        "Omnichannel workflow enablement.",
        "QA and coaching alignment sessions.",
      ]}
      outcomes={[
        "Improved adoption and handling consistency.",
        "Stronger confidence for frontline and leadership roles.",
        "Better use of CCaaS reporting and coaching workflows.",
      ]}
      faqs={[
        {
          id: "ccaas-1",
          question: "Do you train both agents and supervisors?",
          answer:
            "Yes. Programs are split by role so each audience gets practical sessions.",
        },
        {
          id: "ccaas-2",
          question: "Can training align with our QA framework?",
          answer:
            "Yes. We map coaching and quality processes into the training plan.",
        },
      ]}
    />
  );
}
