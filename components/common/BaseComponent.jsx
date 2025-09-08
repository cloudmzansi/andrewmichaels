import React from 'react';
import { ANIMATION_CONFIG, UI_CONFIG } from '@/constants/config';

/**
 * Base component props interface (TypeScript-style documentation)
 */
export const BaseComponentProps = {
  // Common props that all components should support
  className: 'string',
  children: 'ReactNode',
  id: 'string',
  'data-testid': 'string',
  
  // Animation props
  animate: 'boolean',
  animationDelay: 'number',
  animationDuration: 'number',
  
  // Accessibility props
  'aria-label': 'string',
  'aria-describedby': 'string',
  role: 'string',
};

/**
 * Generate consistent animation data attributes
 */
export const generateAnimationData = (config = {}) => {
  const {
    targets = ANIMATION_CONFIG.TARGETS.CHILDREN,
    translateY = ANIMATION_CONFIG.TRANSFORMS.SLIDE_UP,
    opacity = ANIMATION_CONFIG.TRANSFORMS.FADE_IN,
    easing = ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC,
    duration = ANIMATION_CONFIG.DURATION.NORMAL,
    delay = ANIMATION_CONFIG.DELAY.STAGGER_SHORT,
    staggerStart = ANIMATION_CONFIG.DELAY.INITIAL_SHORT,
    onview = ANIMATION_CONFIG.ANIMATION_TRIGGER_OFFSET,
  } = config;

  return `onview: ${onview}; targets: ${targets}; translateY: ${translateY}; opacity: ${opacity}; easing: ${easing}; duration: ${duration}; delay: anime.stagger(${delay}, {start: ${staggerStart}});`;
};

/**
 * Generate consistent className strings
 */
export const generateClassName = (baseClasses = '', additionalClasses = '', conditionalClasses = {}) => {
  const classes = [baseClasses, additionalClasses];
  
  Object.entries(conditionalClasses).forEach(([className, condition]) => {
    if (condition) {
      classes.push(className);
    }
  });
  
  return classes.filter(Boolean).join(' ');
};

/**
 * Generate consistent button props
 */
export const generateButtonProps = (config = {}) => {
  const {
    size = UI_CONFIG.BUTTON_SIZES.MD,
    variant = UI_CONFIG.BUTTON_VARIANTS.PRIMARY,
    className = '',
    onClick,
    href,
    disabled = false,
    type = 'button',
    children,
    ...rest
  } = config;

  const baseClasses = `btn ${size} ${variant}`;
  const buttonClassName = generateClassName(baseClasses, className);

  return {
    className: buttonClassName,
    onClick,
    href,
    disabled,
    type,
    children,
    ...rest,
  };
};

/**
 * Generate consistent image props
 */
export const generateImageProps = (config = {}) => {
  const {
    src,
    alt,
    width,
    height,
    priority = false,
    quality = 85,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px',
    className = '',
    ...rest
  } = config;

  return {
    src,
    alt,
    width,
    height,
    priority,
    quality,
    sizes,
    className,
    ...rest,
  };
};

/**
 * Generate consistent section props
 */
export const generateSectionProps = (config = {}) => {
  const {
    id,
    className = '',
    animate = true,
    animationConfig = {},
    children,
    ...rest
  } = config;

  const baseClasses = 'section panel overflow-hidden';
  const sectionClassName = generateClassName(baseClasses, className);
  
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return {
    id,
    className: sectionClassName,
    'data-anime': animationData,
    children,
    ...rest,
  };
};

/**
 * Generate consistent container props
 */
export const generateContainerProps = (config = {}) => {
  const {
    className = '',
    maxWidth = 'xl',
    children,
    ...rest
  } = config;

  const baseClasses = 'container';
  const maxWidthClass = `max-w-${maxWidth}`;
  const containerClassName = generateClassName(baseClasses, className, {
    [maxWidthClass]: maxWidth !== 'full',
  });

  return {
    className: containerClassName,
    children,
    ...rest,
  };
};

/**
 * Generate consistent heading props
 */
export const generateHeadingProps = (config = {}) => {
  const {
    level = 2,
    size = UI_CONFIG.HEADING_SIZES.H2,
    className = '',
    children,
    ...rest
  } = config;

  const headingClassName = generateClassName(size, className);

  return {
    className: headingClassName,
    children,
    ...rest,
  };
};

/**
 * Generate consistent text props
 */
export const generateTextProps = (config = {}) => {
  const {
    size = UI_CONFIG.TEXT_SIZES.MD,
    className = '',
    children,
    ...rest
  } = config;

  const textClassName = generateClassName(size, className);

  return {
    className: textClassName,
    children,
    ...rest,
  };
};

/**
 * Generate consistent icon props
 */
export const generateIconProps = (config = {}) => {
  const {
    name,
    size = UI_CONFIG.ICON_SIZES.MD,
    className = '',
    ...rest
  } = config;

  const iconClassName = generateClassName(`icon ${size} ${name}`, className);

  return {
    className: iconClassName,
    ...rest,
  };
};

/**
 * Base component wrapper with common functionality
 */
export const BaseComponent = ({ 
  children, 
  className = '', 
  animate = false, 
  animationConfig = {},
  ...props 
}) => {
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;
  
  return (
    <div 
      className={className}
      data-anime={animationData}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Error boundary component for better error handling
 */
export class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary p-4 text-center">
          <h3 className="text-danger">Something went wrong</h3>
          <p className="text-muted">Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Loading component for consistent loading states
 */
export const LoadingComponent = ({ 
  size = 'md', 
  className = '', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg',
  };

  return (
    <div className={`d-flex justify-content-center align-items-center ${className}`}>
      <div className={`spinner-border ${sizeClasses[size]}`} role="status">
        <span className="visually-hidden">{text}</span>
      </div>
    </div>
  );
};

/**
 * Empty state component for consistent empty states
 */
export const EmptyStateComponent = ({ 
  title = 'No data available', 
  description = 'There is no data to display at this time.',
  icon = 'unicon-info-circle',
  className = '',
  children 
}) => {
  return (
    <div className={`empty-state text-center p-4 ${className}`}>
      <i className={`icon icon-2 ${icon} text-muted mb-3`}></i>
      <h4 className="text-muted mb-2">{title}</h4>
      <p className="text-muted mb-3">{description}</p>
      {children}
    </div>
  );
};
