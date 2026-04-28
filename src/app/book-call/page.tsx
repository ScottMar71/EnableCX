import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/form-field";

export default function BookCallPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Book a Discovery Call"
        description="Share a few details and we will follow up with the best next step for your team."
      />
      <form className="mt-10 grid max-w-2xl gap-5 rounded-md border border-border-default bg-white p-6">
        <FormField id="name" label="Name">
          <Input id="name" name="name" placeholder="Jane Smith" />
        </FormField>
        <FormField id="email" label="Work Email">
          <Input id="email" name="email" type="email" placeholder="jane@company.com" />
        </FormField>
        <FormField id="interest" label="Service Interest">
          <Select id="interest" name="interest">
            <option>SaaS Training</option>
            <option>CCaaS Training</option>
            <option>UCaaS Training</option>
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
