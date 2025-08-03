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
} from '../components/ui';

// Common style constants
const createHeroStyles = () => ({
  background: 'var(--background-primary)',
  position: 'relative',
  overflow: 'hidden',
});

const createBackgroundElementStyles = (
  top,
  right,
  width,
  height,
  rotation
) => ({
  position: 'absolute',
  top: `${top}%`,
  right: `${right}%`,
  width: `${width}px`,
  height: `${height}px`,
  background: 'var(--accent-teal)',
  borderRadius: 'var(--border-radius)',
  border: 'var(--border-thickness) solid var(--border-and-outline)',
  boxShadow:
    'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
  opacity: '0.1',
  transform: `rotate(${rotation}deg)`,
});

const createHeroTitleStyles = () => ({
  fontSize: 'clamp(3rem, 8vw, 5rem)',
  fontWeight: '900',
  lineHeight: '1.1',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: 'var(--space-lg)',
});

const createHeroSubtitleStyles = () => ({
  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
  color: 'var(--accent-teal)',
  textTransform: 'none',
  fontWeight: '600',
  marginBottom: 'var(--space-xl)',
});

const createHeroDescriptionStyles = () => ({
  fontSize: 'clamp(1.125rem, 3vw, 1.375rem)',
  color: 'var(--text-secondary)',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.6',
  marginBottom: 'var(--space-2xl)',
});

const createButtonContainerStyles = () => ({
  display: 'flex',
  gap: 'var(--space-lg)',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: 'var(--space-2xl)',
});

