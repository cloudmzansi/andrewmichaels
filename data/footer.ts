import { FooterSection } from '@/types';

// Standardized footer data structure
export const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { text: "Web Design", href: "#services", isLink: false },
      { text: "eCommerce", href: "#services", isLink: false },
      { text: "Website Maintenance", href: "#services", isLink: false },
      { text: "Portfolio", href: "#main_features", isLink: false },
      { text: "Digital Marketing", href: "#services", isLink: false },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About us", href: "#about", isLink: false },
      { text: "Our Services", href: "#services", isLink: false },
      { text: "Pricing", href: "#pricing", isLink: false },
      { text: "Testimonials", href: "#testimonials", isLink: false },
      { text: "Contact", href: "#contact", isLink: false },
    ],
  },
];

// Legacy export for backward compatibility
export const footerLinks6 = footerSections;
