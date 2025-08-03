import React from 'react';
import { createCardStyles } from '../../utils/styles';

const Card = ({
  children,
  className = '',
  onClick,
  variant = 'default',
  style = {},
}) => {
  const baseClass = 'neobrutalism-card';
  const variantClass = variant !== 'default' ? variant : '';
  const clickableClass = onClick ? 'clickable' : '';

  const cardClass =
    `${baseClass} ${variantClass} ${clickableClass} ${className}`.trim();
  const cardStyles = createCardStyles(variant);

  // AGGRESSIVE CARD STYLES
  const aggressiveStyles = {
    ...cardStyles,
    cursor: onClick ? 'pointer' : 'default',
    border: '4px solid var(--border-and-outline)',
    boxShadow: '6px 6px 0 0 var(--border-and-outline)',
    transition: 'all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    transform: 'rotate(-3deg)',
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--background-primary)',
    ...style,
  };

  // AGGRESSIVE CARD ACCENT STYLES
  const getAccentStyles = () => {
    switch (variant) {
      case 'accent-blue':
        return {
          background: 'linear-gradient(135deg, var(--background-primary) 0%, var(--accent-light-blue) 100%)',
        };
      case 'accent-teal':
        return {
          background: 'linear-gradient(135deg, var(--background-primary) 0%, var(--accent-light-teal) 100%)',
        };
      case 'accent-green':
        return {
          background: 'linear-gradient(135deg, var(--background-primary) 0%, var(--accent-light-green) 100%)',
        };
      case 'accent-violet':
        return {
          background: 'linear-gradient(135deg, var(--background-primary) 0%, var(--accent-light-violet) 100%)',
        };
      case 'accent-orange':
        return {
          background: 'linear-gradient(135deg, var(--background-primary) 0%, var(--accent-light-orange) 100%)',
        };
      case 'accent-yellow':
        return {
          background: 'linear-gradient(135deg, var(--background-primary) 0%, var(--accent-light-yellow) 100%)',
        };
      case 'accent-magenta':
        return {
          background: 'linear-gradient(135deg, var(--background-primary) 0%, var(--accent-light-magenta) 100%)',
        };
      default:
        return {
          background: 'var(--background-primary)',
        };
    }
  };

  return (
    <div
      className={cardClass}
      onClick={onClick}
      style={{
        ...aggressiveStyles,
        ...getAccentStyles(),
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.target.style.transform = 'translate(-4px, -4px) rotate(-1deg)';
          e.target.style.boxShadow = '10px 10px 0 0 var(--border-and-outline)';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.target.style.transform = 'rotate(-3deg)';
          e.target.style.boxShadow = '6px 6px 0 0 var(--border-and-outline)';
        }
      }}
      onMouseDown={(e) => {
        if (onClick) {
          e.target.style.transform = 'translate(0, 0) rotate(-3deg)';
          e.target.style.boxShadow = '6px 6px 0 0 var(--border-and-outline)';
        }
      }}
    >
      {/* AGGRESSIVE CARD DECORATION */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '30px',
          height: '30px',
          background: 'var(--accent-yellow)',
          border: '2px solid var(--border-and-outline)',
          boxShadow: '3px 3px 0 0 var(--border-and-outline)',
          transform: 'rotate(45deg)',
          zIndex: 1,
        }}
      />
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', style = {}, ...props }) => {
  return (
    <div 
      className={`card-header ${className}`} 
      style={{
        ...style,
        padding: 'var(--space-xl)',
        borderBottom: '2px solid var(--border-and-outline)',
        marginBottom: 'var(--space-lg)',
        transform: 'rotate(1deg)',
      }} 
      {...props}
    >
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = '', style = {}, ...props }) => {
  return (
    <div 
      className={`card-title ${className}`} 
      style={{
        ...style,
        fontSize: '2rem',
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        textShadow: '2px 2px 0 var(--accent-magenta)',
        transform: 'rotate(-1deg)',
      }} 
      {...props}
    >
      {children}
    </div>
  );
};

const CardDescription = ({
  children,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`card-description ${className}`} 
      style={{
        ...style,
        fontSize: '1.125rem',
        lineHeight: '1.6',
        color: 'var(--text-secondary)',
        transform: 'rotate(1deg)',
      }} 
      {...props}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, className = '', style = {}, ...props }) => {
  return (
    <div 
      className={`card-content ${className}`} 
      style={{
        ...style,
        padding: 'var(--space-xl)',
        transform: 'rotate(-1deg)',
      }} 
      {...props}
    >
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = '', style = {}, ...props }) => {
  return (
    <div 
      className={`card-footer ${className}`} 
      style={{
        ...style,
        padding: 'var(--space-xl)',
        borderTop: '2px solid var(--border-and-outline)',
        marginTop: 'var(--space-lg)',
        transform: 'rotate(1deg)',
      }} 
      {...props}
    >
      {children}
    </div>
  );
};

const CardAction = ({ children, className = '', style = {}, ...props }) => {
  return (
    <div 
      className={`card-action ${className}`} 
      style={{
        ...style,
        padding: 'var(--space-lg)',
        transform: 'rotate(-1deg)',
      }} 
      {...props}
    >
      {children}
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
};
