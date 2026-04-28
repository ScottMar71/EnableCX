import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <div className="rounded-lg bg-text-primary p-8 text-white md:p-12">
      <h2 className="text-3xl font-semibold">Ready to improve adoption and team confidence?</h2>
      <p className="mt-4 max-w-2xl text-white/85">
        Book a short discovery call to review your current platform challenges and
        identify a practical training plan.
      </p>
      <Link href="/book-call" className="mt-6 inline-flex">
        <Button className="bg-white text-text-primary hover:bg-slate-200">
          Book a Discovery Call
        </Button>
      </Link>
    </div>
  );
}
