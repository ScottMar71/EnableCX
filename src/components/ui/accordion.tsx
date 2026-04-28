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
          className="rounded-md border border-border-default bg-white p-4"
        >
          <summary className="cursor-pointer list-none pr-8 font-medium text-text-primary">
            {item.question}
          </summary>
          <p className="mt-3 text-sm text-text-secondary">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
