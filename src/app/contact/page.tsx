import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/form-field";
import { Select } from "@/components/ui/select";
import { submitContactLead } from "@/lib/actions/leads";

type ContactPageProps = {
  searchParams: Promise<{ submitted?: string; error?: string }>;
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
      {submitted ? (
        <p className="mt-8 rounded-md border border-state-success/30 bg-green-50 px-4 py-3 text-sm text-state-success">
          Thanks, we have received your message and will reply within one business day.
        </p>
      ) : null}
      {hasError ? (
        <p className="mt-8 rounded-md border border-state-error/30 bg-red-50 px-4 py-3 text-sm text-state-error">
          We could not submit your message. Please review and try again.
        </p>
      ) : null}
      <form
        action={submitContactLead}
        className="mt-10 grid max-w-2xl gap-5 rounded-md border border-border-default bg-white p-6"
      >
        <FormField id="name" label="Name">
          <Input id="name" name="name" placeholder="Jane Smith" />
        </FormField>
        <FormField id="email" label="Email">
          <Input id="email" name="email" type="email" placeholder="jane@company.com" />
        </FormField>
        <FormField id="company" label="Company">
          <Input id="company" name="company" placeholder="EnableCX Ltd" />
        </FormField>
        <FormField id="service_interest" label="Service Interest">
          <Select id="service_interest" name="service_interest">
            <option value="SaaS Training">SaaS Training</option>
            <option value="CCaaS Training">CCaaS Training</option>
            <option value="UCaaS Training">UCaaS Training</option>
            <option value="General Inquiry">General Inquiry</option>
          </Select>
        </FormField>
        <FormField id="message" label="Message">
          <Textarea id="message" name="message" />
        </FormField>
        <Button type="submit" className="w-fit">
          Send Message
        </Button>
      </form>
    </SectionShell>
  );
}
