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
    slug: "financial-services-cloud-communications-transformation",
    title: "Transforming Customer Experience Through Cloud Communications",
    industry: "Financial Services",
    challenge:
      "A growing UK financial services provider relied on legacy telephony and disconnected voice, email, and chat tools, leading to high handling times, inconsistent service quality, and limited visibility during peak demand.",
    approach:
      "EnableCX delivered a structured transformation roadmap combining discovery, CCaaS and UCaaS strategy, improved routing and automation design, and vendor selection aligned to technical and commercial goals.",
    delivery:
      "We supported implementation alongside internal IT and vendors, guided migration with minimal disruption, and delivered role-based training for agents, supervisors, and admins through live workshops and on-demand resources.",
    results: [
      "25% reduction in average handling time within six months.",
      "Improved first contact resolution and more consistent service quality.",
      "Real-time analytics improved operational visibility and decision-making.",
      "Seamless omnichannel experience across voice, email, and chat.",
      "Higher agent productivity and satisfaction with stronger internal confidence.",
      "A scalable, future-ready communications platform with better long-term adoption.",
    ],
    quote:
      "Technology enabled the change, but structured training and adoption support made the transformation stick.",
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
