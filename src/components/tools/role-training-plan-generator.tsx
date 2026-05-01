"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ClipboardList,
  Copy,
  ListChecks,
  Printer,
  RotateCcw,
} from "lucide-react";
import { dispatchAnalyticsEvent } from "@/lib/analytics/dispatch";
import { analyticsEvents } from "@/lib/analytics/events";
import {
  type TrainingPlanRoleId,
  type TrainingPlanSectionTemplate,
  TRAINING_PLAN_ROLES,
  getTrainingPlanRoleById,
} from "@/content/training-plan-templates";

type SectionState = TrainingPlanSectionTemplate;

function cloneRoleSections(role: TrainingPlanRoleId): SectionState[] {
  const t = getTrainingPlanRoleById(role);
  return t.sections.map((s) => ({ ...s, title: s.title, body: s.body }));
}

function buildClipboardText(opts: {
  roleLabel: string;
  tagline: string;
  overview: string;
  sections: SectionState[];
}): string {
  const header = [
    "Role-Based Training Plan — " + opts.roleLabel,
    "",
    opts.tagline,
    "",
    opts.overview,
    "",
    "---",
    "",
  ].join("\n");

  const blocks = opts.sections.map((s, i) => {
    const n = `${i + 1}. ${s.title}`;
    const body = s.body.trimEnd();
    return body ? `${n}\n${body}` : n;
  });

  return (header + blocks.join("\n\n")).trimEnd() + "\n";
}

