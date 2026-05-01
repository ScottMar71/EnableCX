"use client";

import type { AnalyticsEventName } from "@/lib/analytics/events";

export function dispatchAnalyticsEvent(eventName: AnalyticsEventName, location: string): void {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("enablecx:analytics", {
      detail: { eventName, location, path: window.location.pathname },
    })
  );
}
