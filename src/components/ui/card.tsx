import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "service" | "testimonial" | "case-study" | "metric";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

const cardVariantClasses: Record<CardVariant, string> = {
  service: "bg-white",
  testimonial: "bg-white",
  "case-study": "bg-white",
  metric: "bg-bg-subtle",
};

export function Card({ className, variant = "service", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-border-default p-6 shadow-sm",
        cardVariantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
