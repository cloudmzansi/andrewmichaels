// Application constants and configuration

// Responsive breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200,
};

// Application routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  WORK: '/work',
  CONTACT: '/contact',
};

// Navigation menu items
export const NAVIGATION_ITEMS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.SERVICES, label: 'Services' },
  { path: ROUTES.WORK, label: 'Work' },
  { path: ROUTES.CONTACT, label: 'Contact' },
];

// Accent colours for design system
export const ACCENT_COLORS = {
  BLUE: 'var(--accent-blue)',
  TEAL: 'var(--accent-teal)',
  GREEN: 'var(--accent-green)',
  VIOLET: 'var(--accent-violet)',
  ORANGE: 'var(--accent-orange)',
  YELLOW: 'var(--accent-yellow)',
  RED: 'var(--accent-red)',
};

// Animation timing constants
export const ANIMATION_DURATIONS = {
  FAST: '0.15s',
  NORMAL: '0.3s',
  SLOW: '0.5s',
};

// Z-index layering system
export const Z_INDEX = {
  DROPDOWN: 1000,
  MODAL: 1050,
  TOOLTIP: 1100,
  TOAST: 1150,
};
