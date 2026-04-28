"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(160).optional(),
  teamSize: z.string().trim().max(64).optional(),
  serviceInterest: z.string().trim().max(80).optional(),
  message: z.string().trim().min(8).max(4000),
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

type SubmitLeadConfig = {
  sourcePage: "/book-call" | "/contact";
};

async function submitLead(formData: FormData, { sourcePage }: SubmitLeadConfig) {
  const successPath = `${sourcePage}?submitted=1`;
  const validationErrorPath = `${sourcePage}?error=validation`;
  const saveErrorPath = `${sourcePage}?error=save`;

  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    redirect(successPath);
  }

  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    teamSize: formData.get("team_size"),
    serviceInterest: formData.get("service_interest"),
    message: formData.get("message"),
    sourcePage,
  });

  if (!parsed.success) {
    redirect(validationErrorPath);
  }

  try {
    await insertLead(parsed.data);
  } catch {
    redirect(saveErrorPath);
  }

  redirect(successPath);
}

export async function submitBookCallLead(formData: FormData) {
  return submitLead(formData, { sourcePage: "/book-call" });
}

export async function submitContactLead(formData: FormData) {
  return submitLead(formData, { sourcePage: "/contact" });
}
