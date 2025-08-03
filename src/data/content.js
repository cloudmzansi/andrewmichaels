// Shared content data for the application

export const COMPANY_INFO = {
  name: 'CLOUD MZANSI',
  tagline: 'Web Design with Structured Rebellion',
  description:
    'We are a web design agency that creates powerful digital experiences for businesses. Our unique approach combines bold, rebellious design with strategic structure to deliver websites that stand out and drive results.',
  subtext:
    'Breaking conventions while maintaining clarity. Creating bold experiences with purposeful design. This is where rebellion meets results.',
};

export const SERVICES_DATA = [
  {
    id: 'web-design',
    title: 'Website Design',
    description:
      'Bold, structured websites that break conventions while maintaining perfect functionality and user experience.',
    icon: '🎨',
    color: 'var(--accent-blue)',
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    description:
      'Distinctive brand identities that stand out in a crowded marketplace with rebellious visual elements.',
    icon: '🏷️',
    color: 'var(--accent-teal)',
  },
  {
    id: 'development',
    title: 'Web Development',
    description:
      'Robust, scalable web applications built with modern technologies and bold design principles.',
    icon: '⚙️',
    color: 'var(--accent-green)',
  },
  {
    id: 'consulting',
    title: 'Digital Strategy',
    description: 'Strategic guidance to help your business grow and succeed in the digital landscape.',
    icon: '💡',
    color: 'var(--accent-violet)',
  },
];

export const WORK_PROJECTS = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce solution with bold design principles and seamless user experience.',
    image: '/project-1.jpg',
    category: 'Web Development',
    color: 'var(--accent-blue)',
  },
  {
    id: 'project-2',
    title: 'Brand Identity',
    description: 'Complete brand identity for a tech startup with rebellious visual elements.',
    image: '/project-2.jpg',
    category: 'Branding',
    color: 'var(--accent-teal)',
  },
  {
    id: 'project-3',
    title: 'Corporate Website',
    description: 'Professional website with bold design elements that capture attention.',
    image: '/project-3.jpg',
    category: 'Web Design',
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
    { label: 'Website Design', path: '/services#web-design' },
    { label: 'Brand Identity', path: '/services#branding' },
    { label: 'Web Development', path: '/services#development' },
    { label: 'Digital Strategy', path: '/services#consulting' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookies' },
  ],
};
