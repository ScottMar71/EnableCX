"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  teamSize: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(8),
  sourcePage: z.string().min(1),
});

type LeadInput = z.infer<typeof leadSchema>;

async function insertLead(input: LeadInput) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("leads").insert({
    name: input.name,
    email: input.email,
    company: input.company ?? null,
    team_size: input.teamSize ?? null,
    service_interest: input.serviceInterest ?? null,
    message: input.message,
    source_page: input.sourcePage,
    status: "new",
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function submitBookCallLead(formData: FormData) {
  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    teamSize: formData.get("team_size"),
    serviceInterest: formData.get("service_interest"),
    message: formData.get("message"),
    sourcePage: "/book-call",
  });

  if (!parsed.success) {
    redirect("/book-call?error=validation");
  }

  try {
    await insertLead(parsed.data);
  } catch {
    redirect("/book-call?error=save");
  }

  redirect("/book-call?submitted=1");
}

export async function submitContactLead(formData: FormData) {
  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    teamSize: formData.get("team_size"),
    serviceInterest: formData.get("service_interest"),
    message: formData.get("message"),
    sourcePage: "/contact",
  });

  if (!parsed.success) {
    redirect("/contact?error=validation");
  }

  try {
    await insertLead(parsed.data);
  } catch {
    redirect("/contact?error=save");
  }

  redirect("/contact?submitted=1");
}
