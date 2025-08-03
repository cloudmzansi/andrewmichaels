import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  // Get the current path and create breadcrumb items
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');

  // Map path segments to readable names
  const getBreadcrumbName = segment => {
    const nameMap = {
      about: 'About',
      services: 'Services',
      work: 'Work',
      contact: 'Contact',
    };
    return (
      nameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    );
  };

  // Don't show breadcrumb on home page
  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <nav
      className="breadcrumb"
      style={{
        padding: 'var(--space-md) 0',
        marginBottom: 'var(--space-lg)',
        borderBottom: 'var(--border-thickness) solid var(--border-light)',
        backgroundColor: 'var(--background-secondary)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/"
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: 'var(--space-xs) var(--space-sm)',
              border: 'var(--border-thickness) solid transparent',
              transition: 'all 0.3s ease',
              borderRadius: 'var(--border-radius)',
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = 'var(--border-and-outline)';
              e.target.style.backgroundColor = 'var(--accent-light-blue)';
              e.target.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = 'transparent';
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--text-muted)';
            }}
          >
            Home
          </Link>

          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            const path = '/' + pathSegments.slice(0, index + 1).join('/');
            const name = getBreadcrumbName(segment);

            return (
              <React.Fragment key={segment}>
                <span
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                  }}
                >
                  /
                </span>
                {isLast ? (
                  <span
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: '700',
                      fontSize: '0.875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: 'var(--space-xs) var(--space-sm)',
                      backgroundColor: 'var(--accent-light-blue)',
                      border:
                        'var(--border-thickness) solid var(--border-and-outline)',
                      borderRadius: 'var(--border-radius)',
                      boxShadow:
                        'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
                    }}
                  >
                    {name}
                  </span>
                ) : (
                  <Link
                    to={path}
                    style={{
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: 'var(--space-xs) var(--space-sm)',
                      border: 'var(--border-thickness) solid transparent',
                      transition: 'all 0.3s ease',
                      borderRadius: 'var(--border-radius)',
                    }}
                    onMouseEnter={e => {
                      e.target.style.borderColor = 'var(--border-and-outline)';
                      e.target.style.backgroundColor =
                        'var(--accent-light-blue)';
                      e.target.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={e => {
                      e.target.style.borderColor = 'transparent';
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--text-muted)';
                    }}
                  >
                    {name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
