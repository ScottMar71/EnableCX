import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <div className="grid gap-10 py-16 md:py-24">
      <div className="space-y-6">
        <Badge>SaaS | CCaaS | UCaaS</Badge>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-text-primary md:text-5xl">
          Training that drives adoption across SaaS, CCaaS, and UCaaS.
        </h1>
        <p className="prose-shell text-lg text-text-secondary">
          EnableCX helps businesses train teams, improve platform adoption, and
          create more consistent customer experiences.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="/book-call">
          <Button size="lg">Book a Call</Button>
        </Link>
        <Link href="/services">
          <Button variant="secondary" size="lg">
            Explore Services
          </Button>
        </Link>
      </div>
    </div>
  );
}
