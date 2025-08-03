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

  return (
    <div
      className={cardClass}
      onClick={onClick}
      style={{
        ...cardStyles,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', style = {}, ...props }) => {
  return (
    <div className={`card-header ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = '', style = {}, ...props }) => {
  return (
    <div className={`card-title ${className}`} style={style} {...props}>
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
    <div className={`card-description ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = '', style = {}, ...props }) => {
  return (
    <div className={`card-content ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = '', style = {}, ...props }) => {
  return (
    <div className={`card-footer ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};

const CardAction = ({ children, className = '', style = {}, ...props }) => {
  return (
    <div className={`card-action ${className}`} style={style} {...props}>
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
