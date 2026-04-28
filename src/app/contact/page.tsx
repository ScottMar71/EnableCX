import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/layout/section-shell";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/form-field";

export default function ContactPage() {
  return (
    <SectionShell>
      <PageIntro
        title="Contact"
        description="Need support with SaaS, CCaaS, or UCaaS training? Send us a message."
      />
      <form className="mt-10 grid max-w-2xl gap-5 rounded-md border border-border-default bg-white p-6">
        <FormField id="name" label="Name">
          <Input id="name" name="name" placeholder="Jane Smith" />
        </FormField>
        <FormField id="email" label="Email">
          <Input id="email" name="email" type="email" placeholder="jane@company.com" />
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
