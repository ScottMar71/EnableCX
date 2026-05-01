"use client";

import { useEffect, useRef, useState } from "react";
import {
  DIAGNOSTIC_SECTIONS,
  LIKERT_SCALE,
} from "@/lib/ai-diagnostic/questions";
import type { DiagnosticSection } from "@/lib/ai-diagnostic/types";
import {
  assembleDiagnosticPayload,
  formatReportText,
  strengthsAndGaps,
} from "@/lib/ai-diagnostic/report";
import type {
  DiagnosticAnswers,
  DiagnosticSubmissionPayload,
  KnowledgeQuestion,
  LikertQuestion,
} from "@/lib/ai-diagnostic/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ChevronDown, Download, Layers, RotateCcw, Sparkles } from "lucide-react";
import { dispatchAnalyticsEvent } from "@/lib/analytics/dispatch";
import { analyticsEvents } from "@/lib/analytics/events";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { cn } from "@/lib/utils";

function sectionIsComplete(section: DiagnosticSection, answers: DiagnosticAnswers): boolean {
  return section.questions.every((q) => {
    const v = answers[q.id];
    if (q.kind === "likert") {
      return typeof v === "number" && Number.isInteger(v) && v >= 1 && v <= 5;
    }
    return typeof v === "string" && q.options.some((o) => o.id === v);
  });
}