const createFeatureCardStyles = () => ({
  padding: 'var(--space-xl)',
  textAlign: 'center',
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const createFeatureTitleStyles = () => ({
  fontSize: '1.5rem',
  marginBottom: 'var(--space-md)',
  fontWeight: '700',
});

const createFeatureDescriptionStyles = () => ({
  color: 'var(--text-secondary)',
  lineHeight: '1.5',
});

const createSectionTitleStyles = () => ({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: '800',
  textAlign: 'center',
  marginBottom: 'var(--space-3xl)',
});

const createServiceCardStyles = () => ({
  padding: 'var(--space-xl)',
});

const createServiceTitleStyles = () => ({
  fontSize: '1.5rem',
  fontWeight: '700',
  marginBottom: 'var(--space-md)',
});

const createServiceDescriptionStyles = () => ({
  color: 'var(--text-secondary)',
  lineHeight: '1.5',
  marginBottom: 'var(--space-md)',
});

const createStatsCardStyles = () => ({
  padding: 'var(--space-xl)',
  textAlign: 'center',
});

const createStatsNumberStyles = color => ({
  fontSize: '3rem',
  color: color,
  marginBottom: 'var(--space-sm)',
  fontWeight: '900',
});

const createStatsLabelStyles = () => ({
  color: 'var(--text-secondary)',
  fontWeight: '600',
  fontSize: '1.125rem',
});

const createCTACardStyles = () => ({
  background: 'var(--background-primary)',
  maxWidth: '800px',
  margin: '0 auto',
  padding: 'var(--space-3xl)',
});

const createCTATitleStyles = () => ({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: '800',
  lineHeight: '1.2',
});

const createCTADescriptionStyles = () => ({
  fontSize: '1.25rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  marginBottom: 'var(--space-xl)',
});

// Component sections
const HeroSection = () => (
  <section className="section hero-section" style={createHeroStyles()}>
    {/* Background Elements */}
    <div style={createBackgroundElementStyles(10, 5, 200, 200, 15)} />
    <div style={createBackgroundElementStyles(20, 10, 150, 150, -10)} />

    <div className="container">
      {/* Main Hero Content */}
      <div className="text-center" style={{ marginBottom: 'var(--space-4xl)' }}>
        <h1 className="mb-4" style={createHeroTitleStyles()}>
          Structured Rebellion
        </h1>
        <h2 className="mb-4" style={createHeroSubtitleStyles()}>
          in Design
        </h2>
        <p
          className="mb-4 hero-description"
          style={createHeroDescriptionStyles()}
        >
          We fuse the raw energy of Neobrutalism with the precision of
          structured design, creating intentional chaos with purpose. Every
          element serves meaning, every colour has purpose, every interaction
          breaks conventions while maintaining clarity. This is where rebellion
          meets structure, where bold meets refined.
        </p>
        <div style={createButtonContainerStyles()}>
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
          <Link to="/work" style={{ textDecoration: 'none' }}>
            <Button
              variant="outline"
              style={{
                fontSize: '1.125rem',
                padding: 'var(--space-md) var(--space-xl)',
              }}
            >
              View Our Work
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Feature Cards */}
      <div className="grid grid-3" style={{ gap: 'var(--space-xl)' }}>
        <div
          className="neobrutalism-card accent-teal"
          style={createFeatureCardStyles()}
        >
          <h3 style={createFeatureTitleStyles()}>REBELLION</h3>
          <p style={createFeatureDescriptionStyles()}>
            Bold colours, raw aesthetics, and deliberate rule-breaking that
            challenges conventional design norms.
          </p>
        </div>

        <div
          className="neobrutalism-card accent-teal"
          style={createFeatureCardStyles()}
        >
          <h3 style={createFeatureTitleStyles()}>STRUCTURE</h3>
          <p style={createFeatureDescriptionStyles()}>
            Clean layouts, logical hierarchies, and purposeful spacing that
            ensures clarity and usability.
          </p>
        </div>

        <div
          className="neobrutalism-card accent-green"
          style={createFeatureCardStyles()}
        >
          <h3 style={createFeatureTitleStyles()}>INTENTION</h3>
          <p style={createFeatureDescriptionStyles()}>
            Every element serves a purpose, every decision has meaning, every
            interaction is designed with purpose.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PhilosophySection = () => (
  <section className="section accent-section-light">
    <div className="container">
      <div
        className="grid grid-2"
        style={{ gap: 'var(--space-3xl)', alignItems: 'center' }}
      >
        <div>
          <h2 className="mb-4" style={createSectionTitleStyles()}>
            STRUCTURED REBELLION
          </h2>
          <p
            className="mb-4 philosophy-intro"
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: 'var(--space-lg)',
            }}
          >
            We believe in the power of controlled chaos. Every design decision
            is deliberate, every colour choice intentional, every layout
            purposeful.
          </p>
          <p className="mb-4" style={{ lineHeight: '1.6' }}>
            Our approach combines the rebellious spirit of Neobrutalism with the
            structured precision of modern design systems. We break the rules,
            but we do it with purpose. We challenge conventions, but we maintain
            clarity.
          </p>
          <p className="mb-4" style={{ lineHeight: '1.6' }}>
            The result? Designs that are bold yet accessible, striking yet
            functional, rebellious yet structured. We create experiences that
            demand attention while providing seamless user journeys.
          </p>
          <p className="mb-4" style={{ lineHeight: '1.6' }}>
            This isn't just design. It's a philosophy. It's about finding the
            perfect balance between chaos and order, between rebellion and
            structure, between bold and refined.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-md)',
              flexWrap: 'wrap',
              marginTop: 'var(--space-xl)',
            }}
          >
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="secondary"
                style={{
                  fontSize: '1.125rem',
                  padding: 'var(--space-md) var(--space-xl)',
                }}
              >
                Begin Collaboration
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button
                variant="outline"
                style={{
                  fontSize: '1.125rem',
                  padding: 'var(--space-md) var(--space-xl)',
                }}
              >
                Learn Our Process
              </Button>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xl)',
            alignContent: 'start',
          }}
        >
          <div
            className="neobrutalism-card accent-teal"
            style={{ padding: 'var(--space-xl)' }}
          >
            <h3 style={createFeatureTitleStyles()}>REBELLION</h3>
            <p style={createFeatureDescriptionStyles()}>
              Bold colours, raw aesthetics, and deliberate rule-breaking that
              challenges conventional design norms.
            </p>
          </div>
          <div
            className="neobrutalism-card accent-teal"
            style={{ padding: 'var(--space-xl)' }}
          >
            <h3 style={createFeatureTitleStyles()}>STRUCTURE</h3>
            <p style={createFeatureDescriptionStyles()}>
              Clean layouts, logical hierarchies, and purposeful spacing that
              ensures clarity and usability.
            </p>
          </div>
          <div
            className="neobrutalism-card accent-green"
            style={{ padding: 'var(--space-xl)' }}
          >
            <h3 style={createFeatureTitleStyles()}>INTENTION</h3>
            <p style={createFeatureDescriptionStyles()}>
              Every element serves a purpose, every decision has meaning, every
              interaction is designed with purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-title" style={createSectionTitleStyles()}>
        OUR APPROACH
      </h2>

      {/* Desktop Grid Layout */}
      <div className="grid grid-3" style={{ gap: 'var(--space-xl)' }}>
        <div
          className="neobrutalism-card accent-violet"
          style={createServiceCardStyles()}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            WEB DESIGN
          </h3>
          <p
            className="mb-3 service-description"
            style={createServiceDescriptionStyles()}
          >
            Bold, structured websites that break conventions while maintaining
            perfect usability. Every pixel is intentional.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-xs)',
              flexWrap: 'wrap',
            }}
          >
            <Badge variant="blue">React</Badge>
            <Badge variant="teal">Vite</Badge>
            <Badge variant="green">CSS3</Badge>
          </div>
        </div>

        <div
          className="neobrutalism-card accent-orange"
          style={createServiceCardStyles()}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            BRAND IDENTITY
          </h3>
          <p
            className="mb-3 service-description"
            style={createServiceDescriptionStyles()}
          >
            Visual identities that stand out while maintaining consistency. Bold
            logos, structured guidelines, rebellious spirit.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-xs)',
              flexWrap: 'wrap',
            }}
          >
            <Badge variant="violet">Logo Design</Badge>
            <Badge variant="orange">Brand Guidelines</Badge>
            <Badge variant="yellow">Visual Identity</Badge>
          </div>
        </div>

        <div
          className="neobrutalism-card accent-yellow"
          style={createServiceCardStyles()}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            DIGITAL EXPERIENCES
          </h3>
          <p
            className="mb-3 service-description"
            style={createServiceDescriptionStyles()}
          >
            Interactive experiences that engage and inspire. Structured
            interactions with rebellious visual elements.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-xs)',
              flexWrap: 'wrap',
            }}
          >
            <Badge variant="red">UX/UI</Badge>
            <Badge variant="blue">Prototyping</Badge>
            <Badge variant="green">User Testing</Badge>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="section accent-section">
    <div className="container">
      <h2 className="section-title" style={createSectionTitleStyles()}>
        BY THE NUMBERS
      </h2>

      {/* Desktop Grid Layout */}
      <div className="grid grid-4" style={{ gap: 'var(--space-xl)' }}>
        <div
          className="neobrutalism-stats-card"
          style={createStatsCardStyles()}
        >
          <h2 style={createStatsNumberStyles('var(--accent-teal)')}>50+</h2>
          <p style={createStatsLabelStyles()}>Projects Completed</p>
        </div>
        <div
          className="neobrutalism-stats-card"
          style={createStatsCardStyles()}
        >
          <h2 style={createStatsNumberStyles('var(--accent-teal)')}>100%</h2>
          <p style={createStatsLabelStyles()}>Client Satisfaction</p>
        </div>
        <div
          className="neobrutalism-stats-card"
          style={createStatsCardStyles()}
        >
          <h2 style={createStatsNumberStyles('var(--accent-green)')}>24/7</h2>
          <p style={createStatsLabelStyles()}>Creative Process</p>
        </div>
        <div
          className="neobrutalism-stats-card"
          style={createStatsCardStyles()}
        >
          <h2 style={createStatsNumberStyles('var(--accent-violet)')}>∞</h2>
          <p style={createStatsLabelStyles()}>Creative Possibilities</p>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-title" style={createSectionTitleStyles()}>
        OUR PROCESS
      </h2>

      {/* Desktop Grid Layout */}
      <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
        <div
          className="neobrutalism-card accent-teal"
          style={createServiceCardStyles()}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            DISCOVER
          </h3>
          <p style={createServiceDescriptionStyles()}>
            We dive deep into your brand, understanding your vision, challenges,
            and the rebellious spirit you want to convey.
          </p>
        </div>

        <div
          className="neobrutalism-card accent-teal"
          style={createServiceCardStyles()}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            STRATEGISE
          </h3>
          <p style={createServiceDescriptionStyles()}>
            We develop a structured approach that balances bold creativity with
            strategic thinking and user-centred design.
          </p>
        </div>

        <div
          className="neobrutalism-card accent-green"
          style={createServiceCardStyles()}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            CREATE
          </h3>
          <p style={createServiceDescriptionStyles()}>
            We craft designs that break conventions while maintaining perfect
            functionality and user experience.
          </p>
        </div>

        <div
          className="neobrutalism-card accent-violet"
          style={createServiceCardStyles()}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            DELIVER
          </h3>
          <p style={createServiceDescriptionStyles()}>
            We launch your project with precision, ensuring every element works
            perfectly while maintaining its rebellious spirit.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="section accent-section-light">
    <div className="container">
      <div
        className="neobrutalism-hero-card text-center"
        style={createCTACardStyles()}
      >
        <h2 className="mb-4" style={createCTATitleStyles()}>
          READY TO REBEL WITH STRUCTURE?
        </h2>
        <p
          className="mb-4 cta-description"
          style={createCTADescriptionStyles()}
        >
          Let's create something that breaks the rules while maintaining perfect
          functionality. Something bold, structured, and absolutely
          unforgettable.
        </p>
        <div style={createButtonContainerStyles()}>
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
          <Link to="/work" style={{ textDecoration: 'none' }}>
            <Button
              variant="outline"
              style={{
                fontSize: '1.125rem',
                padding: 'var(--space-md) var(--space-xl)',
              }}
            >
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
};

export default Home;
