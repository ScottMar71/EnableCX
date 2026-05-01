import type { DiagnosticSection } from "./types";

export const LIKERT_SCALE = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
] as const;

export const DIAGNOSTIC_SECTIONS: DiagnosticSection[] = [
  {
    dimension: "awareness",
    title: "A · Awareness",
    shortLabel: "Awareness",
    description:
      "How well you understand what AI systems can do, where they fail, and what changed recently in practical enterprise use.",
    questions: [
      {
        id: "aware_sa1",
        dimension: "awareness",
        kind: "likert",
        text: "I can explain to colleagues what modern AI assistants are reliably good—and not good—at in a typical workplace context.",
      },
      {
        id: "aware_sa2",
        dimension: "awareness",
        kind: "likert",
        text: "I actively track AI developments that matter for my role or industry—not only vendor marketing claims.",
      },
      {
        id: "aware_sa3",
        dimension: "awareness",
        kind: "likert",
        text: "I understand the practical difference between using AI for drafting assistance versus treating its output as verified fact.",
      },
      {
        id: "aware_k1",
        dimension: "awareness",
        kind: "knowledge",
        text: "Which statement best reflects a real limitation of generative AI in business use?",
        options: [
          { id: "a", label: "It always reflects the most recent company policy without extra configuration" },
          { id: "b", label: "It can generate incorrect or misleading information while sounding authoritative" },
          { id: "c", label: "It cannot process text longer than a single sentence" },
          { id: "d", label: "It guarantees outcomes that meet regulatory requirements out of the box" },
        ],
        correctOptionId: "b",
      },
      {
        id: "aware_k2",
        dimension: "awareness",
        kind: "knowledge",
        text: 'In workplace discussions, when people say a model may "hallucinate", what do they most likely mean?',
        options: [
          { id: "a", label: "The model refuses every request for security reasons" },
          { id: "b", label: "The model runs slower than older software" },
          { id: "c", label: "The model produces confident-sounding content that may be unsupported or false" },
          { id: "d", label: "The model only works when connected to internal databases" },
        ],
        correctOptionId: "c",
      },
    ],
  },
  {
    dimension: "practicalUsage",
    title: "B · Practical usage",
    shortLabel: "Practical usage",
    description: "Day-to-day prompting, iteration, and quality habits when you use AI tools for real tasks.",
    questions: [
      {
        id: "prac_sa1",
        dimension: "practicalUsage",
        kind: "likert",
        text: "I structure prompts with clear role, context, constraints, and desired format when the task matters.",
      },
      {
        id: "prac_sa2",
        dimension: "practicalUsage",
        kind: "likert",
        text: "I iterate deliberately (examples, rubric, split steps) when the first answer is weak or off-brief.",
      },
      {
        id: "prac_sa3",
        dimension: "practicalUsage",
        kind: "likert",
        text: "For customer-impacting work, I treat AI output as a draft that still needs human review.",
      },
      {
        id: "prac_k1",
        dimension: "practicalUsage",
        kind: "knowledge",
        scenarioLead: "You need a concise client-ready update based on a long internal email.",
        text: "Which prompt is most effective as a starting point?",
        options: [
          {
            id: "a",
            label: 'Summarise this email in 3 bullet points for a client, focusing on risks and next steps. Flag anything unclear.',
          },
          { id: "b", label: "Make this better." },
          { id: "c", label: "Write a generic industry overview about AI adoption." },
          { id: "d", label: "List 20 ideas unrelated to the email." },
        ],
        correctOptionId: "a",
      },
      {
        id: "prac_k2",
        dimension: "practicalUsage",
        kind: "knowledge",
        scenarioLead:
          "You have rough bullet notes from a meeting and need an initial FAQ draft for an internal wiki.",
        text: "What is the best next step?",
        options: [
          {
            id: "a",
            label:
              'Ask for structured FAQs with headings, realistic customer wording, explicit "needs verification" flags, and sources to check',
          },
          {
            id: "b",
            label: "Paste notes and ask for the longest possible document with no constraints",
          },
          { id: "c", label: "Skip structure and ask for witty marketing slogans only" },
          { id: "d", label: "Request answers that invent policy wording to sound official" },
        ],
        correctOptionId: "a",
      },
    ],
  },
  {
    dimension: "businessApplication",
    title: "C · Business application",
    shortLabel: "Business application",
    description: "Linking AI experiments to workflows, stakeholder alignment, and measurable outcomes.",
    questions: [
      {
        id: "biz_sa1",
        dimension: "businessApplication",
        kind: "likert",
        text: "I can distinguish workflows where assisted drafting saves meaningful time versus where automation adds undue risk.",
      },
      {
        id: "biz_sa2",
        dimension: "businessApplication",
        kind: "likert",
        text: "I have discussed or piloted AI use cases with stakeholders (customers, Ops, Risk, Legal) where appropriate.",
      },
      {
        id: "biz_sa3",
        dimension: "businessApplication",
        kind: "likert",
        text: "I tie AI experiments to observable outcomes—for example rework rate, turnaround time, or quality checks.",
      },
      {
        id: "biz_k1",
        dimension: "businessApplication",
        kind: "knowledge",
        scenarioLead: "Leadership wants to ‘use AI for email’ organisation-wide.",
        text: "What is the strongest first step before choosing a tool?",
        options: [
          { id: "a", label: "Buy the cheapest available subscription for everyone immediately" },
          {
            id: "b",
            label: "Define a measurable objective (e.g. response time vs quality), clarify allowed data handling, then pilot narrowly",
          },
          { id: "c", label: "Announce a mandate without training or governance" },
          {
            id: "d",
            label: "Use personal accounts so procurement is avoided",
          },
        ],
        correctOptionId: "b",
      },
      {
        id: "biz_k2",
        dimension: "businessApplication",
        kind: "knowledge",
        scenarioLead: "A team proposes autonomous AI actions that execute refunds without human approval.",
        text: "What is the primary risk to surface first?",
        options: [
          { id: "a", label: "The UI colours may not match the brand palette" },
          {
            id: "b",
            label: "Accountability, policy adherence, fairness, and customer trust when high-impact decisions are unsupervised",
          },
          { id: "c", label: "Employees might type slightly slower" },
          { id: "d", label: "There is no material risk if the model appears confident" },
        ],
        correctOptionId: "b",
      },
    ],
  },
  {
    dimension: "governanceRisk",
    title: "D · Governance & risk",
    shortLabel: "Governance & risk",
    description: "Data sensitivity, acceptable use, and knowing when AI creates compliance or reputational exposure.",
    questions: [
      {
        id: "gov_sa1",
        dimension: "governanceRisk",
        kind: "likert",
        text: "I know my organisation's (or industry's) acceptable-use expectations for AI and sensitive information.",
      },
      {
        id: "gov_sa2",
        dimension: "governanceRisk",
        kind: "likert",
        text: "I assess data sensitivity and retention implications before entering content into external AI services.",
      },
      {
        id: "gov_sa3",
        dimension: "governanceRisk",
        kind: "likert",
        text: "I can identify situations where automation could amplify bias, mishandle PII, or breach contractual obligations.",
      },
      {
        id: "gov_k1",
        dimension: "governanceRisk",
        kind: "knowledge",
        text: "Is it appropriate to paste identifiable customer personal data into a public, consumer-grade AI assistant to ‘speed things up’?",
        options: [
          { id: "a", label: "Yes, if you delete the chat afterwards" },
          { id: "b", label: "No" },
          { id: "c", label: "Yes, if your manager once said AI is strategic" },
          { id: "d", label: "Only on weekends when IT is offline" },
        ],
        correctOptionId: "b",
      },
      {
        id: "gov_k2",
        dimension: "governanceRisk",
        kind: "knowledge",
        scenarioLead:
          "Someone on your team pasted confidential roadmap notes into a public AI chat to generate talking points.",
        text: "What is the best immediate professional response?",
        options: [
          { id: "a", label: "Ignore it if nothing bad happened yet" },
          {
            id: "b",
            label: "Follow your organisation's incident / security reporting pathway; stop further sharing until guidance is confirmed",
          },
          {
            id: "c",
            label: "Repost the same content to a wider model to compare answers",
          },
          { id: "d", label: "Assume vendor terms guarantee confidentiality without checking" },
        ],
        correctOptionId: "b",
      },
    ],
  },
  {
    dimension: "adoptionBehaviour",
    title: "E · Adoption behaviour",
    shortLabel: "Adoption behaviour",
    description: "How you help others learn safe patterns, iterate workflows, and scale thoughtful adoption.",
    questions: [
      {
        id: "adopt_sa1",
        dimension: "adoptionBehaviour",
        kind: "likert",
        text: "I share practical patterns with teammates—for example prompting templates and verification habits.",
      },
      {
        id: "adopt_sa2",
        dimension: "adoptionBehaviour",
        kind: "likert",
        text: "I update my workflows when tools improve materially, rather than freezing habits from early experiments.",
      },
      {
        id: "adopt_sa3",
        dimension: "adoptionBehaviour",
        kind: "likert",
        text: "I pilot AI in bounded, low-risk settings before advocating organisation-wide rollout.",
      },
      {
        id: "adopt_k1",
        dimension: "adoptionBehaviour",
        kind: "knowledge",
        scenarioLead: "Leaders want ‘more AI adoption’ but usage is fragmented and anecdotal.",
        text: "Which approach most often builds durable adoption?",
        options: [
          {
            id: "a",
            label: 'Lightweight guardrails plus role-based demos, pilots with feedback loops, and success metrics—not just an email mandate',
          },
          { id: "b", label: "Send a one-slide deck with hype quotes and no examples" },
          { id: "c", label: "Block all AI locally so curiosity disappears" },
          {
            id: "d",
            label: "Only train executives; frontline learns from rumours",
          },
        ],
        correctOptionId: "a",
      },
      {
        id: "adopt_k2",
        dimension: "adoptionBehaviour",
        kind: "knowledge",
        scenarioLead: "Several colleagues distrust outputs after a prominent mistake circulated internally.",
        text: "What response is likely to rebuild confidence safely?",
        options: [
          { id: "a", label: "Insist mistrust means the technology should never be used again" },
          {
            id: "b",
            label: 'Teach verification habits (sources, approvals, escalation), define “safe harbour” workflows, and show bounded wins',
          },
          { id: "c", label: "Encourage unrestricted use—volume fixes quality" },
          {
            id: "d",
            label: "Let each person invent their own policy silently",
          },
        ],
        correctOptionId: "b",
      },
    ],
  },
];

export const ALL_DIAGNOSTIC_QUESTIONS = DIAGNOSTIC_SECTIONS.flatMap((s) => s.questions);

export function flattenQuestionIds(): string[] {
  return ALL_DIAGNOSTIC_QUESTIONS.map((q) => q.id);
}
