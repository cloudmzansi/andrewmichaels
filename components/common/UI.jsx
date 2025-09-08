import React from 'react';
import { generateButtonProps, generateImageProps, generateHeadingProps, generateTextProps, generateIconProps, generateAnimationData } from './BaseComponent';
import { UI_CONFIG, IMAGE_CONFIG } from '@/constants/config';
import NextImage from 'next/image';

/**
 * Standardized Button Component
 * Provides consistent button structure and behavior
 */
export const Button = ({ 
  children,
  size = UI_CONFIG.BUTTON_SIZES.MD,
  variant = UI_CONFIG.BUTTON_VARIANTS.PRIMARY,
  className = '',
  onClick,
  href,
  disabled = false,
  type = 'button',
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const buttonProps = generateButtonProps({
    size,
    variant,
    className,
    onClick,
    href,
    disabled,
    type,
    children,
    ...props,
  });

  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  if (href) {
    return (
      <a 
        {...buttonProps}
        data-anime={animationData}
        href={href}
      />
    );
  }

  return (
    <button 
      {...buttonProps}
      data-anime={animationData}
    />
  );
};

/**
 * Standardized Image Component
 * Wrapper around Next.js Image with consistent props
 */
export const Image = ({ 
  src,
  alt,
  width,
  height,
  priority = false,
  quality = IMAGE_CONFIG.DEFAULT_QUALITY,
  sizes = IMAGE_CONFIG.SIZES.MOBILE + ', ' + IMAGE_CONFIG.SIZES.TABLET + ', ' + IMAGE_CONFIG.SIZES.DESKTOP,
  className = '',
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const imageProps = generateImageProps({
    src,
    alt,
    width,
    height,
    priority,
    quality,
    sizes,
    className,
    ...props,
  });

  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <NextImage 
      {...imageProps}
      data-anime={animationData}
    />
  );
};

/**
 * Standardized Heading Component
 * Provides consistent heading structure
 */
export const Heading = ({ 
  level = 2,
  size = UI_CONFIG.HEADING_SIZES.H2,
  className = '',
  children,
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const headingProps = generateHeadingProps({
    level,
    size,
    className,
    children,
    ...props,
  });

  const animationData = animate ? generateAnimationData(animationConfig) : undefined;
  const Tag = `h${level}`;

  return (
    <Tag 
      {...headingProps}
      data-anime={animationData}
    />
  );
};

/**
 * Standardized Text Component
 * Provides consistent text structure
 */
export const Text = ({ 
  size = UI_CONFIG.TEXT_SIZES.MD,
  className = '',
  children,
  animate = false,
  animationConfig = {},
  as: Component = 'p',
  ...props 
}) => {
  const textProps = generateTextProps({
    size,
    className,
    children,
    ...props,
  });

  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <Component 
      {...textProps}
      data-anime={animationData}
    />
  );
};

/**
 * Standardized Icon Component
 * Provides consistent icon structure
 */
export const Icon = ({ 
  name,
  size = UI_CONFIG.ICON_SIZES.MD,
  className = '',
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const iconProps = generateIconProps({
    name,
    size,
    className,
    ...props,
  });

  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <i 
      {...iconProps}
      data-anime={animationData}
    />
  );
};

/**
 * Standardized Card Component
 * Provides consistent card structure
 */
export const Card = ({ 
  className = '',
  children,
  animate = true,
  animationConfig = {},
  padding = 'md',
  ...props 
}) => {
  const paddingClasses = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
    xl: 'p-5',
  };

  const baseClasses = `panel rounded-1-5 lg:rounded-2 bg-white text-dark shadow-xs ${paddingClasses[padding]}`;
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
 * Standardized Badge Component
 * Provides consistent badge structure
 */
export const Badge = ({ 
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-dark',
    success: 'bg-success text-white',
    warning: 'bg-warning text-dark',
    danger: 'bg-danger text-white',
    info: 'bg-info text-white',
    light: 'bg-light text-dark',
    dark: 'bg-dark text-white',
  };

  const sizeClasses = {
    sm: 'fs-7 py-narrow px-1',
    md: 'fs-6 py-narrow px-2',
    lg: 'fs-5 py-1 px-3',
  };

  const baseClasses = `badge ${variantClasses[variant]} ${sizeClasses[size]} border rounded-pill`;
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <span 
      className={`${baseClasses} ${className}`}
      data-anime={animationData}
      {...props}
    >
      {children}
    </span>
  );
};
