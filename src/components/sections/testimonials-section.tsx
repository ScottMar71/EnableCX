import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "EnableCX understood our operating model quickly and delivered role-based training that raised team confidence from week one.",
    author: "Head of Customer Operations",
    company: "Mid-market B2B SaaS provider",
  },
  {
    quote:
      "The sessions were practical and directly improved workflow consistency across support and service teams.",
    author: "Contact Centre Manager",
    company: "UK Financial Services team",
  },
];

export function TestimonialsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold text-text-primary">What teams say after delivery</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.quote} variant="testimonial">
            <p className="text-sm text-text-secondary">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-text-primary">
              {testimonial.author}
            </p>
            <p className="text-xs text-text-muted">{testimonial.company}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
