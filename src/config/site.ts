export const siteConfig = {
  name: "EnableCX",
  description:
    "Specialist consultancy training for SaaS, CCaaS, and UCaaS teams.",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCta: {
    label: "Book a Call",
    href: "/book-call",
  },
  footerLinks: {
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "SaaS Training", href: "/services/saas-training" },
      { label: "CCaaS Training", href: "/services/ccaas-training" },
      { label: "UCaaS Training", href: "/services/ucaas-training" },
    ],
    legal: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
} as const;
