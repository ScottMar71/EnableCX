import { DIAGNOSTIC_SECTIONS } from "./questions";
import {
  DIMENSION_WEIGHTS,
  type DiagnosticAnswers,
  type DiagnosticDimension,
  type DimensionInsight,
  type DimensionScores,
  type KnowledgeQuestion,
  type LikertQuestion,
  type MaturityLevel,
} from "./types";

/** Map Likert mean (1–5) to comparable 0–100 scale */
export function likertMeanToConfidencePct(mean: number): number {
  if (!Number.isFinite(mean)) return 0;
  const clamped = Math.min(5, Math.max(1, mean));
  return ((clamped - 1) / 4) * 100;
}

export function knowledgePct(correctCount: number, total: number): number {
  if (total <= 0) return 0;
  return (correctCount / total) * 100;
}

function insightLabel(insight: DimensionInsight): string {
  switch (insight) {
    case "overconfident":
      return "Overconfident — training needed";
    case "untapped_potential":
      return "Untapped potential";
    case "foundational":
      return "Foundational training needed";
    case "advanced":
      return "Advanced user";
  }
}

/** High band starts at this inclusive threshold on the 0–100 scale */
const HIGH_BAND = 60;

function quadrantInsight(confidencePct: number, capabilityPct: number): DimensionInsight {
  const hc = confidencePct >= HIGH_BAND;
  const hk = capabilityPct >= HIGH_BAND;
  if (hc && !hk) return "overconfident";
  if (!hc && hk) return "untapped_potential";
  if (!hc && !hk) return "foundational";
  return "advanced";
}

export function maturityFromOverall(score: number): MaturityLevel {
  const clamped = Math.min(100, Math.max(0, score));
  if (clamped <= 20) {
    return {
      tier: 1,
      name: "Level 1 · Awareness",
      summary:
        "Early-stage AI literacy—you are forming a baseline vocabulary and spotting where tools might help. Priority is structured learning and supervised practice.",
    };
  }
  if (clamped <= 40) {
    return {
      tier: 2,
      name: "Level 2 · Experimenter",
      summary:
        "Comfortable experimenting with guidance—next step is repeatable prompting habits, tighter review rituals, and small pilots grounded in measurable outcomes.",
    };
  }
  if (clamped <= 60) {
    return {
      tier: 3,
      name: "Level 3 · Practitioner",
      summary:
        "Consistent practitioner—you use AI thoughtfully in scoped workflows and understand common failure modes. Strengthen stakeholder alignment and governance touchpoints.",
    };
  }
  if (clamped <= 80) {
    return {
      tier: 4,
      name: "Level 4 · Advanced",
      summary:
        "Advanced operator—you balance speed, verification, and business risk. Multiply impact through playbooks, coaching others, and formalising reusable patterns.",
    };
  }
  return {
    tier: 5,
    name: "Level 5 · Leader",
    summary:
      "Leader-calibre—you model responsible acceleration, steer adoption at scale, and connect AI use to organisational controls and measurable uplift.",
  };
}

/** Blend within a dimension (equal emphasis on reflective confidence vs demonstrated MCQ correctness) */
function blended(confidencePct: number, capabilityPct: number): number {
  return (confidencePct + capabilityPct) / 2;
}

/**
 * Overall diagnostic score — weighted blend of dimension-level blended scores using pillar weights from the brief.
 */
export function computeOverallScore(dimensionScores: DimensionScores[]): number {
  let total = 0;
  for (const d of dimensionScores) {
    const w = DIMENSION_WEIGHTS[d.dimension];
    total += w * d.blendedScore;
  }
  return Math.round(total * 10) / 10;
}

function partitionQuestions(dimension: DiagnosticDimension) {
  const section = DIAGNOSTIC_SECTIONS.find((s) => s.dimension === dimension);
  if (!section) {
    throw new Error(`Missing section for dimension ${dimension}`);
  }
  const likert = section.questions.filter((q): q is LikertQuestion => q.kind === "likert");
  const knowledge = section.questions.filter((q): q is KnowledgeQuestion => q.kind === "knowledge");
  return { section, likert, knowledge };
}

export function scoreDimension(dimension: DiagnosticDimension, answers: DiagnosticAnswers): DimensionScores {
  const { section, likert, knowledge } = partitionQuestions(dimension);

  const likertVals = likert.map((q) => {
    const v = answers[q.id];
    return typeof v === "number" && Number.isFinite(v) ? v : NaN;
  });
  const mean =
    likertVals.every((x) => !Number.isNaN(x))
      ? likertVals.reduce((a, b) => a + b, 0) / likertVals.length
      : NaN;

  let correct = 0;
  for (const q of knowledge) {
    const chosen = answers[q.id];
    if (typeof chosen === "string" && chosen === q.correctOptionId) correct += 1;
  }

  const confidenceScore = Number.isFinite(mean) ? Math.round(likertMeanToConfidencePct(mean) * 10) / 10 : 0;
  const capabilityScore = Math.round(knowledgePct(correct, knowledge.length) * 10) / 10;

  const insight = quadrantInsight(confidenceScore, capabilityScore);
  return {
    dimension,
    label: section.shortLabel,
    confidenceScore,
    capabilityScore,
    insight,
    insightLabel: insightLabel(insight),
    blendedScore: Math.round(blended(confidenceScore, capabilityScore) * 10) / 10,
  };
}

export function scoreAllDimensions(answers: DiagnosticAnswers): DimensionScores[] {
  const keys = Object.keys(DIMENSION_WEIGHTS) as DiagnosticDimension[];
  return keys.map((dim) => scoreDimension(dim, answers));
}

export function validateCompleteAnswers(
  answers: DiagnosticAnswers,
): answers is DiagnosticAnswers & Record<string, number | string> {
  const all = DIAGNOSTIC_SECTIONS.flatMap((s) => s.questions);
  if (all.length !== 25) return false;

  for (const q of all) {
    const v = answers[q.id];
    if (v === undefined || v === null) return false;
    if (q.kind === "likert") {
      if (typeof v !== "number" || !Number.isInteger(v)) return false;
      if (v < 1 || v > 5) return false;
    } else if (typeof v !== "string" || !q.options.some((o) => o.id === v)) return false;
  }

  return true;
}
