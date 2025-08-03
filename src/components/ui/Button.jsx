import React from 'react';
import { createButtonStyles } from '../../utils/styles';

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  asChild = false,
  style = {},
}) => {
  const baseClass = 'neobrutalism-button';
  const variantClass = variant !== 'primary' ? variant : '';
  const sizeClass = size !== 'default' ? `button-${size}` : '';
  const disabledClass = disabled ? 'disabled' : '';

  const buttonClass =
    `${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim();
  const buttonStyles = createButtonStyles(variant, size);

  // AGGRESSIVE BUTTON STYLES
  const aggressiveStyles = {
    ...buttonStyles,
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'Space Mono, monospace',
    fontWeight: '700',
    fontSize: '1.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    border: '4px solid var(--border-and-outline)',
    boxShadow: '6px 6px 0 0 var(--border-and-outline)',
    transition: 'all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    transform: 'rotate(-2deg)',
    textShadow: '2px 2px 0 var(--accent-magenta)',
    position: 'relative',
    overflow: 'hidden',
    ...style,
  };

  // AGGRESSIVE VARIANT STYLES
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'var(--accent-magenta)',
          color: 'white',
          textShadow: '2px 2px 0 var(--border-and-outline)',
        };
      case 'secondary':
        return {
          background: 'var(--accent-teal)',
          color: 'white',
          textShadow: '2px 2px 0 var(--border-and-outline)',
        };
      case 'success':
        return {
          background: 'var(--accent-green)',
          color: 'var(--text-primary)',
          textShadow: '2px 2px 0 var(--border-and-outline)',
        };
      case 'violet':
        return {
          background: 'var(--accent-violet)',
          color: 'white',
          textShadow: '2px 2px 0 var(--border-and-outline)',
        };
      case 'orange':
        return {
          background: 'var(--accent-orange)',
          color: 'white',
          textShadow: '2px 2px 0 var(--border-and-outline)',
        };
      case 'yellow':
        return {
          background: 'var(--accent-yellow)',
          color: 'var(--text-primary)',
          textShadow: '2px 2px 0 var(--border-and-outline)',
        };
      case 'outline':
        return {
          background: 'transparent',
          color: 'var(--text-primary)',
          textShadow: '2px 2px 0 var(--accent-magenta)',
        };
      default:
        return {
          background: 'var(--background-primary)',
          color: 'var(--text-primary)',
          textShadow: '2px 2px 0 var(--accent-magenta)',
        };
    }
  };

  const Comp = asChild ? 'span' : 'button';

  return (
    <Comp
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...aggressiveStyles,
        ...getVariantStyles(),
        opacity: disabled ? 0.5 : 1,
        transform: disabled ? 'rotate(-2deg) scale(0.95)' : 'rotate(-2deg)',
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.target.style.transform = 'translate(-4px, -4px) rotate(-1deg)';
          e.target.style.boxShadow = '10px 10px 0 0 var(--border-and-outline)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.target.style.transform = 'rotate(-2deg)';
          e.target.style.boxShadow = '6px 6px 0 0 var(--border-and-outline)';
        }
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.target.style.transform = 'translate(0, 0) rotate(-2deg)';
          e.target.style.boxShadow = '6px 6px 0 0 var(--border-and-outline)';
        }
      }}
    >
      {children}
    </Comp>
  );
};

export default Button;
