export type ResourceArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: "SaaS Enablement" | "CCaaS Training" | "UCaaS Adoption";
  readTime: string;
  body: string[];
  keyTakeaways: string[];
  relatedServiceHref: string;
  publishedDate: string;
  faqs: { id: string; question: string; answer: string }[];
};

export const resources: ResourceArticle[] = [
  {
    slug: "why-platform-adoption-stalls",
    title: "Why Platform Adoption Stalls After Rollout",
    excerpt:
      "Most rollout plans focus on implementation milestones but underinvest in role-specific adoption behavior.",
    category: "SaaS Enablement",
    readTime: "9 min read",
    body: [
      "Platform adoption issues usually appear after go-live when teams return to legacy habits and inconsistent workflows. The implementation may be technically complete, but user behavior often remains unchanged.",
      "In most organisations, frontline teams are measured on speed and volume. When training does not reflect those pressures, users create workarounds that bypass the intended workflow model.",
      "Role-based training improves day-to-day confidence because each audience learns how to execute real scenarios in the platform, not abstract feature walkthroughs.",
      "Managers play a critical role in post-rollout adoption. When team leaders coach using the same workflow standards introduced in training, behavior change lasts longer and scales faster.",
      "The most effective programs connect training directly to team KPIs, manager coaching, and reinforcement checkpoints at 2, 4, and 8 weeks after launch.",
      "Adoption should be treated as an operating rhythm rather than a one-time event. Teams that embed reinforcement into weekly operations typically see stronger consistency and faster value realization.",
    ],
    keyTakeaways: [
      "Map training to real workflows, not just platform features.",
      "Enable managers to coach against the same standards taught in sessions.",
      "Use 30/60/90-day reinforcement checkpoints to sustain adoption.",
    ],
    relatedServiceHref: "/services/saas-training",
    publishedDate: "2026-04-28",
    faqs: [
      {
        id: "saas-1",
        question: "Why does adoption often drop after go-live?",
        answer:
          "Most teams receive initial training but not ongoing reinforcement. Without manager coaching and workflow standards, users revert to old habits.",
      },
      {
        id: "saas-2",
        question: "Who should be included in adoption training?",
        answer:
          "Include frontline users, team leaders, and admins. Each group needs role-specific guidance to keep delivery standards aligned.",
      },
    ],
  },
  {
    slug: "ccaas-training-playbook",
    title: "A Practical CCaaS Training Playbook for Contact Centers",
    excerpt:
      "Contact center enablement should align agents, supervisors, and QA teams around one shared workflow model.",
    category: "CCaaS Training",
    readTime: "11 min read",
    body: [
      "CCaaS programs fail when teams train in isolation and quality processes do not map to live workflows. Agents learn one approach, supervisors coach another, and QA scorecards evaluate something else.",
      "A practical playbook starts with a shared handling model across voice, chat, and email. This creates a single operational definition of quality and consistency.",
      "Role-based learning paths should define what agents, team leaders, and QA analysts must each do in-platform during high-frequency scenarios such as escalations, callbacks, and queue overload.",
      "The strongest implementations include supervisor toolkits: coaching prompts, workflow checklists, and weekly quality review rituals tied to platform data.",
      "Calibration sessions are essential in the first 60 days. They align QA scoring with real customer interactions and prevent drift between policy and delivery.",
      "Reinforcement and coaching loops are essential to convert training into measurable customer experience improvements and sustainable operational performance.",
    ],
    keyTakeaways: [
      "Create one handling model for agents, supervisors, and QA.",
      "Build channel-specific practice scenarios before go-live.",
      "Run calibration loops in the first 60 days to maintain quality consistency.",
    ],
    relatedServiceHref: "/services/ccaas-training",
    publishedDate: "2026-04-28",
    faqs: [
      {
        id: "ccaas-1",
        question: "What is the most common CCaaS training mistake?",
        answer:
          "Training teams separately without a shared handling model. This causes misalignment between agent behavior, coaching, and QA scoring.",
      },
      {
        id: "ccaas-2",
        question: "How soon should calibration sessions start?",
        answer:
          "Start in the first two weeks after go-live and continue through the first 60 days to prevent workflow drift and quality inconsistency.",
      },
    ],
  },
  {
    slug: "ucaas-rollout-checklist",
    title: "UCaaS Rollout Checklist for Faster Team Adoption",
    excerpt:
      "A rollout succeeds when admin readiness, end-user onboarding, and post-launch reinforcement are planned together.",
    category: "UCaaS Adoption",
    readTime: "8 min read",
    body: [
      "UCaaS rollouts often create adoption friction when communication standards and usage expectations are unclear. Teams receive access but not enough role-specific guidance on how and when to use each channel.",
      "Pre-launch readiness should include admin configuration checks, governance decisions, and clear user guidance for messaging, calling, and meeting workflows.",
      "Managers need separate enablement from end users. They are responsible for enforcing communication norms and resolving adoption blockers within their teams.",
      "Phased enablement across admins, managers, and end users ensures consistency from launch week onward and reduces confusion during transition.",
      "Support demand tends to peak in weeks 1-3. Structured office hours, quick-reference guides, and escalation playbooks can materially reduce ticket volume.",
      "Post-launch follow-up closes capability gaps quickly and helps organisations move from basic usage to confident, standardised collaboration patterns.",
    ],
    keyTakeaways: [
      "Define communication standards before launch, not after.",
      "Train managers as adoption owners, not just end users.",
      "Use structured post-launch support to reduce avoidable tickets.",
    ],
    relatedServiceHref: "/services/ucaas-training",
    publishedDate: "2026-04-28",
    faqs: [
      {
        id: "ucaas-1",
        question: "What should be ready before UCaaS launch?",
        answer:
          "Admin configuration checks, communication governance decisions, and clear guidance on expected channel usage across teams.",
      },
      {
        id: "ucaas-2",
        question: "How can we reduce support load after rollout?",
        answer:
          "Use structured office hours, quick-reference guides, and clear escalation playbooks during the first 3 weeks post-launch.",
      },
    ],
  },
];
