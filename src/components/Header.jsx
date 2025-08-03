import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMobile } from '../hooks/useMobile';
import { useClickOutside } from '../hooks/useClickOutside';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { NAVIGATION_ITEMS, ACCENT_COLORS, Z_INDEX } from '../utils/constants';
import { neobrutalismStyles, mergeStyles } from '../utils/styles';

// Style objects extracted for better readability
const createHeaderStyles = () => ({
  background: 'var(--background-primary)',
  borderBottom: 'var(--border-thickness) solid var(--border-and-outline)',
  boxShadow: '0 var(--shadow-offset) 0 0 var(--border-and-outline)',
  position: 'sticky',
  top: 0,
  zIndex: Z_INDEX.DROPDOWN,
  padding: 'var(--space-md) var(--space-lg)',
});

const createContainerStyles = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
});

const createLogoStyles = isMobile =>
  mergeStyles(neobrutalismStyles.base, {
    fontWeight: '900',
    fontSize: isMobile ? '1.5rem' : '1.75rem',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    padding: 'var(--space-xs) var(--space-sm)',
    backgroundColor: 'var(--background-primary)',
    position: 'relative',
    overflow: 'hidden',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'inline-block',
  });

const createHamburgerStyles = () => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '30px',
  height: '30px',
  background: 'transparent',
  border: 'var(--border-thickness) solid var(--border-and-outline)',
  borderRadius: 'var(--border-radius)',
  cursor: 'pointer',
  padding: '0',
  zIndex: 10,
  boxShadow:
    'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
});

const createHamburgerLineStyles = () => ({
  width: '100%',
  height: '2px',
  backgroundColor: 'var(--text-primary)',
  border: '1px solid var(--border-and-outline)',
  transition: 'all 0.3s ease',
  transformOrigin: 'center',
});

const createNavMenuStyles = (isMobile, isMenuOpen) => ({
  display: isMobile ? 'none' : 'flex',
  alignItems: 'center',
  ...(isMobile &&
    isMenuOpen && {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: 'var(--background-primary)',
      borderLeft: 'var(--border-thickness) solid var(--border-and-outline)',
      boxShadow: '-4px 0 0 0 var(--border-and-outline)',
      transition: 'right 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      flexDirection: 'column',
      padding: 'var(--space-xl)',
    }),
});

const createNavLinksStyles = isMobile => ({
  display: 'flex',
  gap: 'var(--space-lg)',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  flexDirection: isMobile ? 'column' : 'row',
  alignItems: isMobile ? 'center' : 'flex-start',
});

const createCloseButtonStyles = () =>
  mergeStyles(neobrutalismStyles.base, {
    position: 'absolute',
    top: 'var(--space-lg)',
    right: 'var(--space-lg)',
    background: 'var(--background-primary)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--text-primary)',
  });

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();
  const menuRef = useClickOutside(isMenuOpen, () => setIsMenuOpen(false));

  useEscapeKey(isMenuOpen, () => setIsMenuOpen(false));

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = path => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const createLinkStyles = (isActivePage, accentColor) => ({
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    fontSize: isMobile ? '1.25rem' : '1rem',
    textTransform: 'uppercase',
    color: isActivePage ? 'white' : 'var(--text-primary)',
    textDecoration: 'none',
    padding: isMobile
      ? 'var(--space-sm) var(--space-lg)'
      : 'var(--space-xs) var(--space-sm)',
    border: 'var(--border-thickness) solid transparent',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    letterSpacing: '0.05em',
    backgroundColor: isActivePage ? accentColor : 'transparent',
    boxShadow: isActivePage
      ? 'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)'
      : 'none',
    borderColor: isActivePage ? 'var(--border-and-outline)' : 'transparent',
    cursor: 'pointer',
    display: 'inline-block',
  });

  const handleLinkHover = (e, isActivePage, lightColor) => {
    if (!isActivePage && !isMobile) {
      const target = e.target;
      target.style.borderColor = 'var(--border-and-outline)';
      target.style.backgroundColor = lightColor;
      target.style.boxShadow =
        'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)';
      target.style.transform = 'translateY(-1px)';
    }
  };

  const handleLinkLeave = (e, isActivePage) => {
    if (!isActivePage && !isMobile) {
      const target = e.target;
      target.style.borderColor = 'transparent';
      target.style.backgroundColor = 'transparent';
      target.style.boxShadow = 'none';
      target.style.transform = 'translateY(0)';
    }
  };

  const handleLogoHover = e => {
    const target = e.target;
    target.style.transform = 'translate(-1px, -1px)';
    target.style.boxShadow =
      'calc(var(--shadow-offset) + 1px) calc(var(--shadow-offset) + 1px) 0 0 var(--border-and-outline)';
  };

  const handleLogoLeave = e => {
    const target = e.target;
    target.style.transform = 'translate(0, 0)';
    target.style.boxShadow =
      'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)';
  };

  // Navigation colour arrays
  const navigationColors = [
    ACCENT_COLORS.TEAL,
    ACCENT_COLORS.TEAL,
    ACCENT_COLORS.GREEN,
    ACCENT_COLORS.VIOLET,
    ACCENT_COLORS.ORANGE,
  ];

  const lightColors = [
    'var(--accent-light-blue)',
    'var(--accent-light-teal)',
    'var(--accent-light-green)',
    'var(--accent-light-violet)',
    'var(--accent-light-orange)',
  ];

  return (
    <header className="neobrutalism-nav" style={createHeaderStyles()}>
      <div className="nav-container" style={createContainerStyles()}>
        <Link
          to="/"
          className="nav-logo"
          style={createLogoStyles(isMobile)}
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}
        >
          CLOUD MZANSI
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          style={createHamburgerStyles()}
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}
        >
          <span
            className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
            style={{
              ...createHamburgerLineStyles(),
              transform: isMenuOpen
                ? 'rotate(45deg) translate(6px, 6px)'
                : 'none',
            }}
          />
          <span
            className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
            style={{
              ...createHamburgerLineStyles(),
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <span
            className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
            style={{
              ...createHamburgerLineStyles(),
              transform: isMenuOpen
                ? 'rotate(-45deg) translate(6px, -6px)'
                : 'none',
            }}
          />
        </button>

        <nav
          ref={menuRef}
          className={`nav-menu ${isMenuOpen ? 'open' : ''}`}
          style={createNavMenuStyles(isMobile, isMenuOpen)}
        >
          {/* Close Button for Mobile Menu */}
          {isMobile && isMenuOpen && (
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              style={createCloseButtonStyles()}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            >
              ×
            </button>
          )}

          <ul className="nav-links" style={createNavLinksStyles(isMobile)}>
            {NAVIGATION_ITEMS.map((item, index) => {
              const isActivePage = isActive(item.path);
              const accentColor = navigationColors[index];
              const lightColor = lightColors[index];

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={isActivePage ? 'active' : ''}
                    onClick={closeMenu}
                    style={createLinkStyles(isActivePage, accentColor)}
                    onMouseEnter={e =>
                      handleLinkHover(e, isActivePage, lightColor)
                    }
                    onMouseLeave={e => handleLinkLeave(e, isActivePage)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
