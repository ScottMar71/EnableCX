export type ConsentCategory = "essential" | "analytics" | "marketing";

export type ConsentPreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = {
  preferences: ConsentPreferences;
  hasMadeChoice: boolean;
  updatedAt: string;
};

export const defaultConsentPreferences: ConsentPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export const defaultConsentState: ConsentState = {
  preferences: defaultConsentPreferences,
  hasMadeChoice: false,
  updatedAt: "",
};
