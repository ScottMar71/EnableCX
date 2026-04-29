import { AlertTriangle, ArrowRightLeft, Clock3, TrendingDown } from "lucide-react";

const painPoints = [
  { label: "Low adoption after go-live", icon: TrendingDown },
  { label: "Inconsistent customer handling across teams", icon: ArrowRightLeft },
  { label: "Long ramp times for new hires", icon: Clock3 },
  { label: "Underused features in high-cost platforms", icon: AlertTriangle },
];

export function PainPointsSection() {
  return (
    <div className="space-y-7">
      <h2 className="text-balance text-3xl font-semibold text-text-primary">
        Rollout challenges are human, not technical
      </h2>
      <p className="prose-shell text-pretty text-text-secondary">
        Most rollout issues aren&apos;t rooted in the technology itself - they&apos;re
        driven by gaps in people readiness and process design.{" "}
        Selecting the right platform is only the first milestone. Without deliberate,
        structured enablement, teams tend to default back to familiar behaviours,
        undermining consistency and limiting the impact of new capabilities. Workflows
        become fragmented, service quality varies across teams and regions, and the
        organisation struggles to operationalise best practices at scale. As a result,
        the path to value realisation becomes slower, less predictable, and heavily
        dependent on individual effort rather than embedded, repeatable processes.
      </p>
      <ul className="grid gap-3 md:grid-cols-2">
        {painPoints.map((point) => (
          <li
            key={point.label}
            className="inline-flex items-start gap-2 rounded-md border border-border-default bg-bg-elevated px-4 py-3 text-sm text-text-secondary shadow-[var(--shadow-sm)]"
          >
            <point.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
            {point.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
