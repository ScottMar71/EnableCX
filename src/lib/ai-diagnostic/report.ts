import {
  computeOverallScore,
  maturityFromOverall,
  scoreAllDimensions,
  validateCompleteAnswers,
} from "./scoring";
import type {
  DiagnosticAnswers,
  DiagnosticSubmissionPayload,
  DimensionScores,
  DiagnosticDimension,
} from "./types";
import { DIMENSION_WEIGHTS } from "./types";

const RECOMMENDATIONS: Record<DiagnosticDimension, string[]> = {
  awareness: [
    "Run a short internal session on model limitations, hallucinations, and when human verification is mandatory.",
    "Maintain a one-page “AI reality check” for your team: strengths, failure modes, and escalation triggers.",
    "Pair vendor demos with independent evaluation on your own documents and edge cases.",
  ],
  practicalUsage: [
    "Create 3–5 prompt patterns (role, context, constraints, format) for your top recurring tasks and reuse them.",
    "Adopt a two-pass habit: generate, then critique or score the output against a rubric before sending externally.",
    "Keep a lightweight log of weak outputs and the prompt change that fixed them—this accelerates team learning.",
  ],
  businessApplication: [
    "Define one pilot with a clear metric (e.g. handle time, rework rate) and a narrow audience before expanding scope.",
    "Run a 45-minute stakeholder alignment on allowed data, tool choice, and decision rights for AI-assisted work.",
    "Document what “done” means for AI-assisted deliverables (reviewer, evidence, audit trail) for your workflows.",
  ],
  governanceRisk: [
    "Refresh acceptable-use guidance for customer data, commercial secrets, and regulated content—then communicate examples.",
    "Use a simple triage: green (public), amber (internal-only with approved tools), red (no external models without sign-off).",
    "Add AI-specific checks to change management for high-impact automation (refunds, credit, medical, legal).",
  ],
  adoptionBehaviour: [
    "Host a monthly “show and tell” with bounded demos—10 minutes each, focused on verification and time saved.",
    "Publish micro-guides for each role (agent, team lead, QA) instead of one generic AI policy email.",
    "Celebrate responsible wins publicly and review near-misses privately with clear fixes, not blame.",
  ],
};

function rankWeakest(scores: DimensionScores[], take: number): DimensionScores[] {
  return [...scores]
    .sort((a, b) => {
      const diff = a.blendedScore - b.blendedScore;
      if (diff !== 0) return diff;
      return (
        DIMENSION_WEIGHTS[a.dimension] * a.blendedScore -
        DIMENSION_WEIGHTS[b.dimension] * b.blendedScore
      );
    })
    .slice(0, take);
}

function rankStrongest(scores: DimensionScores[], take: number): DimensionScores[] {
  return [...scores]
    .sort((a, b) => {
      const diff = b.blendedScore - a.blendedScore;
      if (diff !== 0) return diff;
      return (
        DIMENSION_WEIGHTS[b.dimension] * b.blendedScore -
        DIMENSION_WEIGHTS[a.dimension] * a.blendedScore
      );
    })
    .slice(0, take);
}

export function strengthsAndGaps(scores: DimensionScores[]) {
  const strengths = rankStrongest(scores, 2).map((s) => ({
    dimension: s.dimension,
    label: s.label,
    combinedScore: s.blendedScore,
  }));
  const gaps = rankWeakest(scores, 2).map((s) => ({
    dimension: s.dimension,
    label: s.label,
    combinedScore: s.blendedScore,
  }));
  return { strengths, gaps };
}

/**
 * 3–5 personalised recommendations: prioritise weakest blended dimensions, dedupe.
 */
export function buildRecommendations(scores: DimensionScores[]): string[] {
  const orderedWeakest = rankWeakest(scores, 5);
  const seen = new Set<string>();
  const out: string[] = [];

  for (const row of orderedWeakest) {
    for (const line of RECOMMENDATIONS[row.dimension]) {
      if (out.length >= 5) return out;
      if (seen.has(line)) continue;
      seen.add(line);
      out.push(line);
    }
  }

  const defaults = [
    "Book a short consultation to map AI use cases to governance and training roadmaps for your team.",
    "Add a verification checklist to high-risk outputs before they reach customers or regulators.",
  ];
  for (const line of defaults) {
    if (out.length >= 3) break;
    if (!seen.has(line)) out.push(line);
  }

  return out.slice(0, 5);
}

export function assembleDiagnosticPayload(
  answers: DiagnosticAnswers,
): DiagnosticSubmissionPayload | null {
  if (!validateCompleteAnswers(answers)) return null;
  const dimensions = scoreAllDimensions(answers);
  const overallScore = computeOverallScore(dimensions);
  const maturityLevel = maturityFromOverall(overallScore);
  const { strengths, gaps } = strengthsAndGaps(dimensions);
  const recommendations = buildRecommendations(dimensions);

  return {
    version: 1,
    completedAt: new Date().toISOString(),
    answers,
    scores: dimensions,
    overallScore,
    maturityLevel,
    strengths,
    gaps,
    recommendations,
  };
}

export function formatReportText(payload: {
  maturityName: string;
  maturitySummary: string;
  overallScore: number;
  dimensionRows: DimensionScores[];
  strengths: { label: string; combinedScore: number }[];
  gaps: { label: string; combinedScore: number }[];
  recommendations: string[];
}): string {
  const lines: string[] = [
    "AI CAPABILITY DIAGNOSTIC — REPORT",
    "================================",
    "",
    `Overall score: ${payload.overallScore.toFixed(1)} / 100`,
    `Maturity: ${payload.maturityName}`,
    "",
    payload.maturitySummary,
    "",
    "DIMENSION BREAKDOWN",
    "-------------------",
  ];

  for (const d of payload.dimensionRows) {
    lines.push(
      `${d.label}: confidence ${d.confidenceScore.toFixed(1)}% · capability ${d.capabilityScore.toFixed(1)}% · ${d.insightLabel}`,
    );
  }

  lines.push("", "STRENGTHS", "---------");
  for (const s of payload.strengths) {
    lines.push(`• ${s.label} (blended ${s.combinedScore.toFixed(1)}%)`);
  }

  lines.push("", "PRIORITY GAPS", "-------------");
  for (const g of payload.gaps) {
    lines.push(`• ${g.label} (blended ${g.combinedScore.toFixed(1)}%)`);
  }

  lines.push("", "RECOMMENDATIONS", "---------------");
  payload.recommendations.forEach((r, i) => lines.push(`${i + 1}. ${r}`));

  lines.push(
    "",
    "---",
    "EnableCX · AI Capability Diagnostic",
    "This report is self-assessment guidance, not a certification.",
  );

  return lines.join("\n");
}
