// Responsive utilities for the application

import { BREAKPOINTS } from './constants';

export const responsiveHelpers = {
  // Check if current viewport matches breakpoint
  isMobile: () => window.innerWidth <= BREAKPOINTS.MOBILE,
  isTablet: () =>
    window.innerWidth > BREAKPOINTS.MOBILE &&
    window.innerWidth <= BREAKPOINTS.TABLET,
  isDesktop: () => window.innerWidth > BREAKPOINTS.TABLET,

  // Get current breakpoint
  getCurrentBreakpoint: () => {
    const width = window.innerWidth;
    if (width <= BREAKPOINTS.MOBILE) return 'mobile';
    if (width <= BREAKPOINTS.TABLET) return 'tablet';
    return 'desktop';
  },

  // Get responsive value based on breakpoint
  getResponsiveValue: (mobile, tablet, desktop) => {
    const breakpoint = responsiveHelpers.getCurrentBreakpoint();
    switch (breakpoint) {
      case 'mobile':
        return mobile;
      case 'tablet':
        return tablet || mobile;
      case 'desktop':
        return desktop || tablet || mobile;
      default:
        return mobile;
    }
  },
};

export const responsiveStyles = {
  // Container styles
  container: {
    mobile: {
      padding: 'var(--space-lg)',
      maxWidth: '100%',
    },
    tablet: {
      padding: 'var(--space-xl)',
      maxWidth: '100%',
    },
    desktop: {
      padding: 'var(--space-xl)',
      maxWidth: '1200px',
      margin: '0 auto',
    },
  },

  // Grid styles
  grid: {
    mobile: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'var(--space-md)',
    },
    tablet: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-lg)',
    },
    desktop: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-xl)',
    },
  },

  // Typography styles
  typography: {
    h1: {
      mobile: { fontSize: 'clamp(2rem, 6vw, 3rem)' },
      tablet: { fontSize: 'clamp(2.5rem, 7vw, 4rem)' },
      desktop: { fontSize: 'clamp(3rem, 8vw, 5rem)' },
    },
    h2: {
      mobile: { fontSize: 'clamp(1.5rem, 4vw, 2rem)' },
      tablet: { fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' },
      desktop: { fontSize: 'clamp(2rem, 6vw, 3rem)' },
    },
    h3: {
      mobile: { fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' },
      tablet: { fontSize: 'clamp(1.5rem, 4vw, 2rem)' },
      desktop: { fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' },
    },
    body: {
      mobile: { fontSize: '1rem' },
      tablet: { fontSize: '1.125rem' },
      desktop: { fontSize: '1.25rem' },
    },
  },

  // Spacing styles
  spacing: {
    section: {
      mobile: { padding: 'var(--space-2xl) 0' },
      tablet: { padding: 'var(--space-3xl) 0' },
      desktop: { padding: 'var(--space-4xl) 0' },
    },
    component: {
      mobile: { padding: 'var(--space-md)' },
      tablet: { padding: 'var(--space-lg)' },
      desktop: { padding: 'var(--space-xl)' },
    },
  },
};

// Utility function to get responsive styles
export const getResponsiveStyles = (styleType, variant = 'default') => {
  const styles = responsiveStyles[styleType];
  if (!styles) return {};

  const breakpoint = responsiveHelpers.getCurrentBreakpoint();
  return styles[breakpoint] || styles.mobile || {};
};

// Utility function to create responsive style object
export const createResponsiveStyleObject = (mobile, tablet, desktop) => {
  return {
    ...mobile,
    '@media (min-width: 768px)': tablet,
    '@media (min-width: 1024px)': desktop,
  };
};

// Hook for responsive values
export const useResponsiveValue = (mobile, tablet, desktop) => {
  return responsiveHelpers.getResponsiveValue(mobile, tablet, desktop);
};
