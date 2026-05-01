import { Compass, ListChecks, Rocket, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Assess",
    description: "Map your platform goals, user groups, and adoption risks.",
    icon: ListChecks,
  },
  {
    title: "Design",
    description: "Build role-based training around real workflows and scenarios.",
    icon: Compass,
  },
  {
    title: "Deliver",
    description: "Run practical sessions that move teams from theory to execution.",
    icon: Rocket,
  },
  {
    title: "Reinforce",
    description: "Track adoption and close remaining gaps with targeted follow-up.",
    icon: ShieldCheck,
  },
];

export function ProcessSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold text-text-primary">
          A structured delivery model
        </h2>
        <p className="prose-shell text-pretty text-text-secondary">
          We run each engagement with a clear sequence so your teams adopt faster
          and sustain results after rollout.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-md border border-border-default bg-bg-elevated p-5 shadow-[var(--shadow-sm)]"
          >
            <p className="text-center text-sm font-semibold text-brand-primary">{step.title}</p>
            <div className="mt-3 flex justify-center">
              <step.icon className="h-8 w-8 text-icon" aria-hidden />
            </div>
            <p className="mt-3 text-center text-sm text-text-secondary">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
