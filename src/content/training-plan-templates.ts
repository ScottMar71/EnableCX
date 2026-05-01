/** Role keys for onboarding plan templates — static frameworks, editable in UI. */

export type TrainingPlanRoleId = "support-agent" | "csm" | "operations";

export type TrainingPlanSectionTemplate = {
  id: string;
  title: string;
  /** Multiline bullets / paragraphs shown in textareas */
  body: string;
};

export type TrainingPlanRoleTemplate = {
  id: TrainingPlanRoleId;
  /** Short select label */
  label: string;
  /** Hero line under title */
  tagline: string;
  overview: string;
  sections: TrainingPlanSectionTemplate[];
};

export const TRAINING_PLAN_ROLES: TrainingPlanRoleTemplate[] = [
  {
    id: "support-agent",
    label: "Support Agent",
    tagline:
      "Frontline troubleshooting, tone, escalation, and product workflow fluency—in the first 30–60 days.",
    overview:
      "Use this outline to sequence tools training, QA calibration, and real-ticket observation so new hires reach consistent handle quality faster.",
    sections: [
      {
        id: "sa-outcomes",
        title: "Outcomes & success criteria",
        body: `- First-response quality and completeness meet team rubric within 60 days.\n- Channel SLAs understood; queue discipline and statuses used correctly.\n- Escalation path used when policy or technical depth requires handoff.`,
      },
      {
        id: "sa-week1",
        title: "Week 1–2: Foundations",
        body: `- Product pillars, account model, and ticket lifecycle (creation → assignment → resolution).\n- Omnichannel inbox: macros, tagging, attachments, links to internal KB.\n- Security & privacy basics: PII handling, verification standards, phishing awareness.\n- Shadow live tickets with debrief prompts after each session.`,
      },
      {
        id: "sa-week3",
        title: "Week 3–4: Applied handling",
        body: `- Top volume categories with approved responses and deviation rules.\n- Difficult scenarios: resets, cancellations, entitlement checks, billing FAQs.\n- Warm transfers and internal notes discipline for follow-the-sun coverage.\n- Weekly QA calibration on graded samples vs manager/coach.`,
      },
      {
        id: "sa-enablement",
        title: "Ongoing reinforcement",
        body: `- Office hours queue for ambiguous cases.\n- Release notes drill for product changes impacting support.\n- Peer QA spot checks and trending defect review with engineering liaison.`,
      },
    ],
  },
  {
    id: "csm",
    label: "Customer Success Manager",
    tagline:
      "Portfolio health, executive alignment, onboarding-to-value, and renewal readiness—not generic account admin.",
    overview:
      "Structure discovery, stakeholder mapping, and success plans so portfolio coverage stays proactive as books grow.",
    sections: [
      {
        id: "csm-outcomes",
        title: "Outcomes & success criteria",
        body: `- Health score usage and playbook triggers understood for every tier.\n- Clear coverage model: touch frequency, EBRR cadence, and escalation ownership.\n- Adoption milestones tied to value proof points (not vague “check-ins”).`,
      },
      {
        id: "csm-discovery",
        title: "Onboarding transition & discovery",
        body: `- Handoff from implementations: goals, KPIs, blockers, and timeline from sales/SC notes.\n- Stakeholder map: economic buyer vs champion vs admins; RACI-lite for decisions.\n- Success plan draft: hypotheses, milestones, risks, owners, and dates.\n- Document repository and CSP hygiene (notes, tags, renewal fields).`,
      },
      {
        id: "csm-delivery",
        title: "Delivery rhythm (30 / 60 / 90)",
        body: `- 30 days: Adoption baseline metrics, onboarding wrap validation, rescue path if stalled.\n- 60 days: Value storyline vs original goals; QBR-lite or mid-cycle exec touch if needed.\n- 90 days: Renewal risk flagging, expansion hypotheses, advocacy pipeline.\n- Cross-functional alignment: Support for escalations, Product for roadmap signal.`,
      },
      {
        id: "csm-executive",
        title: "Exec & EBRR cadence",
        body: `- Agenda template: outcomes, ROI snapshot, roadmap, risks/asks.\n- Prep package: dashboard screenshots, anonymized benchmarks where allowed.\n- Follow-up hygiene: recap email, tracked actions, and CRM updates.`,
      },
    ],
  },
  {
    id: "operations",
    label: "Ops",
    tagline:
      "Throughput, forecasting, tooling configuration, staffing, and quality ops—consistent day over day.",
    overview:
      "Balance real-time queues with reporting maturity and admin changes so KPIs reflect reality, not spreadsheets.",
    sections: [
      {
        id: "ops-outcomes",
        title: "Outcomes & success criteria",
        body: `- Intraday queue health visible with thresholds and alerting.\n- Forecast and capacity model aligned to SLAs by channel.\n- Change discipline for routing, macros, and skills without undocumented drift.`,
      },
      {
        id: "ops-realtime",
        title: "Real-time operations",
        body: `- Intraday management: backlog age, SLA risk, abandonment, re-queue rules.\n- Staffing overlays vs forecast; break and shrinkage assumptions documented.\n- Incident bridges for platform degradation; customer comms template.\n- Post-mortem ritual for SLA misses with root causes and corrective actions.`,
      },
      {
        id: "ops-reporting",
        title: "Reporting & governance",
        body: `- Source-of-truth definitions: handle time vs AHT vs resolution time.\n- Daily / weekly dashboards and distribution list for leaders.\n- QA sampling plan tied to trending issues and calibration across sites.\n- Change log for workflows, queues, prompts, integrations.`,
      },
      {
        id: "ops-projects",
        title: "Tooling & projects",
        body: `- Admin backlog prioritization vs risk (capacity, CX, compliance).\n- UAT checkpoints for routing or channel changes.\n- Knowledge base taxonomy ownership and deprecation policy.`,
      },
    ],
  },
];

export function getTrainingPlanRoleById(id: TrainingPlanRoleId): TrainingPlanRoleTemplate {
  const found = TRAINING_PLAN_ROLES.find((r) => r.id === id);
  if (!found) {
    throw new Error(`Unknown training plan role: ${id}`);
  }
  return found;
}
