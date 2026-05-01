import { Card } from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  Handshake,
  Puzzle,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const programmes = [
  {
    title: "Onboarding Programme Design",
    description:
      "Structured onboarding for internal teams that reduces ramp time and builds confidence from day one.",
    icon: BookOpen,
  },
  {
    title: "Client Training Programmes",
    description:
      "Clear, scalable training that helps your customers adopt your platform quickly and effectively.",
    icon: GraduationCap,
  },
  {
    title: "Partner Enablement",
    description:
      "Consistent training frameworks that equip partners to deliver and support your solutions to a high standard.",
    icon: Handshake,
  },
  {
    title: "Training-Led Revenue Strategy",
    description:
      "Consultancy to help you turn training into a commercial asset — improving retention, expansion, and new revenue streams.",
    icon: TrendingUp,
  },
  {
    title: "Bespoke Training Solutions",
    description:
      "Tailored programmes built around your systems, workflows, and operational goals.",
    icon: Puzzle,
  },
  {
    title: "AI Training for Every Level",
    description:
      "Practical AI training designed for all roles — from foundational understanding to applied, role-specific use.",
    icon: Sparkles,
  },
] as const;

export function OutcomesSection() {
  return (
    <div className="space-y-8 rounded-lg border border-border-default bg-bg-elevated p-8 shadow-[var(--shadow-sm)]">
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold text-text-primary">
          Programmes & services
        </h2>
        <p className="prose-shell text-pretty text-text-secondary">
          We design and deliver structured training and enablement programmes
          that accelerate adoption, improve performance, and unlock long-term
          value from your platforms.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {programmes.map((item) => (
          <Card
            key={item.title}
            variant="metric"
            className="border-brand-accent/20"
          >
            <div className="space-y-2">
              <h3 className="inline-flex items-start gap-2 text-base font-semibold text-text-primary">
                <item.icon
                  className="mt-0.5 h-4 w-4 shrink-0 text-icon"
                  aria-hidden
                />
                <span>{item.title}</span>
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
