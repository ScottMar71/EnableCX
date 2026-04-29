"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultConsentState,
  type ConsentCategory,
  type ConsentPreferences,
  type ConsentState,
} from "@/lib/consent/types";
import { persistConsentState, readConsentState } from "@/lib/consent/storage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const OPEN_PREFERENCES_EVENT = "enablecx:open-cookie-preferences";
const CONSENT_UPDATED_EVENT = "enablecx:consent-updated";

type ConsentContextValue = {
  consentState: ConsentState;
  canLoad: (category: Exclude<ConsentCategory, "essential">) => boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (preferences: Pick<ConsentPreferences, "analytics" | "marketing">) => void;
  openPreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function dispatchConsentUpdated(state: ConsentState): void {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent(CONSENT_UPDATED_EVENT, {
      detail: state,
    })
  );
}

function getUpdatedState(preferences: ConsentPreferences): ConsentState {
  return {
    preferences,
    hasMadeChoice: true,
    updatedAt: new Date().toISOString(),
  };
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consentState, setConsentState] = useState<ConsentState>(defaultConsentState);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setConsentState(readConsentState());
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => setIsPreferencesOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  const updateConsent = (state: ConsentState) => {
    setConsentState(state);
    persistConsentState(state);
    dispatchConsentUpdated(state);
    setIsPreferencesOpen(false);
  };

  const contextValue = useMemo<ConsentContextValue>(
    () => ({
      consentState,
      canLoad: (category) => consentState.preferences[category],
      acceptAll: () =>
        updateConsent(
          getUpdatedState({
            essential: true,
            analytics: true,
            marketing: true,
          })
        ),
      rejectNonEssential: () =>
        updateConsent(
          getUpdatedState({
            essential: true,
            analytics: false,
            marketing: false,
          })
        ),
      savePreferences: ({ analytics, marketing }) =>
        updateConsent(
          getUpdatedState({
            essential: true,
            analytics,
            marketing,
          })
        ),
      openPreferences: () => setIsPreferencesOpen(true),
    }),
    [consentState]
  );

  return (
    <ConsentContext.Provider value={contextValue}>
      {children}
      {!consentState.hasMadeChoice ? (
        <CookieBanner
          onAcceptAll={contextValue.acceptAll}
          onReject={contextValue.rejectNonEssential}
          onOpenPreferences={() => setIsPreferencesOpen(true)}
        />
      ) : null}
      <CookiePreferencesModal
        key={`${consentState.updatedAt}-${isPreferencesOpen ? "open" : "closed"}`}
        isOpen={isPreferencesOpen}
        current={consentState.preferences}
        onClose={() => setIsPreferencesOpen(false)}
        onSave={contextValue.savePreferences}
      />
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return context;
}

function PreferenceToggle({
  checked,
  onChange,
  title,
  description,
  disabled = false,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  title: string;
  description: string;
  disabled?: boolean;
}) {
  return (
    <label
      className={cn(
        "flex items-start justify-between gap-4 rounded-md border border-border-default bg-bg-elevated p-4",
        disabled ? "opacity-80" : "cursor-pointer"
      )}
    >
      <div>
        <p className="font-medium text-text-primary">{title}</p>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 accent-brand-primary"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
      />
    </label>
  );
}

function CookieBanner({
  onAcceptAll,
  onReject,
  onOpenPreferences,
}: {
  onAcceptAll: () => void;
  onReject: () => void;
  onOpenPreferences: () => void;
}) {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-lg border border-border-default bg-bg-elevated p-4 shadow-lg md:inset-x-auto md:right-6 md:max-w-lg">
      <p className="font-semibold text-text-primary">Cookie preferences</p>
      <p className="mt-2 text-sm text-text-secondary">
        We use essential cookies to run the site. Analytics and marketing cookies are optional and
        only enabled after your explicit opt-in.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" size="md" onClick={onAcceptAll}>
          Accept all
        </Button>
        <Button type="button" size="md" variant="secondary" onClick={onReject}>
          Reject non-essential
        </Button>
        <Button type="button" size="md" variant="ghost" onClick={onOpenPreferences}>
          Manage preferences
        </Button>
      </div>
    </div>
  );
}

function CookiePreferencesModal({
  isOpen,
  current,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  current: ConsentPreferences;
  onClose: () => void;
  onSave: (preferences: Pick<ConsentPreferences, "analytics" | "marketing">) => void;
}) {
  const [analytics, setAnalytics] = useState(current.analytics);
  const [marketing, setMarketing] = useState(current.marketing);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4">
      <div className="w-full max-w-xl rounded-lg border border-border-default bg-bg-base p-5 shadow-xl">
        <h2 className="text-lg font-semibold text-text-primary">Manage cookie preferences</h2>
        <p className="mt-2 text-sm text-text-secondary">
          Essential cookies are always active. You can opt in to analytics and marketing cookies at
          any time.
        </p>
        <div className="mt-4 space-y-3">
          <PreferenceToggle
            checked
            disabled
            onChange={() => undefined}
            title="Essential cookies"
            description="Required for core security and functionality. These cannot be disabled."
          />
          <PreferenceToggle
            checked={analytics}
            onChange={setAnalytics}
            title="Analytics cookies"
            description="Help us measure content performance and improve website usability."
          />
          <PreferenceToggle
            checked={marketing}
            onChange={setMarketing}
            title="Marketing cookies"
            description="Used by advertising and remarketing platforms to track campaign outcomes."
          />
        </div>
        <div className="mt-5 flex flex-wrap justify-end gap-2">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={() => onSave({ analytics, marketing })}>
            Save preferences
          </Button>
        </div>
      </div>
    </div>
  );
}

export function openCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
