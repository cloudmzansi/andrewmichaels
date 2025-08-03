import React from 'react';

const Alert = ({ children, variant = 'default', className = '', ...props }) => {
  const baseClass = 'neobrutalism-alert';
  const variantClass = variant !== 'default' ? variant : '';

  const alertClass = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <div className={alertClass} {...props}>
      {children}
    </div>
  );
};

export default Alert;
