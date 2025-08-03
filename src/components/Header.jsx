import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMobile } from '../hooks/useMobile';
import { useClickOutside } from '../hooks/useClickOutside';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { NAVIGATION_ITEMS, ACCENT_COLORS, Z_INDEX } from '../utils/constants';
import { neobrutalismStyles, mergeStyles } from '../utils/styles';

// AGGRESSIVE STYLE OBJECTS
const createHeaderStyles = () => ({
  background: 'var(--background-primary)',
  borderBottom: 'var(--border-thickness) solid var(--border-and-outline)',
  boxShadow: '0 var(--shadow-offset) 0 0 var(--border-and-outline)',
  position: 'sticky',
  top: 0,
  zIndex: Z_INDEX.DROPDOWN,
  padding: 'var(--space-lg) var(--space-xl)',
});

const createContainerStyles = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1400px',
  margin: '0 auto',
});

const createLogoStyles = isMobile =>
  mergeStyles(neobrutalismStyles.base, {
    fontWeight: '900',
    fontSize: isMobile ? '1.75rem' : '2.25rem',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    padding: 'var(--space-md) var(--space-lg)',
    backgroundColor: 'var(--background-primary)',
    position: 'relative',
    overflow: 'hidden',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    display: 'inline-block',
    transform: 'rotate(-3deg)',
    textShadow: '3px 3px 0 var(--accent-magenta)',
  });

const createHamburgerStyles = () => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '40px',
  height: '40px',
  background: 'transparent',
  border: 'var(--border-thickness) solid var(--border-and-outline)',
  cursor: 'pointer',
  padding: '0',
  zIndex: 10,
  boxShadow: 'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
  transition: 'all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  transform: 'rotate(-1deg)',
});

const createHamburgerLineStyles = () => ({
  width: '100%',
  height: '3px',
  backgroundColor: 'var(--text-primary)',
  border: '1px solid var(--border-and-outline)',
  transition: 'all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
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
      boxShadow: '-6px 0 0 0 var(--border-and-outline)',
      transition: 'right 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      flexDirection: 'column',
      padding: 'var(--space-2xl)',
    }),
});

const createNavLinksStyles = isMobile => ({
  display: 'flex',
  gap: 'var(--space-xl)',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  flexDirection: isMobile ? 'column' : 'row',
  alignItems: isMobile ? 'center' : 'flex-start',
});

const createCloseButtonStyles = () =>
  mergeStyles(neobrutalismStyles.base, {
    position: 'absolute',
    top: 'var(--space-xl)',
    right: 'var(--space-xl)',
    background: 'var(--background-primary)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'var(--text-primary)',
    transform: 'rotate(-2deg)',
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
    fontFamily: 'Space Mono, monospace',
    fontWeight: '700',
    fontSize: isMobile ? '1.5rem' : '1.25rem',
    textTransform: 'uppercase',
    color: isActivePage ? 'white' : 'var(--text-primary)',
    textDecoration: 'none',
    padding: isMobile
      ? 'var(--space-lg) var(--space-xl)'
      : 'var(--space-sm) var(--space-md)',
    border: 'var(--border-thickness) solid transparent',
    transition: 'all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    position: 'relative',
    letterSpacing: '0.15em',
    backgroundColor: isActivePage ? accentColor : 'transparent',
    boxShadow: isActivePage
      ? 'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)'
      : 'none',
    borderColor: isActivePage ? 'var(--border-and-outline)' : 'transparent',
    cursor: 'pointer',
    display: 'inline-block',
    transform: 'rotate(1deg)',
    textShadow: isActivePage ? '2px 2px 0 var(--border-and-outline)' : 'none',
  });

  const handleLinkHover = (e, isActivePage, lightColor) => {
    if (!isActivePage && !isMobile) {
      const target = e.target;
      target.style.borderColor = 'var(--border-and-outline)';
      target.style.backgroundColor = lightColor;
      target.style.boxShadow =
        'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)';
      target.style.transform = 'translate(-3px, -3px) rotate(2deg)';
      target.style.textShadow = '2px 2px 0 var(--border-and-outline)';
    }
  };

  const handleLinkLeave = (e, isActivePage) => {
    if (!isActivePage && !isMobile) {
      const target = e.target;
      target.style.borderColor = 'transparent';
      target.style.backgroundColor = 'transparent';
      target.style.boxShadow = 'none';
      target.style.transform = 'translate(0, 0) rotate(1deg)';
      target.style.textShadow = 'none';
    }
  };

  const handleLogoHover = e => {
    const target = e.target;
    target.style.transform = 'translate(-3px, -3px) rotate(-1deg)';
    target.style.boxShadow =
      'calc(var(--shadow-offset) + 3px) calc(var(--shadow-offset) + 3px) 0 0 var(--border-and-outline)';
  };

  const handleLogoLeave = e => {
    const target = e.target;
    target.style.transform = 'translate(0, 0) rotate(-3deg)';
    target.style.boxShadow =
      'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)';
  };

  // AGGRESSIVE NAVIGATION COLOUR ARRAYS
  const navigationColors = [
    ACCENT_COLORS.MAGENTA,
    ACCENT_COLORS.TEAL,
    ACCENT_COLORS.GREEN,
    ACCENT_COLORS.VIOLET,
    ACCENT_COLORS.ORANGE,
  ];

  const lightColors = [
    'var(--accent-light-magenta)',
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

        {/* AGGRESSIVE HAMBURGER MENU BUTTON - MOBILE ONLY */}
        {isMobile && (
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
                  ? 'rotate(45deg) translate(8px, 8px)'
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
                  ? 'rotate(-45deg) translate(8px, -8px)'
                  : 'none',
              }}
            />
          </button>
        )}

        <nav
          ref={menuRef}
          className={`nav-menu ${isMenuOpen ? 'open' : ''}`}
          style={createNavMenuStyles(isMobile, isMenuOpen)}
        >
          {/* AGGRESSIVE CLOSE BUTTON FOR MOBILE MENU */}
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
