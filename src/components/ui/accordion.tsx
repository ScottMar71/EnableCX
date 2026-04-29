import { ChevronDown } from "lucide-react";

type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.id}
          className="group rounded-md border border-border-default bg-bg-elevated p-4 shadow-[var(--shadow-sm)] open:border-brand-primary/40"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 pr-1 font-medium text-text-primary marker:hidden">
            <span>{item.question}</span>
            <ChevronDown
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary transition-transform duration-200 group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="mt-3 text-sm text-text-secondary">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
