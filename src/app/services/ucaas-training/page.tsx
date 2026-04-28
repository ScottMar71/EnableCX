import { ServiceDetailTemplate } from "@/components/sections/service-detail-template";

export default function UcaaSTrainingPage() {
  return (
    <ServiceDetailTemplate
      title="UCaaS Training"
      description="Rollout and adoption support for unified communications platforms across teams."
      audience={[
        "IT leaders managing platform rollout.",
        "Department managers and end-user enablement leads.",
      ]}
      challenges={[
        "Low feature adoption after migration.",
        "User confusion and inconsistent communication usage.",
        "High support overhead for basic tasks.",
      ]}
      inclusions={[
        "Admin and end-user adoption programs.",
        "Department-specific workflow training.",
        "Post-launch reinforcement guidance.",
      ]}
      outcomes={[
        "Smoother rollout execution and user readiness.",
        "Higher feature adoption across teams.",
        "Reduced avoidable support burden.",
      ]}
      faqs={[
        {
          id: "ucaas-1",
          question: "Can rollout training be phased?",
          answer:
            "Yes. We typically deliver in phases to match migration timelines.",
        },
        {
          id: "ucaas-2",
          question: "Do you support hybrid teams?",
          answer:
            "Yes. Training delivery is optimized for distributed and hybrid teams.",
        },
      ]}
    />
  );
}
