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

  const Comp = asChild ? 'span' : 'button';

  return (
    <Comp
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...buttonStyles,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
    >
      {children}
    </Comp>
  );
};

export default Button;
