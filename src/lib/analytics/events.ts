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
  calculatorOpen: "calculator_open",
  calculatorView: "calculator_view",
  calculatorEngaged: "calculator_engaged",
  trainingPlanGeneratorOpen: "training_plan_generator_open",
  trainingPlanGeneratorView: "training_plan_generator_view",
  trainingPlanGeneratorEngaged: "training_plan_generator_engaged",
  trainingPlanGeneratorCopied: "training_plan_generator_copied",
  trainingPlanGeneratorPrint: "training_plan_generator_print",
  aiDiagnosticOpen: "ai_diagnostic_open",
  aiDiagnosticView: "ai_diagnostic_view",
  aiDiagnosticEngaged: "ai_diagnostic_engaged",
  aiDiagnosticComplete: "ai_diagnostic_complete",
  ctaClickContact: "cta_click_contact",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];
