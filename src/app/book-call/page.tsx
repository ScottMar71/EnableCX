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
        <p className="mt-8 rounded-md border border-state-success/30 bg-green-50 px-4 py-3 text-sm text-state-success">
          Thanks, your request has been submitted. We will contact you shortly.
        </p>
      ) : null}
      {hasError ? (
        <p className="mt-8 rounded-md border border-state-error/30 bg-red-50 px-4 py-3 text-sm text-state-error">
          Something went wrong. Please check your details and try again.
        </p>
      ) : null}
      <form
        action={submitBookCallLead}
        className="mt-10 grid max-w-2xl gap-5 rounded-md border border-border-default bg-white p-6"
      >
        <FormField id="name" label="Name">
          <Input id="name" name="name" placeholder="Jane Smith" />
        </FormField>
        <FormField id="email" label="Work Email">
          <Input id="email" name="email" type="email" placeholder="jane@company.com" />
        </FormField>
        <FormField id="company" label="Company">
          <Input id="company" name="company" placeholder="EnableCX Ltd" />
        </FormField>
        <FormField id="team_size" label="Team Size">
          <Input id="team_size" name="team_size" placeholder="20-50" />
        </FormField>
        <FormField id="interest" label="Service Interest">
          <Select id="interest" name="service_interest">
            <option value="SaaS Training">SaaS Training</option>
            <option value="CCaaS Training">CCaaS Training</option>
            <option value="UCaaS Training">UCaaS Training</option>
          </Select>
        </FormField>
        <FormField id="message" label="What challenge are you solving?">
          <Textarea id="message" name="message" />
        </FormField>
        <Button type="submit" className="w-fit">
          Submit Request
        </Button>
      </form>
    </SectionShell>
  );
}
