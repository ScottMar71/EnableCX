import type { ConsentCategory } from "@/lib/consent/types";
import { readConsentState } from "@/lib/consent/storage";

type NonEssentialConsentCategory = Exclude<ConsentCategory, "essential">;

export function runWithConsent(
  category: NonEssentialConsentCategory,
  effect: () => void
): void {
  if (typeof window === "undefined") return;

  const state = readConsentState();
  if (!state.hasMadeChoice) return;
  if (!state.preferences[category]) return;

  effect();
}
