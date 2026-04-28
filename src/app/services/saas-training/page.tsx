import { ServiceDetailTemplate } from "@/components/sections/service-detail-template";

export default function SaaSTrainingPage() {
  return (
    <ServiceDetailTemplate
      title="SaaS Training"
      description="Role-based enablement designed to improve SaaS adoption and workflow consistency."
      audience={[
        "Customer support and success teams scaling onboarding.",
        "Operations leaders standardizing cross-team workflows.",
      ]}
      challenges={[
        "Low usage after implementation.",
        "Inconsistent operating processes across functions.",
        "Slow onboarding for new team members.",
      ]}
      inclusions={[
        "Role-based learning plans and onboarding modules.",
        "Workflow-specific training sessions.",
        "Manager enablement and reinforcement material.",
      ]}
      outcomes={[
        "Faster user ramp-up and stronger confidence.",
        "Consistent platform usage across teams.",
        "Improved value from SaaS platform investments.",
      ]}
      faqs={[
        {
          id: "saas-1",
          question: "Can sessions be tailored by team?",
          answer:
            "Yes. We design training tracks by role, workflow, and business outcome.",
        },
        {
          id: "saas-2",
          question: "Do you support remote delivery?",
          answer:
            "Yes. Programs can be delivered remotely, on-site, or as a hybrid engagement.",
        },
      ]}
    />
  );
}
