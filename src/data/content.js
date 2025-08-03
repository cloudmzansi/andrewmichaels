// Shared content data for the application

export const COMPANY_INFO = {
  name: 'CLOUD MZANSI',
  tagline: 'Structured Rebellion in Design',
  description:
    'We fuse the raw energy of Neobrutalism with the precision of structured design. Every element is intentional, every colour purposeful, every interaction meaningful.',
  subtext:
    'Breaking conventions while maintaining clarity. Creating chaos with purpose. This is where rebellion meets structure, where bold meets refined.',
};

export const SERVICES_DATA = [
  {
    id: 'web-design',
    title: 'Web Design',
    description:
      'Bold, structured websites that break conventions while maintaining clarity.',
    icon: '🎨',
    color: 'var(--accent-blue)',
  },
  {
    id: 'branding',
    title: 'Branding',
    description:
      'Distinctive brand identities that stand out in a crowded marketplace.',
    icon: '🏷️',
    color: 'var(--accent-teal)',
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'Robust, scalable applications built with modern technologies.',
    icon: '⚙️',
    color: 'var(--accent-green)',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Strategic guidance to help your business grow and succeed.',
    icon: '💡',
    color: 'var(--accent-violet)',
  },
];

export const WORK_PROJECTS = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce solution with neobrutalism design principles.',
    image: '/project-1.jpg',
    category: 'Web Development',
    color: 'var(--accent-blue)',
  },
  {
    id: 'project-2',
    title: 'Brand Identity',
    description: 'Complete brand identity for a tech startup.',
    image: '/project-2.jpg',
    category: 'Branding',
    color: 'var(--accent-teal)',
  },
  {
    id: 'project-3',
    title: 'Mobile App',
    description: 'Cross-platform mobile application with intuitive UX.',
    image: '/project-3.jpg',
    category: 'Mobile Development',
    color: 'var(--accent-green)',
  },
];

export const CONTACT_INFO = {
  email: 'hello@cloudmzansi.com',
  phone: '+27 123 456 789',
  address: 'Johannesburg, South Africa',
  social: {
    twitter: '@cloudmzansi',
    linkedin: 'cloudmzansi',
    instagram: '@cloudmzansi',
  },
};

export const FOOTER_LINKS = {
  company: [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Web Design', path: '/services#web-design' },
    { label: 'Branding', path: '/services#branding' },
    { label: 'Development', path: '/services#development' },
    { label: 'Consulting', path: '/services#consulting' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookies' },
  ],
};
