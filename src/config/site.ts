export const siteConfig = {
  name: "EnableCX",
  description:
    "Specialist consultancy training that improves platform adoption, team confidence, and customer experience consistency.",
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
      { label: "Platform Adoption Training", href: "/services/saas-training" },
      { label: "Workflow Enablement Training", href: "/services/ccaas-training" },
      { label: "Rollout Training", href: "/services/ucaas-training" },
    ],
    legal: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
} as const;
