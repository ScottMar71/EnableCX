export type CaseStudy = {
  slug: string;
  title: string;
  /** Short summary for SERPs and social cards (keep roughly under ~160 characters). */
  excerpt: string;
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
    excerpt:
      "How workflow-led CCaaS training improved adoption, consistency, and response times for a global travel support organisation.",
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
    excerpt:
      "Financial services CCaaS/UCaaS transformation: routing, training, and adoption support that cut handling times and improved service quality.",
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
    slug: "mobile-healthcare-platform-adoption",
    title: "Improving Platform Adoption for a Mobile Healthcare Provider",
    excerpt:
      "Role-based SaaS training for ambulance dispatch and crews: faster onboarding, cleaner data, and fewer dispatch workarounds.",
    industry: "Healthcare Transport",
    publishedDate: "2026-04-28",
    challenge:
      "A UK-based private ambulance provider delivering patient transport and urgent care services across regional contracts operates a fully mobile workforce. Their teams rely on a SaaS-based GPS tracking and dispatch platform to coordinate vehicles, manage schedules, and support time-sensitive care—often working closely with community services, including residential and care home settings. Despite investing in a modern GPS-enabled platform, adoption across frontline crews and operational teams was inconsistent. Different teams used the system in different ways, leading to gaps in tracking and reporting. Dispatch relied on manual workarounds to manage demand. New starters took too long to become fully effective. Inconsistent data made it harder to plan routes and respond efficiently—particularly when supporting vulnerable patients in community and care environments. The platform was in place, but it was not being used in a consistent, structured way—limiting its operational value.",
    approach:
      "EnableCX delivered a structured, role-based training programme focused on real-world usage: mapping key workflows across dispatch, field crews, and operations; designing role-specific training aligned to day-to-day responsibilities; standardising how the platform should be used across all teams; delivering hands-on sessions using realistic scenarios, including time-critical collections and care-based journeys; and establishing clear best practices to remove ambiguity and reduce variation.",
    delivery:
      "Training was delivered in phases to minimise disruption to active services: live, interactive sessions for dispatch and control teams; practical onboarding for frontline crews operating in the field; supporting materials and quick-reference guides for use during shifts; and follow-up sessions to reinforce consistent behaviours.",
    results: [
      "30–40% reduction in onboarding time for new starters.",
      "25% improvement in data accuracy across tracking and job updates.",
      "20% reduction in manual workarounds within dispatch operations.",
      "15–20% faster job allocation and response coordination.",
      "Increased first-time data capture consistency across crews.",
      "Noticeable improvement in service reliability for community and care-based journeys.",
    ],
    quote:
      "Structured, role-based training turned our platform from something people used differently into something we all rely on the same way—especially when every minute matters for patients.",
    quoteAttribution: "Operations Leadership, UK Private Ambulance Provider",
  },
];
