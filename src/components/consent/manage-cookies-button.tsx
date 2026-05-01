"use client";

import { Button } from "@/components/ui/button";
import { openCookiePreferences } from "@/components/consent/consent-provider";

export function ManageCookiesButton() {
  return (
    <Button
      type="button"
      variant="ghost"
      size="md"
      onClick={openCookiePreferences}
      className="h-auto min-h-0 w-full justify-start rounded-none px-0 py-0 text-left text-sm font-normal tracking-normal shadow-none hover:translate-y-0 hover:bg-transparent active:translate-y-0"
    >
      Manage Cookies
    </Button>
  );
}
