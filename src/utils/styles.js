// Common styling utilities for the Neobrutalism design system

// Base component styles
export const neobrutalismStyles = {
  base: {
    fontFamily: 'Inter, sans-serif',
    border: 'var(--border-thickness) solid var(--border-and-outline)',
    boxShadow:
      'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },

  // Interactive states
  hover: {
    transform: 'translate(-1px, -1px)',
    boxShadow:
      'calc(var(--shadow-offset) + 1px) calc(var(--shadow-offset) + 1px) 0 0 var(--border-and-outline)',
  },

  active: {
    transform: 'translate(0, 0)',
    boxShadow:
      'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
  },

  // Component variants
  button: {
    primary: {
      backgroundColor: 'var(--accent-teal)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'var(--background-primary)',
      color: 'var(--text-primary)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--text-primary)',
    },
  },

  card: {
    default: {
      backgroundColor: 'var(--background-primary)',
      color: 'var(--text-primary)',
    },
    accent: {
      backgroundColor: 'var(--accent-light-blue)',
      color: 'var(--text-primary)',
    },
  },

  // Typography styles
  text: {
    heading: {
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    body: {
      fontWeight: '400',
      lineHeight: '1.6',
    },
    caption: {
      fontWeight: '500',
      fontSize: '0.875rem',
    },
  },

  // Spacing utilities
  spacing: {
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)',
    '2xl': 'var(--space-2xl)',
    '3xl': 'var(--space-3xl)',
    '4xl': 'var(--space-4xl)',
  },
};

// Utility function to merge multiple style objects
export const mergeStyles = (...styleObjects) => {
  return styleObjects.reduce(
    (merged, current) => ({ ...merged, ...current }),
    {}
  );
};

// Create responsive styles (for future use)
export const createResponsiveStyles = (desktop, mobile) => ({
  ...desktop,
  '@media (max-width: 768px)': mobile,
});

// Generate button styles with variant and size
export const createButtonStyles = (variant = 'primary', size = 'default') => {
  const baseStyles = mergeStyles(
    neobrutalismStyles.base,
    neobrutalismStyles.button[variant]
  );

  const sizeStyles = {
    small: { padding: 'var(--space-xs) var(--space-sm)', fontSize: '0.875rem' },
    default: { padding: 'var(--space-sm) var(--space-md)', fontSize: '1rem' },
    large: { padding: 'var(--space-md) var(--space-lg)', fontSize: '1.125rem' },
  };

  return mergeStyles(baseStyles, sizeStyles[size] || sizeStyles.default);
};

// Generate card styles with variant
export const createCardStyles = (variant = 'default') => {
  return mergeStyles(neobrutalismStyles.base, neobrutalismStyles.card[variant]);
};
