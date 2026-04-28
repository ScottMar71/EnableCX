export type ResourceArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: "SaaS Enablement" | "CCaaS Training" | "UCaaS Adoption";
  readTime: string;
  body: string[];
};

export const resources: ResourceArticle[] = [
  {
    slug: "why-platform-adoption-stalls",
    title: "Why Platform Adoption Stalls After Rollout",
    excerpt:
      "Most rollout plans focus on implementation milestones but underinvest in role-specific adoption behavior.",
    category: "SaaS Enablement",
    readTime: "6 min read",
    body: [
      "Platform adoption issues usually appear after go-live when teams return to legacy habits and inconsistent workflows.",
      "Role-based training improves day-to-day confidence, which drives sustained adoption and stronger operational consistency.",
      "The most effective programs connect training directly to team KPIs, manager coaching, and reinforcement after delivery.",
    ],
  },
  {
    slug: "ccaas-training-playbook",
    title: "A Practical CCaaS Training Playbook for Contact Centers",
    excerpt:
      "Contact center enablement should align agents, supervisors, and QA teams around one shared workflow model.",
    category: "CCaaS Training",
    readTime: "8 min read",
    body: [
      "CCaaS programs fail when teams train in isolation and quality processes do not map to live workflows.",
      "A clear role-path model for agents, supervisors, and QA creates repeatable handling behavior across channels.",
      "Reinforcement and coaching loops are essential to convert training into measurable customer experience improvements.",
    ],
  },
  {
    slug: "ucaas-rollout-checklist",
    title: "UCaaS Rollout Checklist for Faster Team Adoption",
    excerpt:
      "A rollout succeeds when admin readiness, end-user onboarding, and post-launch reinforcement are planned together.",
    category: "UCaaS Adoption",
    readTime: "5 min read",
    body: [
      "UCaaS rollouts often create adoption friction when communication standards and usage expectations are unclear.",
      "Teams need phased enablement for admins, managers, and end users to ensure consistency from launch week onward.",
      "Post-launch follow-up closes capability gaps quickly and reduces support burden during the transition period.",
    ],
  },
];
