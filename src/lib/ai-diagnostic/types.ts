/** Five assessment pillars with survey weights summing to 1. */
export type DiagnosticDimension =
  | "awareness"
  | "practicalUsage"
  | "businessApplication"
  | "governanceRisk"
  | "adoptionBehaviour";

export const DIMENSION_WEIGHTS: Record<DiagnosticDimension, number> = {
  awareness: 0.2,
  practicalUsage: 0.3,
  businessApplication: 0.3,
  governanceRisk: 0.1,
  adoptionBehaviour: 0.1,
};

export type LikertQuestion = {
  id: string;
  dimension: DiagnosticDimension;
  kind: "likert";
  text: string;
};

export type KnowledgeQuestion = {
  id: string;
  dimension: DiagnosticDimension;
  kind: "knowledge";
  text: string;
  scenarioLead?: string;
  options: { id: string; label: string }[];
  /** Option id */
  correctOptionId: string;
};

export type DiagnosticQuestion = LikertQuestion | KnowledgeQuestion;

export type DiagnosticSection = {
  dimension: DiagnosticDimension;
  title: string;
  shortLabel: string;
  description: string;
  /** Display order matches assessment flow */
  questions: DiagnosticQuestion[];
};

/** Raw answers keyed by question id — likert 1–5 or knowledge option id */
export type DiagnosticAnswers = Record<string, number | string>;

export type MaturityLevel = {
  tier: 1 | 2 | 3 | 4 | 5;
  name: string;
  summary: string;
};

/** Serializable payload suitable for POST to an API later */
export type DiagnosticSubmissionPayload = {
  version: 1;
  completedAt: string;
  answers: DiagnosticAnswers;
  scores: DimensionScores[];
  overallScore: number;
  maturityLevel: MaturityLevel;
  strengths: { dimension: DiagnosticDimension; label: string; combinedScore: number }[];
  gaps: { dimension: DiagnosticDimension; label: string; combinedScore: number }[];
  recommendations: string[];
};

export type DimensionInsight =
  | "overconfident"
  | "untapped_potential"
  | "foundational"
  | "advanced";

export type DimensionScores = {
  dimension: DiagnosticDimension;
  label: string;
  confidenceScore: number;
  capabilityScore: number;
  insight: DimensionInsight;
  insightLabel: string;
  /** Equal blend of normalized confidence % and MCQ % for ranking */
  blendedScore: number;
};
