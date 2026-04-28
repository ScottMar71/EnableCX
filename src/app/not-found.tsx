import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <SectionShell>
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold text-text-primary">Page not found</h1>
        <p className="text-text-secondary">
          The page you requested does not exist. Return to the homepage to continue.
        </p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </SectionShell>
  );
}
