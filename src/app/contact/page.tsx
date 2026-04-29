import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/form-field";
import { Select } from "@/components/ui/select";
import { submitContactLead } from "@/lib/actions/leads";
import { MessageSquareMore, ShieldCheck } from "lucide-react";

type ContactPageProps = {
  searchParams: Promise<{ submitted?: string; error?: string }>;
};

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EnableCX for help with SaaS, CCaaS, and UCaaS training programmes that improve adoption, consistency, and customer outcomes.",
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const submitted = params.submitted === "1";
  const hasError = Boolean(params.error);

  return (
    <SectionShell>
      <PageIntro
        title="Contact"
        description="Need support with SaaS, CCaaS, or UCaaS training? Send us a message."
      />
      <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-border-default bg-bg-elevated px-3 py-1.5 text-xs font-semibold text-brand-primary">
        <MessageSquareMore className="h-3.5 w-3.5" aria-hidden />
        We respond within one business day
      </p>
      {submitted ? (
        <p
          role="status"
          aria-live="polite"
          className="mt-8 rounded-md border border-state-success/30 bg-green-50 px-4 py-3 text-sm text-state-success"
        >
          Thanks, we have received your message and will reply within one business day.
        </p>
      ) : null}
      {hasError ? (
        <p
          role="alert"
          aria-live="assertive"
          className="mt-8 rounded-md border border-state-error/30 bg-red-50 px-4 py-3 text-sm text-state-error"
        >
          We could not submit your message. Please review required fields and try again.
        </p>
      ) : null}
      <form
        action={submitContactLead}
        className="mt-10 grid max-w-2xl gap-5 rounded-lg border border-border-default bg-bg-elevated p-6 shadow-[var(--shadow-sm)]"
      >
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <FormField id="name" label="Name" required hint="Enter your full name.">
          <Input id="name" name="name" placeholder="Jane Smith" required />
        </FormField>
        <FormField id="email" label="Email" required hint="Use a monitored email address.">
          <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
        </FormField>
        <FormField id="company" label="Company" required>
          <Input id="company" name="company" placeholder="EnableCX Ltd" required />
        </FormField>
        <FormField id="service_interest" label="Service Interest">
          <Select id="service_interest" name="service_interest">
            <option value="SaaS Training">SaaS Training</option>
            <option value="CCaaS Training">CCaaS Training</option>
            <option value="UCaaS Training">UCaaS Training</option>
            <option value="General Inquiry">General Inquiry</option>
          </Select>
        </FormField>
        <FormField
          id="message"
          label="Message"
          required
          hint="Include your platform, team size, and desired outcomes."
        >
          <Textarea id="message" name="message" required />
        </FormField>
        <Button type="submit" className="w-fit">
          Send Message
        </Button>
        <p className="inline-flex items-center gap-2 text-xs text-text-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-brand-primary" aria-hidden />
          Your details are used only to respond to this enquiry.
        </p>
      </form>
    </SectionShell>
  );
}
