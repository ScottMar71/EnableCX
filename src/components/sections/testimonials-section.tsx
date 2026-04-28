import { Card } from "@/components/ui/card";

const testimonials = [
  "EnableCX understood our workflows quickly and delivered training that raised confidence in week one.",
  "The sessions were practical and immediately improved consistency across customer teams.",
];

export function TestimonialsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold text-text-primary">What clients value</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((quote) => (
          <Card key={quote} variant="testimonial">
            <p className="text-sm text-text-secondary">&ldquo;{quote}&rdquo;</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
