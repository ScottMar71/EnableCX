export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  approach: string;
  delivery: string;
  results: string[];
  quote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-support-adoption",
    title: "SaaS Support Team Adoption Acceleration",
    industry: "B2B SaaS",
    challenge:
      "A support organization rolled out a new SaaS platform but saw low usage consistency and long ramp times.",
    approach:
      "EnableCX designed role-based learning paths aligned to daily support and escalation workflows.",
    delivery:
      "We ran live team sessions, manager coaching, and reinforcement guidance over a six-week period.",
    results: [
      "Reduced ramp-up time for new agents.",
      "Improved confidence with daily platform workflows.",
      "Standardized process adherence across teams.",
    ],
    quote:
      "EnableCX made the platform practical for our team. Adoption improved quickly and consistently.",
  },
  {
    slug: "ccaas-quality-consistency",
    title: "CCaaS Quality and Workflow Consistency Program",
    industry: "Customer Operations",
    challenge:
      "A contact center needed to improve omnichannel handling consistency after CCaaS migration.",
    approach:
      "EnableCX aligned agent, supervisor, and QA enablement around shared workflows and coaching outcomes.",
    delivery:
      "The program combined channel-specific exercises, supervisor playbooks, and QA feedback loops.",
    results: [
      "More consistent handling across voice and digital channels.",
      "Higher supervisor confidence in coaching workflows.",
      "Better utilization of CCaaS platform features.",
    ],
    quote:
      "The training was tailored, practical, and directly tied to the customer experience outcomes we care about.",
  },
];
