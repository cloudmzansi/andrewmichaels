import React from 'react';

const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const baseClass = 'neobrutalism-badge';
  const variantClass = variant !== 'default' ? `badge-${variant}` : '';

  const badgeClass = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <div className={badgeClass} {...props}>
      {children}
    </div>
  );
};

export default Badge;
