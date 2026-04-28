import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/form-field";
import { submitBookCallLead } from "@/lib/actions/leads";

type BookCallPageProps = {
  searchParams: Promise<{ submitted?: string; error?: string }>;
};

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description:
    "Book a short EnableCX discovery call to assess your SaaS, CCaaS, or UCaaS adoption challenges and define a practical training plan.",
};

export default async function BookCallPage({ searchParams }: BookCallPageProps) {
  const params = await searchParams;
  const submitted = params.submitted === "1";
  const hasError = Boolean(params.error);

  return (
    <SectionShell>
      <PageIntro
        title="Book a Discovery Call"
        description="Share a few details and we will follow up with the best next step for your team."
      />
      {submitted ? (
        <p
          role="status"
          aria-live="polite"
          className="mt-8 rounded-md border border-state-success/30 bg-green-50 px-4 py-3 text-sm text-state-success"
        >
          Thanks, your request has been submitted. We will contact you shortly.
        </p>
      ) : null}
      {hasError ? (
        <p
          role="alert"
          aria-live="assertive"
          className="mt-8 rounded-md border border-state-error/30 bg-red-50 px-4 py-3 text-sm text-state-error"
        >
          Something went wrong. Please review the required fields and try again.
        </p>
      ) : null}
      <form
        action={submitBookCallLead}
        className="mt-10 grid max-w-2xl gap-5 rounded-md border border-border-default bg-white p-6"
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
        <FormField id="email" label="Work Email" required hint="Use your work email address.">
          <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
        </FormField>
        <FormField id="company" label="Company" required>
          <Input id="company" name="company" placeholder="EnableCX Ltd" required />
        </FormField>
        <FormField id="team_size" label="Team Size">
          <Input id="team_size" name="team_size" placeholder="20-50" />
        </FormField>
        <FormField id="interest" label="Service Interest" required>
          <Select id="interest" name="service_interest" required>
            <option value="SaaS Training">SaaS Training</option>
            <option value="CCaaS Training">CCaaS Training</option>
            <option value="UCaaS Training">UCaaS Training</option>
          </Select>
        </FormField>
        <FormField
          id="message"
          label="What challenge are you solving?"
          required
          hint="Share your current blockers, goals, and timeline."
        >
          <Textarea id="message" name="message" required />
        </FormField>
        <Button type="submit" className="w-fit">
          Submit Request
        </Button>
      </form>
    </SectionShell>
  );
}
