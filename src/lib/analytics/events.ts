export const analyticsEvents = {
  ctaClickBookCall: "cta_click_book_call",
  schedulerView: "scheduler_view",
  schedulerSubmit: "scheduler_submit",
  contactFormSubmit: "contact_form_submit",
  serviceCardClick: "service_card_click",
  caseStudyClick: "case_study_click",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];
