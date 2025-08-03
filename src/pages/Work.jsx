import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Alert,
  Carousel,
  Breadcrumb,
} from '../components/ui';

const Work = () => {
  return (
    <div>
      <Breadcrumb />
      {/* Hero Section - Enhanced Design */}
      <section
        className="section hero-section"
        style={{
          background: 'var(--background-primary)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Elements */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '8%',
            width: '180px',
            height: '180px',
            background: 'var(--accent-green)',
            borderRadius: 'var(--border-radius)',
            border: 'var(--border-thickness) solid var(--border-and-outline)',
            boxShadow:
              'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
            opacity: '0.1',
            transform: 'rotate(18deg)',
          }}
        />

        <div className="container">
          <div className="text-center">
            <h1
              className="mb-4"
              style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                fontWeight: '900',
                lineHeight: '1.1',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--space-lg)',
              }}
            >
              OUR WORK
            </h1>
            <p
              className="mb-4 hero-description"
              style={{
                fontSize: 'clamp(1.125rem, 3vw, 1.375rem)',
                color: 'var(--text-secondary)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
                marginBottom: 'var(--space-lg)',
              }}
            >
              A collection of projects that embody structured rebellion. Bold
              designs with purposeful structure, rebellious creativity with
              intentional clarity.
            </p>
            <p
              className="mb-4 hero-subtext"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                color: 'var(--text-muted)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.5',
                marginBottom: 'var(--space-2xl)',
              }}
            >
              Every project breaks conventions while maintaining perfect
              functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Enhanced Design */}
      <section className="section">
        <div className="container">
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: 'var(--space-3xl)',
            }}
          >
            FEATURED PROJECTS
          </h2>
          <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
            <div
              className="neobrutalism-card accent-blue"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3 project-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                REBEL COFFEE CO.
              </h3>
              <p
                className="mb-3 project-description"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                A complete brand identity for a coffee shop that refuses to be
                just another café. Bold, structured, and absolutely
                unforgettable.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-xs)',
                  flexWrap: 'wrap',
                }}
              >
                <Badge variant="violet">Brand Identity</Badge>
                <Badge variant="orange">Logo Design</Badge>
                <Badge variant="yellow">Packaging</Badge>
              </div>
            </div>

            <div
              className="neobrutalism-card accent-teal"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3 project-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                TECHSTART AFRICA
              </h3>
              <p
                className="mb-3 project-description"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                A website for a startup accelerator that's changing the game for
                African entrepreneurs. Structured design for bold ideas.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-xs)',
                  flexWrap: 'wrap',
                }}
              >
                <Badge variant="blue">Web Design</Badge>
                <Badge variant="teal">UX/UI</Badge>
                <Badge variant="green">Development</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Section - Enhanced Design */}
      <section
        className="section accent-section-light"
        style={{ padding: 'var(--space-4xl) 0' }}
      >
        <div className="container">
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: 'var(--space-3xl)',
            }}
          >
            MORE PROJECTS
          </h2>
          <Carousel mobileOnly={true} showDots={true} autoPlay={false}>
            <div
              className="neobrutalism-card accent-violet"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3 project-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                URBAN THEATRE
              </h3>
              <p
                className="project-description"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Brand identity for a theatre company that challenges
                conventions.
              </p>
            </div>

            <div
              className="neobrutalism-card accent-orange"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3 project-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                DEV HUB
              </h3>
              <p
                className="project-description"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Website for a developer community platform.
              </p>
            </div>

            <div
              className="neobrutalism-card accent-yellow"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3 project-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                SOUND WAVE
              </h3>
              <p
                className="project-description"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Brand identity for a music festival.
              </p>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Approach Section - Enhanced Design */}
      <section className="section" style={{ padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: 'var(--space-3xl)',
            }}
          >
            OUR APPROACH
          </h2>
          <Carousel mobileOnly={true} showDots={true} autoPlay={false}>
            <div
              className="neobrutalism-card accent-blue"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                DISCOVER
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                We dive deep into your brand, understanding your vision,
                challenges, and the rebellious spirit you want to convey.
              </p>
            </div>

            <div
              className="neobrutalism-card accent-teal"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                STRATEGISE
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                We develop a structured approach that balances bold creativity
                with strategic thinking and user-centred design.
              </p>
            </div>

            <div
              className="neobrutalism-card accent-green"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                CREATE
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                We craft designs that break conventions while maintaining
                perfect functionality and user experience.
              </p>
            </div>

            <div
              className="neobrutalism-card accent-violet"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                DELIVER
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                We launch your project with precision, ensuring every element
                works perfectly while maintaining its rebellious spirit.
              </p>
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section - Enhanced Design */}
      <section
        className="section accent-section-light"
        style={{ padding: 'var(--space-4xl) 0' }}
      >
        <div className="container">
          <div
            className="neobrutalism-hero-card text-center"
            style={{
              background: 'var(--background-primary)',
              maxWidth: '800px',
              margin: '0 auto',
              padding: 'var(--space-3xl)',
            }}
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '800',
                lineHeight: '1.2',
              }}
            >
              READY TO START YOUR PROJECT?
            </h2>
            <p
              className="mb-4 cta-description"
              style={{
                fontSize: '1.25rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: 'var(--space-xl)',
              }}
            >
              Let's create something that breaks the rules while maintaining
              perfect functionality. Something bold, structured, and absolutely
              unforgettable.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-lg)',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="primary"
                  style={{
                    fontSize: '1.125rem',
                    padding: 'var(--space-md) var(--space-xl)',
                  }}
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outline"
                  style={{
                    fontSize: '1.125rem',
                    padding: 'var(--space-md) var(--space-xl)',
                  }}
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Section - Enhanced Design */}
      <section className="section" style={{ padding: 'var(--space-3xl) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Alert variant="success" style={{ padding: 'var(--space-xl)' }}>
              <h3
                style={{
                  marginBottom: 'var(--space-md)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                }}
              >
                NEW PROJECTS COMING SOON
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  fontSize: '1.125rem',
                }}
              >
                We're working on exciting new projects that push the boundaries
                of structured rebellion. Stay tuned for more bold, structured
                designs.
              </p>
            </Alert>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
