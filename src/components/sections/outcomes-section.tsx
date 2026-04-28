import { Card } from "@/components/ui/card";

const outcomes = [
  "Faster user ramp-up",
  "Higher platform confidence",
  "More consistent workflows",
  "Better return on platform investment",
];

export function OutcomesSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-text-primary">
          What better training should achieve
        </h2>
        <p className="prose-shell text-text-secondary">
          Our engagement model focuses on measurable operational outcomes, not
          generic training sessions.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {outcomes.map((item) => (
          <Card key={item} variant="metric">
            <p className="font-medium text-text-primary">{item}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
