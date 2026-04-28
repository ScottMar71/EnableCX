import { Card } from "@/components/ui/card";

const outcomes = [
  "Faster onboarding to independent performance",
  "Higher confidence across frontline and admin teams",
  "Consistent workflows and service standards",
  "Stronger ROI from platform investment",
];

export function OutcomesSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-text-primary">
          Outcomes your leadership team should expect
        </h2>
        <p className="prose-shell text-text-secondary">
          Every programme is tied to operational goals so progress can be measured
          in adoption, consistency, and performance, not attendance alone.
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
