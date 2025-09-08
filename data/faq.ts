import { FAQItem, AlternativeFAQItem } from '@/types';

// Standard FAQ items for main accordion
export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "How does your payment structure work?",
    answer:
      "We use a three-stage payment structure for all website projects: 25% deposit to start the project, 25% when the website is nearly complete, and 50% upon final delivery. This ensures you only pay for completed work and helps us manage cash flow throughout the development process. This milestone-based approach gives you confidence that you're only paying for progress made.",
    controls: "uc-accordion-24",
    expanded: true,
  },
  {
    id: 2,
    question: "How long does it take to build a website?",
    answer:
      "Typically, a professional website takes 4-8 weeks from start to finish. This includes design, development, content creation, and testing. Complex e-commerce sites may take 8-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.",
    controls: "uc-accordion-26",
    expanded: false,
  },
  {
    id: 3,
    question: "Do you provide ongoing website maintenance?",
    answer:
      "Yes! We offer comprehensive maintenance packages starting from R750 once-off or R500/month. This includes security updates, content updates, performance monitoring, backups, and technical support. Many of our clients prefer our maintenance service to keep their websites running smoothly and securely.",
    controls: "uc-accordion-28",
    expanded: false,
  },
  {
    id: 4,
    question: "Do you help with SEO and digital marketing?",
    answer:
      "Yes! We offer comprehensive digital marketing services including SEO, Google Ads, social media management, and content marketing. Our team helps businesses in Durban and across South Africa improve their online visibility and attract more customers through strategic digital marketing campaigns.",
    controls: "uc-accordion-30",
    expanded: false,
  },
  {
    id: 5,
    question: "What if I need changes to my website after launch?",
    answer:
      "We provide 30 days of free minor adjustments after launch. For ongoing changes, we offer flexible support packages or charge per hour for specific updates. We're always here to help your website evolve with your business needs.",
    controls: "uc-accordion-32",
    expanded: false,
  },
  {
    id: 6,
    question: "What makes your web design different from competitors?",
    answer:
      "We focus on creating websites that actually drive business results, not just pretty designs. Our approach combines strategic thinking, conversion optimization, and technical excellence. We've helped South African businesses achieve remarkable growth through websites that convert visitors into customers.",
    controls: "uc-accordion-34",
    expanded: false,
  },
];

// Alternative FAQ items for different accordion styles
export const alternativeFaqItems: AlternativeFAQItem[] = [
  {
    id: 23,
    title: "Manage tasks",
    icon: "/assets/images/common/icons/zap.svg",
    content:
      "Offers a unified platform that fosters innovation while providing end-to-end data management.",
    isOpen: false,
  },
  {
    id: 25,
    title: "Set priorities",
    icon: "/assets/images/common/icons/target.svg",
    content:
      "Providing end-to-end data management. See how we help your team solve today's biggest challenges.",
    isOpen: false,
  },
  {
    id: 27,
    title: "Collaborate with your team",
    icon: "/assets/images/common/icons/settings.svg",
    content:
      "Our shared team inboxes keep everyone on the same page and in the loop.",
    isOpen: true,
  },
];

// Legacy exports for backward compatibility
export const accordionItems = faqItems;
export const accordionItems2 = alternativeFaqItems;
