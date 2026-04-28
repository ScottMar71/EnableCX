const steps = [
  { title: "Assess", description: "Review platform, users, and adoption gaps." },
  { title: "Design", description: "Tailor role-based training to real workflows." },
  { title: "Deliver", description: "Run focused sessions that are practical and applied." },
  { title: "Reinforce", description: "Provide follow-up support for long-term adoption." },
];

export function ProcessSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-text-primary">
          A practical enablement approach
        </h2>
        <p className="prose-shell text-text-secondary">
          We structure each engagement to improve confidence, consistency, and
          measurable adoption outcomes.
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
