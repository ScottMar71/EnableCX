import { Card } from "@/components/ui/card";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { analyticsEvents } from "@/lib/analytics/events";

const audiencePaths = [
  {
    title: "For Contact Centers",
    description:
      "Improve handling consistency, QA alignment, and channel performance across frontline teams.",
    href: "/services/ccaas-training",
  },
  {
    title: "For IT and Operations",
    description:
      "Reduce rollout friction and drive platform usage with structured onboarding and workflow standards.",
    href: "/services/ucaas-training",
  },
  {
    title: "For CX and Service Leaders",
    description:
      "Increase adoption, team confidence, and measurable outcomes from SaaS, CCaaS, and UCaaS investments.",
    href: "/services/saas-training",
  },
];

export function AudiencePathwaysSection() {
  return (
    <div id="audience-pathways" className="space-y-8 scroll-mt-28">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-text-primary">Choose your pathway</h2>
        <p className="prose-shell text-text-secondary">
          Different teams have different adoption challenges. Start with the pathway that matches
          your role and priorities.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {audiencePaths.map((path) => (
          <TrackedLink
            key={path.title}
            href={path.href}
            eventName={analyticsEvents.audiencePathClick}
            location="audience_pathways"
          >
            <Card className="h-full transition-colors hover:border-brand-primary">
              <h3 className="text-lg font-semibold text-text-primary">{path.title}</h3>
              <p className="mt-3 text-sm text-text-secondary">{path.description}</p>
            </Card>
          </TrackedLink>
        ))}
      </div>
    </div>
  );
}
