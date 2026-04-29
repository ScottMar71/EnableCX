import { cloneElement, type ButtonHTMLAttributes, type ReactElement } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-[#0AA09B] bg-[#0AA09B] text-text-primary shadow-sm hover:border-[#087F7A] hover:bg-[#087F7A] active:border-[#066E6A] active:bg-[#066E6A] focus-visible:outline-[#38BDF8]",
  secondary:
    "border border-border-default bg-bg-elevated text-text-primary hover:border-brand-primary/35 hover:bg-bg-subtle",
  ghost: "border border-transparent bg-transparent text-text-secondary hover:bg-bg-subtle hover:text-text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-[0.01em] transition-all duration-200 ease-out motion-safe:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (asChild) {
    const child = children as ReactElement<{ className?: string }>;
    return cloneElement(child, {
      ...props,
      className: cn(classes, child.props.className),
    });
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