function downloadText(filename: string, body: string) {
  const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadJson(filename: string, data: DiagnosticSubmissionPayload) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function AiCapabilityDiagnostic() {
  const engagedRef = useRef(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<DiagnosticAnswers>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [result, setResult] = useState<DiagnosticSubmissionPayload | null>(null);

  useEffect(() => {
    dispatchAnalyticsEvent(analyticsEvents.aiDiagnosticView, "ai_capability_diagnostic");
  }, []);

  const currentSection = DIAGNOSTIC_SECTIONS[step];
  const progressPct = result ? 100 : Math.round(((step + 1) / DIAGNOSTIC_SECTIONS.length) * 100);

  const allComplete =
    DIAGNOSTIC_SECTIONS.every((s) => sectionIsComplete(s, answers)) && assembleDiagnosticPayload(answers) !== null;

  function setLikert(questionId: string, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function setKnowledge(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }

  function handleNext() {
    if (!sectionIsComplete(currentSection, answers)) {
      setSubmitAttempted(true);
      return;
    }
    setSubmitAttempted(false);
    if (!engagedRef.current) {
      engagedRef.current = true;
      dispatchAnalyticsEvent(analyticsEvents.aiDiagnosticEngaged, "ai_capability_diagnostic_nav");
    }
    if (step < DIAGNOSTIC_SECTIONS.length - 1) {
      setStep((s) => s + 1);
    }
  }

  function handlePrev() {
    setSubmitAttempted(false);
    setStep((s) => Math.max(0, s - 1));
  }

  function handleFinish() {
    if (!sectionIsComplete(currentSection, answers)) {
      setSubmitAttempted(true);
      return;
    }
    const payload = assembleDiagnosticPayload(answers);
    if (!payload) return;
    setResult(payload);
    dispatchAnalyticsEvent(analyticsEvents.aiDiagnosticComplete, "ai_capability_diagnostic_results");
  }

  function handleRestart() {
    setStep(0);
    setAnswers({});
    setSubmitAttempted(false);
    setResult(null);
  }

  if (result) {
    const dims = result.scores;
    const recap = strengthsAndGaps(dims);

    const textReport = formatReportText({
      maturityName: result.maturityLevel.name,
      maturitySummary: result.maturityLevel.summary,
      overallScore: result.overallScore,
      dimensionRows: dims,
      strengths: recap.strengths.map((s) => ({ label: s.label, combinedScore: s.combinedScore })),
      gaps: recap.gaps.map((g) => ({ label: g.label, combinedScore: g.combinedScore })),
      recommendations: result.recommendations,
    });

    return (
      <div className="print:max-w-none">
        <div className="print:hidden mb-10 flex flex-wrap items-center gap-3">
          <Button type="button" variant="secondary" size="md" onClick={handleRestart}>
            <RotateCcw className="h-4 w-4 shrink-0" aria-hidden />
            Retake assessment
          </Button>
          <Button
            type="button"
            size="md"
            onClick={() => downloadText("ai-capability-diagnostic-report.txt", textReport)}
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden />
            Download report
          </Button>
          <button
            type="button"
            className="text-sm font-semibold text-brand-primary underline underline-offset-4 hover:text-brand-primaryHover"
            onClick={() => downloadJson("ai-capability-diagnostic-response.json", result)}
          >
            Export JSON (API-ready)
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-brand-primary/35 bg-bg-elevated p-6 print:border-brand-primary print:shadow-none">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">Your maturity level</p>
            <h2 className="mt-3 text-2xl font-semibold text-text-primary md:text-[1.65rem]">
              {result.maturityLevel.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{result.maturityLevel.summary}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-md border border-border-default bg-bg-subtle px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Overall capability</p>
                <p className="mt-2 text-2xl font-semibold tabular-nums text-text-primary">
                  {result.overallScore.toFixed(1)}
                </p>
                <p className="mt-1 text-xs text-text-muted">Weighted 0–100 index</p>
              </div>
              <div className="rounded-md border border-border-default bg-bg-subtle px-4 py-3 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                  Confidence vs. knowledge lens
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  Confidence reflects your Likert responses; capability reflects scenario-based multiple choice.
                  Divergence between them flags coaching priorities in each pillar.
                </p>
              </div>
            </div>
          </Card>

          <Card className="flex flex-col justify-between gap-4 p-6 print:shadow-none">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">Next step</p>
              <p className="mt-3 text-sm text-text-secondary">
                Share this snapshot with EnableCX if you’d like enablement pathways mapped to governance and rollout
                reality.
              </p>
            </div>
            <Button asChild size="lg" className="w-full">
              <TrackedLink
                href="/book-call"
                className="inline-flex w-full"
                eventName={analyticsEvents.ctaClickBookCall}
                location="ai_diagnostic_cta"
              >
                Book consultation
              </TrackedLink>
            </Button>
            <Button asChild variant="secondary" size="md" className="w-full">
              <TrackedLink
                href="/contact"
                eventName={analyticsEvents.ctaClickContact}
                location="ai_diagnostic_contact"
              >
                Contact EnableCX
              </TrackedLink>
            </Button>
          </Card>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="p-6 print:shadow-none">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" aria-hidden />
              <div>
                <p className="font-semibold text-text-primary">Top strengths</p>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  {recap.strengths.map((s) => (
                    <li key={s.dimension}>
                      <strong className="text-text-primary">{s.label}</strong> — blended score{" "}
                      {s.combinedScore.toFixed(1)}%.
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
          <Card className="p-6 print:shadow-none">
            <div className="flex items-start gap-2">
              <Layers className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
              <div>
                <p className="font-semibold text-text-primary">Priority gaps</p>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  {recap.gaps.map((g) => (
                    <li key={g.dimension}>
                      <strong className="text-text-primary">{g.label}</strong> — blended score{" "}
                      {g.combinedScore.toFixed(1)}%.
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-10 p-6 print:shadow-none">
          <h3 className="text-lg font-semibold text-text-primary">Recommended actions</h3>
          <ol className="mt-4 list-decimal space-y-3 ps-6 text-sm text-text-secondary marker:font-semibold marker:text-brand-primary">
            {result.recommendations.map((r) => (
              <li key={r} className="ps-2">
                {r}
              </li>
            ))}
          </ol>
        </Card>

        <div className="mt-10 space-y-3">
          <h3 className="text-lg font-semibold text-text-primary">Dimension breakdown</h3>
          <p className="text-sm text-text-secondary">
            Expand each pillar to inspect confidence (% of Likert range), capability (knowledge correctness), and a
            plain-language archetype tailored to contrasts between the two signals.
          </p>
          {dims.map((d) => (
            <details
              key={d.dimension}
              className="group rounded-lg border border-border-default bg-bg-elevated p-4 shadow-[var(--shadow-sm)] open:border-brand-primary/40 print:border-border-default"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-medium text-text-primary marker:hidden">
                <span>
                  {d.label}{" "}
                  <span className="mt-1 block text-sm font-normal text-text-secondary">
                    Confidence {d.confidenceScore.toFixed(1)}% · Capability {d.capabilityScore.toFixed(1)}%
                  </span>
                </span>
                <ChevronDown
                  className="mt-0.5 h-4 w-4 shrink-0 text-icon transition-transform duration-200 group-open:rotate-180 print:hidden"
                  aria-hidden
                />
              </summary>
              <div className="mt-4 space-y-2 border-t border-border-default pt-4 text-sm">
                <p className="font-semibold text-brand-primary">{d.insightLabel}</p>
                <p className="text-text-secondary">
                  {d.insight === "overconfident" &&
                    "Your self-rated confidence exceeds scenario performance—narrow the gap with structured practice on realistic workflows."}
                  {d.insight === "untapped_potential" &&
                    "You answer scenario questions well despite modest confidence—credentialing peers and sponsoring pilots will unlock disproportionate upside."}
                  {d.insight === "foundational" &&
                    "Both signals skew low—prioritise guided enablement rather than tooling sprawl."}
                  {d.insight === "advanced" &&
                    "Confidence and competence align—invest time in multiplying skills across teammates and tightening controls."}
                </p>
              </div>
            </details>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-text-muted print:mt-6">
          Raw responses remain in this browser session until you export them. Embed the JSON payload server-side later to
          log leads or automate follow-up journeys.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
            Section {step + 1} of {DIAGNOSTIC_SECTIONS.length}
          </p>
          <p className="text-xs text-text-muted">{currentSection.title}</p>
        </div>
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-bg-subtle"
          role="progressbar"
          aria-valuenow={progressPct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Assessment progress"
        >
          <div
            className="h-full rounded-full bg-brand-primary transition-[width] duration-300 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <Card className="p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-text-primary md:text-2xl">{currentSection.title}</h2>
        <p className="mt-2 text-sm text-text-secondary">{currentSection.description}</p>

        <div className="mt-10 space-y-12">
          <section aria-labelledby={`sa-heading-${step}`}>
            <h3 id={`sa-heading-${step}`} className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Self-assessment (Likert)
            </h3>
            <div className="mt-6 space-y-10">
              {currentSection.questions
                .filter((q): q is LikertQuestion => q.kind === "likert")
                .map((q) => (
                  <fieldset key={q.id} className="space-y-3">
                    <legend className="text-sm font-medium text-text-primary">{q.text}</legend>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                      {LIKERT_SCALE.map(({ value, label }) => (
                        <label
                          key={value}
                          className={cn(
                            "flex cursor-pointer flex-col gap-1 rounded-md border border-border-default px-3 py-2 text-xs transition-colors hover:bg-bg-subtle",
                            answers[q.id] === value &&
                              "border-brand-primary bg-brand-accent-soft ring-2 ring-brand-primary ring-offset-1 ring-offset-bg-elevated",
                            submitAttempted &&
                              answers[q.id] === undefined &&
                              "border-orange-600/55 ring-orange-700/70",
                          )}
                        >
                          <input
                            type="radio"
                            className="sr-only"
                            name={q.id}
                            value={value}
                            checked={answers[q.id] === value}
                            onChange={() => setLikert(q.id, value)}
                          />
                          <span className="text-lg font-semibold tabular-nums leading-none text-brand-primary">{value}</span>
                          <span className="text-[11px] leading-snug text-text-secondary">{label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ))}
            </div>
          </section>

          <section aria-labelledby={`kq-heading-${step}`}>
            <h3 id={`kq-heading-${step}`} className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Knowledge scenarios
            </h3>
            <div className="mt-6 space-y-10">
              {currentSection.questions
                .filter((q): q is KnowledgeQuestion => q.kind === "knowledge")
                .map((q) => (
                  <fieldset key={q.id} className="space-y-3">
                    <legend className="text-base font-semibold leading-snug text-text-primary">{q.text}</legend>
                    {q.scenarioLead ? (
                      <p className="text-sm italic text-text-secondary">&ldquo;{q.scenarioLead}&rdquo;</p>
                    ) : null}
                    <div className="grid gap-2">
                      {q.options.map((opt) => (
                        <label
                          key={opt.id}
                          className={cn(
                            "flex cursor-pointer gap-3 rounded-lg border border-border-default px-3 py-2.5 text-sm transition-colors hover:bg-bg-subtle",
                            answers[q.id] === opt.id &&
                              "border-brand-primary bg-brand-accent-soft ring-2 ring-brand-primary ring-offset-1 ring-offset-bg-elevated",
                            submitAttempted && typeof answers[q.id] !== "string" && "border-orange-600/55",
                          )}
                        >
                          <input
                            type="radio"
                            className="mt-1 h-4 w-4 shrink-0 accent-brand-primary"
                            name={q.id}
                            value={opt.id}
                            checked={answers[q.id] === opt.id}
                            onChange={() => setKnowledge(q.id, opt.id)}
                          />
                          <span className="leading-snug text-text-secondary">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border-default pt-8">
          <Button type="button" variant="secondary" disabled={step === 0} onClick={handlePrev}>
            Back
          </Button>
          {step < DIAGNOSTIC_SECTIONS.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Next section
            </Button>
          ) : (
            <Button type="button" onClick={handleFinish} disabled={!allComplete}>
              See results
            </Button>
          )}
        </div>
        {!allComplete ? (
          <p className="mt-6 text-xs text-orange-900/95">
            Answers stay on-device. Complete each section to unlock the insight engine and downloadable report—missing
            items highlight in amber.
          </p>
        ) : (
          <p className="mt-6 flex items-start gap-2 text-xs text-text-muted">
            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-primary" aria-hidden />
            All sections answered—advance to calculate your maturity index, quadrant insights, and recommended actions.
          </p>
        )}
      </Card>

      <p className="text-center text-xs text-text-muted">
        Prefer a concierge walkthrough after you finish?{" "}
        <Link href="/book-call" className="font-semibold text-brand-primary underline-offset-4 hover:underline">
          Book a consultation
        </Link>
      </p>
    </div>
  );
}
