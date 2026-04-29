"use client";

import { Button } from "@/components/ui/button";
import { openCookiePreferences } from "@/components/consent/consent-provider";

export function ManageCookiesButton() {
  return (
    <Button type="button" variant="ghost" size="md" onClick={openCookiePreferences}>
      Manage Cookies
    </Button>
  );
}
