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

export function ServicesGridSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-text-primary">
          Specialist training for customer-facing teams
        </h2>
        <p className="prose-shell text-text-secondary">
          Each program is tailored to how your teams work so adoption becomes part
          of daily operations, not a one-time event.
        </p>
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
