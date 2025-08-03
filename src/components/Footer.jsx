import React from 'react';
import { CONTACT_INFO, FOOTER_LINKS } from '../data/content';
import { neobrutalismStyles, mergeStyles } from '../utils/styles';

// Style constants
const createFooterStyles = () => ({
  borderTop: 'var(--border-thickness) solid var(--border-and-outline)',
  padding: 'var(--section-padding-desktop) 0',
  marginTop: 'var(--section-margin-desktop)',
  backgroundColor: 'var(--background-primary)',
});

const createCardStyles = () =>
  mergeStyles(neobrutalismStyles.base, {
    textAlign: 'center',
    padding: 'var(--space-xl)',
    backgroundColor: 'var(--accent-light-blue)',
  });

const createTitleStyles = () => ({
  color: '#000000',
  fontWeight: '900',
  marginBottom: 'var(--space-lg)',
});

const createDescriptionStyles = () => ({
  color: '#000000',
  fontSize: '1.125rem',
  fontWeight: '600',
  marginBottom: 'var(--space-lg)',
});

const createGridStyles = () => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: 'var(--space-lg)',
  marginTop: 'var(--space-lg)',
});

const createSectionStyles = () => ({
  textAlign: 'left',
});

const createSectionTitleStyles = () => ({
  fontSize: '1.1rem',
  fontWeight: '700',
  marginBottom: 'var(--space-md)',
});

const createLinkStyles = () => ({
  color: '#000000',
  fontWeight: '700',
  marginBottom: 'var(--space-xs)',
  textDecoration: 'none',
  display: 'block',
});

const createCopyrightStyles = () => ({
  marginTop: 'var(--space-lg)',
  paddingTop: 'var(--space-lg)',
  borderTop: 'var(--border-thickness) solid var(--border-and-outline)',
  color: '#000000',
  fontWeight: '600',
});

// Footer sections configuration
const footerSections = [
  {
    title: 'Contact',
    color: 'var(--accent-teal)',
    items: [CONTACT_INFO.email, CONTACT_INFO.phone, CONTACT_INFO.address],
  },
  {
    title: 'Services',
    color: 'var(--accent-teal)',
    items: FOOTER_LINKS.services.map(service => service.label),
  },
  {
    title: 'Follow Us',
    color: 'var(--accent-green)',
    items: [
      CONTACT_INFO.social.twitter,
      CONTACT_INFO.social.linkedin,
      CONTACT_INFO.social.instagram,
    ],
  },
];

const Footer = () => {
  return (
    <footer style={createFooterStyles()}>
      <div className="container">
        <div
          className="neobrutalism-card text-center"
          style={createCardStyles()}
        >
          <h3 style={createTitleStyles()}>CLOUD MZANSI</h3>
          <p style={createDescriptionStyles()}>
            Structured rebellion in design. We create bold designs with
            purposeful structure.
          </p>

          <div style={createGridStyles()}>
            {footerSections.map((section, index) => (
              <div key={section.title} style={createSectionStyles()}>
                <h4
                  style={{
                    ...createSectionTitleStyles(),
                    color: section.color,
                  }}
                >
                  {section.title}
                </h4>
                {section.items.map((item, itemIndex) => (
                  <p key={itemIndex} style={createLinkStyles()}>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div style={createCopyrightStyles()}>
            <p>Copyright © 2025 Cloud Mzansi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
