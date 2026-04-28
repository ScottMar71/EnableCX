"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { type AnalyticsEventName } from "@/lib/analytics/events";

type TrackedLinkProps = {
  href: string;
  eventName: AnalyticsEventName;
  location: string;
  className?: string;
  children: ReactNode;
};

export function TrackedLink({
  href,
  eventName,
  location,
  className,
  children,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (typeof window === "undefined") return;

        window.dispatchEvent(
          new CustomEvent("enablecx:analytics", {
            detail: { eventName, location, path: window.location.pathname },
          })
        );
      }}
    >
      {children}
    </Link>
  );
}
