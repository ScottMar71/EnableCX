import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  subtle?: boolean;
};

export function SectionShell({ children, className, subtle }: SectionShellProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        subtle ? "bg-bg-subtle" : "bg-bg-base",
        className
      )}
    >
      <div className="container-shell">{children}</div>
    </section>
  );
}
