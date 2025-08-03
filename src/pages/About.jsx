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
  rotation,
  color
) => ({
  position: 'absolute',
  top: `${top}%`,
  right: `${right}%`,
  width: `${width}px`,
  height: `${height}px`,
  background: color,
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

const createHeroSubtitleStyles = color => ({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  color: color,
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
  marginBottom: 'var(--space-lg)',
});

const createHeroSubtextStyles = () => ({
  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
  color: 'var(--text-muted)',
  maxWidth: '700px',
  margin: '0 auto',
  lineHeight: '1.5',
  marginBottom: 'var(--space-2xl)',
});

const createSectionTitleStyles = () => ({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: '800',
  textAlign: 'center',
  marginBottom: 'var(--space-3xl)',
});

const createPhilosophyIntroStyles = () => ({
  fontSize: '1.25rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  maxWidth: '800px',
  margin: '0 auto',
});

const createFeatureCardStyles = () => ({
  padding: 'var(--space-xl)',
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

const createJourneyTitleStyles = () => ({
  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
  fontWeight: '700',
  color: 'var(--accent-blue)',
});

const createJourneyIntroStyles = () => ({
  fontSize: '1.125rem',
  lineHeight: '1.6',
  marginBottom: 'var(--space-lg)',
});

const createParagraphStyles = () => ({
  lineHeight: '1.6',
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

const createButtonContainerStyles = () => ({
  display: 'flex',
  gap: 'var(--space-lg)',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

// Component sections
const HeroSection = () => (
  <section className="section hero-section" style={createHeroStyles()}>
    {/* Background Elements */}
    <div
      style={createBackgroundElementStyles(
        15,
        8,
        180,
        180,
        20,
        'var(--accent-violet)'
      )}
    />

    <div className="container">
      <div className="text-center">
        <h1 className="mb-4" style={createHeroTitleStyles()}>
          THE DESIGNER
        </h1>
        <h2
          className="mb-4 designer-name"
          style={createHeroSubtitleStyles('var(--accent-blue)')}
        >
          Andrew Michaels
        </h2>
        <p
          className="mb-4 hero-description"
          style={createHeroDescriptionStyles()}
        >
          A designer who believes in the power of structured rebellion. Every
          design decision is deliberate, every colour choice intentional.
        </p>
        <p className="mb-4 hero-subtext" style={createHeroSubtextStyles()}>
          Breaking conventions while maintaining clarity. Creating chaos with
          purpose. This is where rebellion meets structure.
        </p>
      </div>
    </div>
  </section>
);

const PhilosophySection = () => (
  <section className="section accent-section-light">
    <div className="container">
      <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
        <h2 className="mb-4" style={createSectionTitleStyles()}>
          THE PHILOSOPHY
        </h2>
        <p
          className="mb-4 philosophy-intro"
          style={createPhilosophyIntroStyles()}
        >
          Structured Rebellion isn't just a design approach. It's a way of
          thinking.
        </p>
      </div>

      <div
        className="grid grid-2"
        style={{ gap: 'var(--space-3xl)', alignItems: 'center' }}
      >
        <div>
          <p className="mb-4" style={createParagraphStyles()}>
            I believe that great design should be bold, unapologetic, and
            absolutely unforgettable. But I also believe that it should be
            purposeful, accessible, and perfectly functional.
          </p>
          <p className="mb-4" style={createParagraphStyles()}>
            This philosophy combines the raw energy of Neobrutalism with the
            structured precision of modern design systems. We break the rules,
            but we do it with purpose. We challenge conventions, but we maintain
            clarity.
          </p>
          <p className="mb-4" style={createParagraphStyles()}>
            The result? Designs that are striking yet functional, rebellious yet
            structured, bold yet accessible. Designs that demand attention while
            providing seamless experiences.
          </p>
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
            className="neobrutalism-card accent-blue"
            style={createFeatureCardStyles()}
          >
            <h3 style={createFeatureTitleStyles()}>INTENTION</h3>
            <p style={createFeatureDescriptionStyles()}>
              Every design decision is deliberate, every colour choice
              purposeful, every layout meaningful. Nothing is accidental.
            </p>
          </div>
          <div
            className="neobrutalism-card accent-teal"
            style={createFeatureCardStyles()}
          >
            <h3 style={createFeatureTitleStyles()}>CLARITY</h3>
            <p style={createFeatureDescriptionStyles()}>
              Bold designs that remain accessible and functional. Striking
              visuals that don't sacrifice usability.
            </p>
          </div>
          <div
            className="neobrutalism-card accent-green"
            style={createFeatureCardStyles()}
          >
            <h3 style={createFeatureTitleStyles()}>INNOVATION</h3>
            <p style={createFeatureDescriptionStyles()}>
              Pushing boundaries while respecting fundamentals. Creating new
              possibilities within structured frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section className="section" style={{ padding: 'var(--space-4xl) 0' }}>
    <div className="container">
      <h2 className="section-title" style={createSectionTitleStyles()}>
        EXPERIENCE & APPROACH
      </h2>

      <div
        className="grid grid-2"
        style={{ gap: 'var(--space-3xl)', alignItems: 'center' }}
      >
        <div>
          <h3 className="mb-4" style={createJourneyTitleStyles()}>
            THE JOURNEY
          </h3>
          <p className="mb-4 journey-intro" style={createJourneyIntroStyles()}>
            Started as a design student who was tired of being told "that's not
            how it's done." So I decided to do it my way.
          </p>
          <p className="mb-4" style={createParagraphStyles()}>
            Embracing Neobrutalism not just as a design style, but as a
            philosophy. Thick borders, bold colours, and unapologetic layouts
            became weapons against the boring, safe designs that dominate the
            industry.
          </p>
          <p className="mb-4" style={createParagraphStyles()}>
            Today, I'm proving that young designers can create work that's not
            just as good as the "experts". But better. Because I'm not afraid to
            take risks, break conventions, and create designs that actually make
            people feel something.
          </p>
          <p className="mb-4" style={createParagraphStyles()}>
            But I've learned that rebellion without structure is just chaos.
            That's why every design I create balances bold creativity with
            purposeful structure.
          </p>
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
            className="neobrutalism-card accent-violet"
            style={createFeatureCardStyles()}
          >
            <h3 style={createFeatureTitleStyles()}>BOLD VISION</h3>
            <p style={createFeatureDescriptionStyles()}>
              Unafraid to challenge conventions and push boundaries. Creating
              designs that demand attention and provoke emotion.
            </p>
          </div>
          <div
            className="neobrutalism-card accent-orange"
            style={createFeatureCardStyles()}
          >
            <h3 style={createFeatureTitleStyles()}>STRUCTURED APPROACH</h3>
            <p style={createFeatureDescriptionStyles()}>
              Every element serves a purpose. Every decision has meaning. Chaos
              with intention, rebellion with structure.
            </p>
          </div>
          <div
            className="neobrutalism-card accent-yellow"
            style={createFeatureCardStyles()}
          >
            <h3 style={createFeatureTitleStyles()}>USER-CENTRED</h3>
            <p style={createFeatureDescriptionStyles()}>
              Bold designs that remain accessible and functional. Striking
              visuals that enhance user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section
    className="section accent-section"
    style={{ padding: 'var(--space-4xl) 0' }}
  >
    <div className="container">
      <h2 className="section-title" style={createSectionTitleStyles()}>
        SKILLS & EXPERTISE
      </h2>
      <Carousel mobileOnly={true} showDots={true} autoPlay={false}>
        <div
          className="neobrutalism-card accent-blue"
          style={createFeatureCardStyles()}
        >
          <h3 className="mb-3" style={createFeatureTitleStyles()}>
            USER INTERFACE DESIGN
          </h3>
          <p className="mb-3" style={createFeatureDescriptionStyles()}>
            Creating intuitive, accessible, and visually striking interfaces
            that balance bold aesthetics with perfect usability.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-xs)',
              flexWrap: 'wrap',
            }}
          >
            <Badge variant="blue">Figma</Badge>
            <Badge variant="teal">Sketch</Badge>
            <Badge variant="green">Adobe XD</Badge>
          </div>
        </div>

        <div
          className="neobrutalism-card accent-teal"
          style={createFeatureCardStyles()}
        >
          <h3 className="mb-3" style={createFeatureTitleStyles()}>
            BRAND IDENTITY
          </h3>
          <p className="mb-3" style={createFeatureDescriptionStyles()}>
            Developing visual identities that stand out while maintaining
            consistency. Bold logos, structured guidelines, rebellious spirit.
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
          className="neobrutalism-card accent-green"
          style={createFeatureCardStyles()}
        >
          <h3 className="mb-3" style={createFeatureTitleStyles()}>
            WEB DEVELOPMENT
          </h3>
          <p className="mb-3" style={createFeatureDescriptionStyles()}>
            Building responsive, accessible websites that bring bold designs to
            life. From concept to code, from design to deployment.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-xs)',
              flexWrap: 'wrap',
            }}
          >
            <Badge variant="red">React</Badge>
            <Badge variant="blue">JavaScript</Badge>
            <Badge variant="green">CSS3</Badge>
          </div>
        </div>

        <div
          className="neobrutalism-card accent-violet"
          style={createFeatureCardStyles()}
        >
          <h3 className="mb-3" style={createFeatureTitleStyles()}>
            CREATIVE DIRECTION
          </h3>
          <p className="mb-3" style={createFeatureDescriptionStyles()}>
            Leading creative projects with bold vision and structured execution.
            Ensuring every creative decision serves a purpose.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-xs)',
              flexWrap: 'wrap',
            }}
          >
            <Badge variant="blue">Art Direction</Badge>
            <Badge variant="teal">Brand Strategy</Badge>
            <Badge variant="green">Creative Vision</Badge>
          </div>
        </div>
      </Carousel>
    </div>
  </section>
);

const CTASection = () => (
  <section
    className="section accent-section-light"
    style={{ padding: 'var(--space-4xl) 0' }}
  >
    <div className="container">
      <div
        className="neobrutalism-hero-card text-center"
        style={createCTACardStyles()}
      >
        <h2 className="mb-4" style={createCTATitleStyles()}>
          READY TO WORK TOGETHER?
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

const About = () => {
  return (
    <div>
      <Breadcrumb />
      <HeroSection />
      <PhilosophySection />
      <ExperienceSection />
      <SkillsSection />
      <CTASection />
    </div>
  );
};

export default About;
