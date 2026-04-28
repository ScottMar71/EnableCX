const steps = [
  { title: "Assess", description: "Map your platform goals, user groups, and adoption risks." },
  { title: "Design", description: "Build role-based training around real workflows and scenarios." },
  { title: "Deliver", description: "Run practical sessions that move teams from theory to execution." },
  { title: "Reinforce", description: "Track adoption and close remaining gaps with targeted follow-up." },
];

export function ProcessSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-text-primary">
          A structured delivery model
        </h2>
        <p className="prose-shell text-text-secondary">
          We run each engagement with a clear sequence so your teams adopt faster
          and sustain results after rollout.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-md border border-border-default bg-white p-5"
          >
            <p className="text-sm font-semibold text-brand-primary">{step.title}</p>
            <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