export function RoleTrainingPlanGenerator() {
  const engagedRef = useRef(false);
  const [roleId, setRoleId] = useState<TrainingPlanRoleId>("support-agent");
  const [sections, setSections] = useState<SectionState[]>(() =>
    cloneRoleSections("support-agent")
  );
  const [copiedFlash, setCopiedFlash] = useState(false);

  const meta = useMemo(() => getTrainingPlanRoleById(roleId), [roleId]);

  useEffect(() => {
    dispatchAnalyticsEvent(
      analyticsEvents.trainingPlanGeneratorView,
      "training_plan_generator_page"
    );
  }, []);

  function engage() {
    if (engagedRef.current) return;
    engagedRef.current = true;
    dispatchAnalyticsEvent(
      analyticsEvents.trainingPlanGeneratorEngaged,
      "training_plan_generator_page"
    );
  }

  const handleRoleChange = useCallback((next: TrainingPlanRoleId) => {
    setRoleId(next);
    setSections(cloneRoleSections(next));
    engage();
  }, []);

  const resetToTemplate = useCallback(() => {
    setSections(cloneRoleSections(roleId));
    engage();
  }, [roleId]);

  const updateSection = useCallback(
    (sectionId: string, patch: Partial<Pick<SectionState, "title" | "body">>) => {
      engage();
      setSections((prev) =>
        prev.map((s) => (s.id === sectionId ? { ...s, ...patch } : s))
      );
    },
    []
  );

  const clipboardText = useMemo(
    () =>
      buildClipboardText({
        roleLabel: meta.label,
        tagline: meta.tagline,
        overview: meta.overview,
        sections,
      }),
    [meta.label, meta.tagline, meta.overview, sections]
  );

  async function copyAll() {
    engage();
    try {
      await navigator.clipboard.writeText(clipboardText);
      setCopiedFlash(true);
      dispatchAnalyticsEvent(
        analyticsEvents.trainingPlanGeneratorCopied,
        "training_plan_generator_page"
      );
      window.setTimeout(() => setCopiedFlash(false), 2000);
    } catch {
      setCopiedFlash(false);
    }
  }

  function printPlan() {
    engage();
    window.print();
    dispatchAnalyticsEvent(
      analyticsEvents.trainingPlanGeneratorPrint,
      "training_plan_generator_page"
    );
  }

  return (
    <div
      className="space-y-8 print:space-y-4"
      onPointerDownCapture={engage}
      id="role-training-plan-generator"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start print:hidden">
        <Card className="space-y-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-text-primary">
            <ListChecks className="h-5 w-5 text-icon" aria-hidden />
            Role & template
          </h2>
          <div className="space-y-2">
            <label htmlFor="training-plan-role" className="text-sm font-medium text-text-primary">
              Role
            </label>
            <Select
              id="training-plan-role"
              value={roleId}
              aria-label="Select role for onboarding plan"
              onChange={(e) => handleRoleChange(e.target.value as TrainingPlanRoleId)}
            >
              {TRAINING_PLAN_ROLES.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </Select>
            <p className="text-sm text-text-secondary">{meta.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="button" variant="secondary" size="md" onClick={resetToTemplate}>
              <RotateCcw className="h-4 w-4" aria-hidden />
              Reset section text
            </Button>
          </div>
          <p className="text-xs text-text-muted">
            Plans are editable below. Choosing a role reloads EnableCX-written defaults for that
            persona; edits stay until you reset or switch role.
          </p>
        </Card>

        <Card className="space-y-4 print:border-none print:bg-transparent print:shadow-none">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-text-primary print:text-base">
            <ClipboardList className="h-5 w-5 shrink-0 text-icon print:hidden" aria-hidden />
            Export
          </h2>
          <p className="text-sm text-text-secondary print:hidden">
            Copy the full plan (including overview) as plain text, or print / save as PDF from your
            browser.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button type="button" variant="primary" size="md" onClick={() => void copyAll()}>
              <Copy className="h-4 w-4" aria-hidden />
              {copiedFlash ? "Copied" : "Copy to clipboard"}
            </Button>
            <Button type="button" variant="secondary" size="md" onClick={printPlan}>
              <Printer className="h-4 w-4" aria-hidden />
              Print / PDF
            </Button>
          </div>
          <p className="text-xs text-text-muted print:hidden" role="status" aria-live="polite">
            {copiedFlash ? "Plan copied to your clipboard." : ""}
          </p>
        </Card>
      </div>

      <div className="print:hidden">
        <h2 className="text-lg font-semibold text-text-primary">Editable sections</h2>
        <p className="mt-1 text-sm text-text-secondary">{meta.overview}</p>
      </div>
      <div className="hidden print:block">
        <h2 className="text-xl font-bold text-text-primary">Role-Based Training Plan — {meta.label}</h2>
        <p className="mt-2 text-sm text-text-secondary">{meta.tagline}</p>
        <p className="mt-2 text-sm text-text-primary">{meta.overview}</p>
      </div>

      <div className="space-y-6">
        {sections.map((section, idx) => (
          <Card
            key={section.id}
            className="space-y-3 print:break-inside-avoid print:border print:shadow-none"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary print:hidden">
              Section {idx + 1}
            </p>
            <div className="space-y-3 print:hidden">
              <div className="space-y-1">
                <label
                  className="text-sm font-medium text-text-primary"
                  htmlFor={`section-title-${section.id}`}
                >
                  Heading
                </label>
                <Input
                  id={`section-title-${section.id}`}
                  value={section.title}
                  onChange={(e) => updateSection(section.id, { title: e.target.value })}
                  aria-label={`Section ${idx + 1} heading`}
                />
              </div>
              <div className="space-y-1">
                <label
                  className="text-sm font-medium text-text-primary"
                  htmlFor={`section-body-${section.id}`}
                >
                  Detail (bullets or paragraphs)
                </label>
                <Textarea
                  id={`section-body-${section.id}`}
                  className="min-h-36 font-mono text-sm leading-relaxed"
                  value={section.body}
                  onChange={(e) => updateSection(section.id, { body: e.target.value })}
                  aria-label={`Section ${idx + 1} body`}
                />
              </div>
            </div>
            <div className="hidden print:block whitespace-pre-wrap text-sm leading-relaxed text-text-primary">
              <strong className="text-text-primary">{section.title}</strong>
              {"\n"}
              {section.body}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
