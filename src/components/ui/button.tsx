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
    "bg-brand-primary text-white hover:bg-brand-primary-hover focus-visible:outline-brand-primary",
  secondary:
    "border border-border-default bg-white text-text-primary hover:bg-bg-subtle",
  ghost: "bg-transparent text-text-primary hover:bg-bg-subtle",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
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
    "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60",
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
