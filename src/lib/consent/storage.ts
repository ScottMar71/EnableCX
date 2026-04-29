import {
  defaultConsentState,
  type ConsentState,
  type ConsentPreferences,
} from "@/lib/consent/types";

export const CONSENT_STORAGE_KEY = "enablecx_cookie_consent_v1";
export const CONSENT_COOKIE_NAME = "enablecx_cookie_consent";
const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function normalizePreferences(value: unknown): ConsentPreferences {
  if (!value || typeof value !== "object") {
    return { ...defaultConsentState.preferences };
  }

  const candidate = value as Partial<ConsentPreferences>;

  return {
    essential: true,
    analytics: isBoolean(candidate.analytics) ? candidate.analytics : false,
    marketing: isBoolean(candidate.marketing) ? candidate.marketing : false,
  };
}

function normalizeState(value: unknown): ConsentState {
  if (!value || typeof value !== "object") {
    return { ...defaultConsentState };
  }

  const candidate = value as Partial<ConsentState>;

  return {
    preferences: normalizePreferences(candidate.preferences),
    hasMadeChoice: Boolean(candidate.hasMadeChoice),
    updatedAt: typeof candidate.updatedAt === "string" ? candidate.updatedAt : "",
  };
}

export function readConsentState(): ConsentState {
  if (typeof window === "undefined") {
    return { ...defaultConsentState };
  }

  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) {
    return { ...defaultConsentState };
  }

  try {
    return normalizeState(JSON.parse(raw));
  } catch {
    return { ...defaultConsentState };
  }
}

function persistConsentCookie(preferences: ConsentPreferences): void {
  if (typeof document === "undefined") {
    return;
  }

  const value = encodeURIComponent(JSON.stringify(preferences));
  document.cookie =
    `${CONSENT_COOKIE_NAME}=${value}; Path=/; Max-Age=${CONSENT_COOKIE_MAX_AGE}; SameSite=Lax; Secure`;
}

export function persistConsentState(state: ConsentState): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload: ConsentState = {
    ...state,
    preferences: {
      essential: true,
      analytics: state.preferences.analytics,
      marketing: state.preferences.marketing,
    },
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
  persistConsentCookie(payload.preferences);
}
