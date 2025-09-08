import React from 'react';
import { generateSectionProps, generateContainerProps, generateAnimationData } from './BaseComponent';
import { LAYOUT_CONFIG } from '@/constants/config';

/**
 * Standardized Section Component
 * Provides consistent section structure with animation support
 */
export const Section = ({ 
  id,
  className = '',
  children,
  animate = true,
  animationConfig = {},
  container = true,
  containerMaxWidth = 'xl',
  containerClassName = '',
  ...props 
}) => {
  const sectionProps = generateSectionProps({
    id,
    className,
    animate,
    animationConfig,
    children: container ? (
      <Container 
        maxWidth={containerMaxWidth}
        className={containerClassName}
      >
        {children}
      </Container>
    ) : children,
    ...props,
  });

  return <section {...sectionProps} />;
};

/**
 * Standardized Container Component
 * Provides consistent container structure
 */
export const Container = ({ 
  className = '',
  maxWidth = 'xl',
  children,
  ...props 
}) => {
  const containerProps = generateContainerProps({
    className,
    maxWidth,
    children,
    ...props,
  });

  return <div {...containerProps} />;
};

/**
 * Standardized Section Header Component
 * Provides consistent section header structure
 */
export const SectionHeader = ({ 
  className = '',
  children,
  animate = true,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'section-header vstack items-center gap-2 lg:gap-3';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <div 
      className={`${baseClasses} ${className}`}
      data-anime={animationData}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Standardized Section Content Component
 * Provides consistent section content structure
 */
export const SectionContent = ({ 
  className = '',
  children,
  animate = true,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'section-inner panel';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <div 
      className={`${baseClasses} ${className}`}
      data-anime={animationData}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Standardized Section Outer Component
 * Provides consistent section outer structure
 */
export const SectionOuter = ({ 
  className = '',
  children,
  animate = true,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'section-outer panel';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <div 
      className={`${baseClasses} ${className}`}
      data-anime={animationData}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Standardized Row Component
 * Provides consistent row structure
 */
export const Row = ({ 
  className = '',
  children,
  animate = true,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'row';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <div 
      className={`${baseClasses} ${className}`}
      data-anime={animationData}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Standardized Column Component
 * Provides consistent column structure
 */
export const Column = ({ 
  className = '',
  children,
  animate = true,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'col';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <div 
      className={`${baseClasses} ${className}`}
      data-anime={animationData}
      {...props}
    >
      {children}
    </div>
  );
};
