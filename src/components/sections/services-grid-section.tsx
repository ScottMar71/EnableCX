import { ArrowRight, Compass, Route, Rocket, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";

const services = [
  {
    title: "Platform Adoption Training",
    href: "/services/saas-training",
    description:
      "Role-based training to improve day-to-day platform usage, workflow consistency, and team confidence.",
    icon: Compass,
  },
  {
    title: "Workflow Enablement Training",
    href: "/services/ccaas-training",
    description:
      "Practical enablement that improves cross-team execution, service quality, and customer experience consistency.",
    icon: Route,
  },
  {
    title: "Rollout Training",
    href: "/services/ucaas-training",
    description:
      "Structured onboarding and rollout support for admins and frontline users to increase adoption faster.",
    icon: Rocket,
  },
];

const processIcons: Array<{ label: string; icon: typeof Target }> = [
  { label: "Assess", icon: Target },
  { label: "Design", icon: Compass },
  { label: "Deliver", icon: Rocket },
  { label: "Reinforce", icon: Route },
];

type ServicesGridSectionProps = {
  showTitle?: boolean;
};

export function ServicesGridSection({ showTitle = true }: ServicesGridSectionProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        {showTitle ? (
          <h2 className="text-balance text-3xl font-semibold text-text-primary">
            Training built for frontline teams and platform owners
          </h2>
        ) : null}
        <p className="prose-shell text-pretty text-text-secondary">
          We design practical, role-based programmes around your real workflows so
          adoption becomes repeatable day-to-day behaviour, not a one-off launch activity.
        </p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {processIcons.map((icon) => (
            <li
              key={icon.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-default bg-bg-elevated px-3 py-1.5 text-xs font-medium text-text-secondary"
            >
              <icon.icon className="h-3.5 w-3.5 shrink-0 text-brand-primary" aria-hidden />
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
            <Card className="h-full transition hover:-translate-y-0.5 hover:border-brand-primary">
              <service.icon className="h-5 w-5 text-brand-primary" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold text-text-primary">{service.title}</h3>
              <p className="mt-3 text-sm text-text-secondary">{service.description}</p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden />
              </p>
            </Card>
          </TrackedLink>
        ))}
      </div>
    </div>
  );
}
