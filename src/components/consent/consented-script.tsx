"use client";

import Script, { type ScriptProps } from "next/script";
import { useConsent } from "@/components/consent/consent-provider";

type ConsentedScriptProps = Omit<ScriptProps, "strategy"> & {
  category: "analytics" | "marketing";
  strategy?: ScriptProps["strategy"];
};

export function ConsentedScript({
  category,
  strategy = "afterInteractive",
  ...props
}: ConsentedScriptProps) {
  const { canLoad } = useConsent();

  if (!canLoad(category)) {
    return null;
  }

  return <Script {...props} strategy={strategy} />;
}
