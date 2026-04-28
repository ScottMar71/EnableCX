export const analyticsEvents = {
  ctaClickBookCall: "cta_click_book_call",
  ctaClickResources: "cta_click_resources",
  ctaClickChecklist: "cta_click_checklist",
  audiencePathClick: "audience_path_click",
  schedulerView: "scheduler_view",
  schedulerSubmit: "scheduler_submit",
  contactFormSubmit: "contact_form_submit",
  serviceCardClick: "service_card_click",
  caseStudyClick: "case_study_click",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];
