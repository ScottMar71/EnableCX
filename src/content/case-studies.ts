export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  publishedDate: string;
  challenge: string;
  approach: string;
  delivery: string;
  results: string[];
  quote: string;
  quoteAttribution: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "travel-support-adoption-acceleration",
    title: "Support Team Adoption Acceleration in Travel Operations",
    industry: "Travel Operations",
    publishedDate: "2026-04-28",
    challenge:
      "A global travel organisation implemented a unified customer support platform for email, live chat, social messaging, and web forms, but adoption remained uneven across regions and teams. Agents handled enquiries inconsistently by channel and location, key features like routing and macros were underused, and seasonal peaks exposed workflow and onboarding gaps that drove unpredictable response times.",
    approach:
      "EnableCX focused on workflow-led enablement grounded in real travel scenarios, channel-agnostic consistency, and confidence at scale. We mapped end-to-end support journeys, identified breakdowns in handling and escalation, defined ideal workflows for core travel cases, and aligned operational leaders on service standards.",
    delivery:
      "The programme combined scenario-based workshops, embedded macros and knowledge, queue and routing optimisation, team lead coaching, and in-flow guidance for live interactions. This gave agents practical decision support in high-volume and time-sensitive situations while reinforcing consistent ways of working.",
    results: [
      "Higher platform adoption and reduced reliance on external workarounds.",
      "More consistent handling of traveller enquiries across channels and regions.",
      "Improved response and resolution times during peak travel periods.",
      "Increased agent confidence for complex, time-sensitive traveller cases.",
      "Faster onboarding and ramp-up for seasonal agents.",
      "Better visibility into performance and service quality through structured workflows.",
    ],
    quote:
      "Our support function became a scalable, resilient operation that could absorb demand fluctuations while maintaining a high standard of service for travellers.",
    quoteAttribution: "Operations Leadership Team, Global Travel Organisation",
  },
  {
    slug: "financial-services-cloud-communications-transformation",
    title: "Transforming Customer Experience Through Cloud Communications",
    industry: "Financial Services",
    publishedDate: "2026-04-28",
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
    quoteAttribution: "Programme Sponsor, UK Financial Services Provider",
  },
  {
    slug: "ccaas-quality-consistency",
    title: "CCaaS Quality and Workflow Consistency Program",
    industry: "Customer Operations",
    publishedDate: "2026-04-28",
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
    quoteAttribution: "Customer Operations Director, Contact Centre Group",
  },
];
