import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
};

export function FormField({ id, label, hint, error, required = false, children }: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;
  const fieldControl = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        "aria-describedby": describedBy,
        "aria-invalid": Boolean(error) || undefined,
      })
    : children;

  return (
    <div className="space-y-2.5">
      <label htmlFor={id} className="text-sm font-semibold text-text-primary">
        {label}
        {required ? (
          <span className="ml-1 text-state-error" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      <div>{fieldControl}</div>
      {error ? (
        <p id={errorId} className="text-xs text-state-error">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-xs text-text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
