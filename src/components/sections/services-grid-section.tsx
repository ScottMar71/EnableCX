import { Card } from "@/components/ui/card";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";

const services = [
  {
    title: "SaaS Training",
    href: "/services/saas-training",
    description:
      "Role-based enablement to improve platform usage, workflow consistency, and team confidence.",
  },
  {
    title: "CCaaS Training",
    href: "/services/ccaas-training",
    description:
      "Contact center training that improves adoption, agent performance, and customer experience consistency.",
  },
  {
    title: "UCaaS Training",
    href: "/services/ucaas-training",
    description:
      "Rollout-focused training for admins and end users to improve adoption and communication quality.",
  },
];

export function ServicesGridSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-text-primary">
          Specialist training across three core areas
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
