const painPoints = [
  "Low adoption after implementation",
  "Inconsistent workflows across teams",
  "Slow ramp time for new users",
  "Reduced impact from expensive platforms",
];

export function PainPointsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-text-primary">
        The technology is only half the investment
      </h2>
      <p className="prose-shell text-text-secondary">
        Many teams buy powerful platforms but struggle to turn rollout into
        confident day-to-day usage. Training closes that gap.
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
