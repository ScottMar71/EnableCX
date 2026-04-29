import { Card } from "@/components/ui/card";
import { ArrowUpRight, ChartNoAxesCombined, Smile, TimerReset } from "lucide-react";

const outcomes = [
  { label: "Faster onboarding to independent performance", icon: TimerReset },
  { label: "Higher confidence across frontline and admin teams", icon: Smile },
  { label: "Consistent workflows and service standards", icon: ChartNoAxesCombined },
  { label: "Stronger ROI from platform investment", icon: ArrowUpRight },
];

export function OutcomesSection() {
  return (
    <div className="space-y-8 rounded-lg border border-border-default bg-bg-elevated p-8 shadow-[var(--shadow-sm)]">
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold text-text-primary">
          Outcomes your leadership team should expect
        </h2>
        <p className="prose-shell text-pretty text-text-secondary">
          Every programme is tied to operational goals so progress can be measured
          in adoption, consistency, and performance, not attendance alone.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {outcomes.map((item) => (
          <Card key={item.label} variant="metric" className="border-brand-accent/20">
            <p className="inline-flex items-center gap-2 font-medium text-text-primary">
              <item.icon className="h-4 w-4 text-brand-accent" aria-hidden />
              {item.label}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
