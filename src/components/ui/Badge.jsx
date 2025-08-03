import React from 'react';

const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const baseClass = 'neobrutalism-badge';
  const variantClass = variant !== 'default' ? `badge-${variant}` : '';

  const badgeClass = `${baseClass} ${variantClass} ${className}`.trim();

  // AGGRESSIVE BADGE STYLES
  const aggressiveStyles = {
    display: 'inline-block',
    padding: 'var(--space-xs) var(--space-sm)',
    fontFamily: 'Space Mono, monospace',
    fontWeight: '700',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    border: '2px solid var(--border-and-outline)',
    background: 'var(--background-primary)',
    color: 'var(--text-primary)',
    boxShadow: '3px 3px 0 0 var(--border-and-outline)',
    margin: 'var(--space-xs)',
    transform: 'rotate(-1deg)',
    transition: 'all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    position: 'relative',
    overflow: 'hidden',
  };

  // AGGRESSIVE VARIANT STYLES
  const getVariantStyles = () => {
    switch (variant) {
      case 'blue':
        return {
          background: 'var(--accent-blue)',
          color: 'white',
          textShadow: '1px 1px 0 var(--border-and-outline)',
        };
      case 'teal':
        return {
          background: 'var(--accent-teal)',
          color: 'white',
          textShadow: '1px 1px 0 var(--border-and-outline)',
        };
      case 'green':
        return {
          background: 'var(--accent-green)',
          color: 'var(--text-primary)',
          textShadow: '1px 1px 0 var(--border-and-outline)',
        };
      case 'violet':
        return {
          background: 'var(--accent-violet)',
          color: 'white',
          textShadow: '1px 1px 0 var(--border-and-outline)',
        };
      case 'orange':
        return {
          background: 'var(--accent-orange)',
          color: 'white',
          textShadow: '1px 1px 0 var(--border-and-outline)',
        };
      case 'yellow':
        return {
          background: 'var(--accent-yellow)',
          color: 'var(--text-primary)',
          textShadow: '1px 1px 0 var(--border-and-outline)',
        };
      case 'red':
        return {
          background: 'var(--accent-red)',
          color: 'white',
          textShadow: '1px 1px 0 var(--border-and-outline)',
        };
      case 'magenta':
        return {
          background: 'var(--accent-magenta)',
          color: 'white',
          textShadow: '1px 1px 0 var(--border-and-outline)',
        };
      default:
        return {
          background: 'var(--background-primary)',
          color: 'var(--text-primary)',
          textShadow: '1px 1px 0 var(--accent-magenta)',
        };
    }
  };

  return (
    <div 
      className={badgeClass} 
      style={{
        ...aggressiveStyles,
        ...getVariantStyles(),
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translate(-2px, -2px) rotate(1deg)';
        e.target.style.boxShadow = '5px 5px 0 0 var(--border-and-outline)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'rotate(-1deg)';
        e.target.style.boxShadow = '3px 3px 0 0 var(--border-and-outline)';
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
