import { Accordion } from "@/components/ui/accordion";
import { servicesPageFaqs } from "@/content/services-page-faqs";

export function FAQSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold text-text-primary">Frequently asked questions</h2>
      <Accordion items={servicesPageFaqs} />
    </div>
  );
}
