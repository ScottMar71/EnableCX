const painPoints = [
  "Low adoption after go-live",
  "Inconsistent customer handling across teams",
  "Long ramp times for new hires",
  "Underused features in high-cost platforms",
];

export function PainPointsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-text-primary">
        Most rollout issues are people and process issues
      </h2>
      <p className="prose-shell text-text-secondary">
        Buying the right platform is only step one. Without structured enablement,
        teams revert to old habits, service quality varies, and value realisation slows.
      </p>
      <ul className="grid gap-3 md:grid-cols-2">
        {painPoints.map((point) => (
          <li
            key={point}
            className="rounded-md border border-border-default bg-white px-4 py-3 text-sm text-text-secondary"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
