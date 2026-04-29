import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "service" | "testimonial" | "case-study" | "metric";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

const cardVariantClasses: Record<CardVariant, string> = {
  service: "bg-bg-elevated",
  testimonial: "bg-bg-elevated",
  "case-study": "bg-bg-elevated",
  metric: "bg-brand-accent-soft/40",
};

export function Card({ className, variant = "service", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border-default p-6 shadow-[var(--shadow-sm)] transition-all duration-200 ease-out",
        cardVariantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
