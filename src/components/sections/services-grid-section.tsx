import Image from "next/image";
import { Card } from "@/components/ui/card";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";

const services = [
  {
    title: "Platform Adoption Training",
    href: "/services/saas-training",
    description:
      "Role-based training to improve day-to-day platform usage, workflow consistency, and team confidence.",
  },
  {
    title: "Workflow Enablement Training",
    href: "/services/ccaas-training",
    description:
      "Practical enablement that improves cross-team execution, service quality, and customer experience consistency.",
  },
  {
    title: "Rollout Training",
    href: "/services/ucaas-training",
    description:
      "Structured onboarding and rollout support for admins and frontline users to increase adoption faster.",
  },
];

const processIcons = [
  { label: "Assess", src: "/icons/assess.svg" },
  { label: "Design", src: "/icons/design.svg" },
  { label: "Deliver", src: "/icons/deliver.svg" },
  { label: "Reinforce", src: "/icons/reinforce.svg" },
];

export function ServicesGridSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-text-primary">
          Training built for frontline teams and platform owners
        </h2>
        <p className="prose-shell text-text-secondary">
          We design practical, role-based programmes around your real workflows so
          adoption becomes repeatable day-to-day behaviour, not a one-off launch activity.
        </p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {processIcons.map((icon) => (
            <li
              key={icon.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-default bg-white px-3 py-1.5 text-xs font-medium text-text-secondary"
            >
              <Image src={icon.src} alt="" aria-hidden width={14} height={14} className="h-3.5 w-3.5 shrink-0" />
              {icon.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <TrackedLink
            key={service.href}
            href={service.href}
            eventName={analyticsEvents.serviceCardClick}
            location="services_grid"
          >
            <Card className="h-full transition-colors hover:border-brand-primary">
              <h3 className="text-xl font-semibold text-text-primary">{service.title}</h3>
              <p className="mt-3 text-sm text-text-secondary">{service.description}</p>
            </Card>
          </TrackedLink>
        ))}
      </div>
    </div>
  );
}
