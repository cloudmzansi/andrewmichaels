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

// AGGRESSIVE STYLE CONSTANTS
const createHeroStyles = () => ({
  background: 'linear-gradient(135deg, var(--background-primary) 0%, var(--accent-light-magenta) 50%, var(--accent-light-blue) 100%)',
  position: 'relative',
  overflow: 'hidden',
  padding: 'var(--space-3xl) 0',
});

const createBackgroundElementStyles = (top, right, width, height, rotation, color) => ({
  position: 'absolute',
  top: `${top}%`,
  right: `${right}%`,
  width: `${width}px`,
  height: `${height}px`,
  background: color,
  border: 'var(--border-thickness) solid var(--border-and-outline)',
  boxShadow: 'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
  opacity: '0.8',
  transform: `rotate(${rotation}deg)`,
  zIndex: 1,
});

const createHeroTitleStyles = () => ({
  fontSize: 'clamp(3rem, 10vw, 6rem)',
  fontWeight: '900',
  lineHeight: '0.9',
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  marginBottom: 'var(--space-2xl)',
  transform: 'rotate(-3deg)',
  textShadow: '4px 4px 0 var(--accent-magenta), 8px 8px 0 var(--accent-teal)',
  position: 'relative',
  zIndex: 2,
});

const createHeroSubtitleStyles = () => ({
  fontSize: 'clamp(1.5rem, 6vw, 3rem)',
  color: 'var(--accent-teal)',
  textTransform: 'uppercase',
  fontWeight: '800',
  marginBottom: 'var(--space-2xl)',
  transform: 'rotate(2deg)',
  textShadow: '3px 3px 0 var(--accent-yellow)',
  position: 'relative',
  zIndex: 2,
});

const createHeroDescriptionStyles = () => ({
  fontSize: 'clamp(1rem, 3vw, 1.5rem)',
  color: 'var(--text-secondary)',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.4',
  marginBottom: 'var(--space-3xl)',
  position: 'relative',
  zIndex: 2,
  transform: 'rotate(-1deg)',
});

const createButtonContainerStyles = () => ({
  display: 'flex',
  gap: 'var(--space-lg)',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: 'var(--space-2xl)',
  marginBottom: 'var(--space-2xl)',
  position: 'relative',
  zIndex: 2,
});

const createFeatureCardStyles = () => ({
  padding: 'var(--space-2xl)',
  textAlign: 'center',
  minHeight: '350px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  transform: 'rotate(-2deg)',
});

const createFeatureTitleStyles = () => ({
  fontSize: '2.5rem',
  marginBottom: 'var(--space-lg)',
  fontWeight: '900',
  textShadow: '3px 3px 0 var(--accent-magenta)',
  transform: 'rotate(1deg)',
});

const createFeatureDescriptionStyles = () => ({
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  fontSize: '1.25rem',
  transform: 'rotate(-1deg)',
});

const createSectionTitleStyles = () => ({
  fontSize: 'clamp(3.5rem, 10vw, 6rem)',
  fontWeight: '900',
  textAlign: 'center',
  marginBottom: 'var(--space-4xl)',
  transform: 'rotate(-2deg)',
  textShadow: '4px 4px 0 var(--accent-magenta)',
});

const createServiceCardStyles = () => ({
  padding: 'var(--space-2xl)',
  transform: 'rotate(1deg)',
});

const createServiceTitleStyles = () => ({
  fontSize: '2rem',
  fontWeight: '800',
  marginBottom: 'var(--space-lg)',
  textShadow: '2px 2px 0 var(--accent-teal)',
});

const createServiceDescriptionStyles = () => ({
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  marginBottom: 'var(--space-lg)',
  fontSize: '1.125rem',
});

const createStatsCardStyles = () => ({
  padding: 'var(--space-2xl)',
  textAlign: 'center',
  transform: 'rotate(-1deg)',
});

const createStatsNumberStyles = color => ({
  fontSize: '4rem',
  color: color,
  marginBottom: 'var(--space-sm)',
  fontWeight: '900',
  textShadow: '3px 3px 0 var(--border-and-outline)',
});

const createStatsLabelStyles = () => ({
  color: 'var(--text-secondary)',
  fontWeight: '700',
  fontSize: '1.25rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
});

const createCTACardStyles = () => ({
  background: 'var(--background-primary)',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: 'var(--space-4xl)',
  transform: 'rotate(1deg)',
});

const createCTATitleStyles = () => ({
  fontSize: 'clamp(3rem, 10vw, 5rem)',
  fontWeight: '900',
  lineHeight: '1.1',
  textShadow: '4px 4px 0 var(--accent-magenta)',
});

const createCTADescriptionStyles = () => ({
  fontSize: '1.5rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  marginBottom: 'var(--space-2xl)',
});

// CHAOTIC COMPONENT SECTIONS
const HeroSection = () => (
  <section className="section hero-section" style={createHeroStyles()}>
    {/* AGGRESSIVE BACKGROUND ELEMENTS */}
    <div style={createBackgroundElementStyles(5, 5, 300, 300, 15, 'var(--accent-magenta)')} />
    <div style={createBackgroundElementStyles(15, 15, 200, 200, -20, 'var(--accent-teal)')} />
    <div style={createBackgroundElementStyles(25, 8, 250, 250, 45, 'var(--accent-yellow)')} />
    <div style={createBackgroundElementStyles(10, 25, 180, 180, -30, 'var(--accent-orange)')} />

    <div className="container">
      {/* MAIN HERO CONTENT */}
      <div className="text-center" style={{ marginBottom: '0', position: 'relative', zIndex: 2 }}>
        <h1 className="mb-4" style={createHeroTitleStyles()}>
          POWERFUL
        </h1>
        <h2 className="mb-4" style={createHeroSubtitleStyles()}>
          WEB DESIGN
        </h2>
        <p
          className="mb-4 hero-description"
          style={createHeroDescriptionStyles()}
        >
          We don't just create websites. We craft digital experiences that demand attention 
          and drive results. Our unique approach combines bold, rebellious design with strategic 
          structure to deliver websites that stand out in today's crowded digital landscape.
        </p>
        <div style={createButtonContainerStyles()}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="primary"
              style={{
                fontSize: '1.25rem',
                padding: 'var(--space-lg) var(--space-2xl)',
                transform: 'rotate(-3deg)',
              }}
            >
              START REVOLUTION
            </Button>
          </Link>
          <Link to="/work" style={{ textDecoration: 'none' }}>
            <Button
              variant="outline"
              style={{
                fontSize: '1.5rem',
                padding: 'var(--space-xl) var(--space-3xl)',
                transform: 'rotate(2deg)',
              }}
            >
              VIEW OUR WORK
            </Button>
          </Link>
        </div>
      </div>


    </div>
  </section>
);

const PhilosophySection = () => (
  <section className="section accent-section-light" style={{backgroundColor: 'var(--accent-light-magenta)', position: 'relative'}}>
    <div className="container">
      <div
        className="grid grid-2"
        style={{ gap: 'var(--space-4xl)', alignItems: 'center' }}
      >
        <div style={{ transform: 'rotate(-1deg)' }}>
          <h2 className="mb-4" style={createSectionTitleStyles()}>
            OUR APPROACH
          </h2>
          <p
            className="mb-4 philosophy-intro"
            style={{
              fontSize: '1.5rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: 'var(--space-xl)',
              transform: 'rotate(1deg)',
            }}
          >
            We believe in the power of bold design to capture attention and drive action. 
            Our "Structured Rebellion" philosophy combines the energy of unconventional design 
            with the precision of strategic thinking.
          </p>
          <p className="mb-4" style={{ lineHeight: '1.6', fontSize: '1.25rem', transform: 'rotate(-1deg)' }}>
            Every website we create follows this principle: break the rules of conventional 
            web design while maintaining perfect functionality and user experience. We use bold 
            colours, striking typography, and unconventional layouts to create websites that 
            are impossible to ignore.
          </p>
          <p className="mb-4" style={{ lineHeight: '1.6', fontSize: '1.25rem', transform: 'rotate(1deg)' }}>
            The result? Websites that not only look extraordinary but also deliver exceptional 
            performance for your business. We create digital experiences that stand out, engage 
            users, and drive conversions.
          </p>
          <p className="mb-4" style={{ lineHeight: '1.6', fontSize: '1.25rem', transform: 'rotate(-1deg)' }}>
            This isn't just design. It's strategic rebellion. It's about finding the perfect 
            balance between bold creativity and business results.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-lg)',
              flexWrap: 'wrap',
              marginTop: 'var(--space-2xl)',
            }}
          >
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="secondary"
                style={{
                  fontSize: '1.25rem',
                  padding: 'var(--space-lg) var(--space-2xl)',
                  transform: 'rotate(-2deg)',
                }}
              >
                JOIN THE REVOLUTION
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button
                variant="outline"
                style={{
                  fontSize: '1.25rem',
                  padding: 'var(--space-lg) var(--space-2xl)',
                  transform: 'rotate(2deg)',
                }}
              >
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2xl)',
            alignContent: 'start',
          }}
        >
          <div
            className="neobrutalism-card accent-magenta"
            style={{ padding: 'var(--space-xl)', transform: 'rotate(2deg)' }}
          >
            <h3 style={createFeatureTitleStyles()}>BOLD DESIGN</h3>
            <p style={createFeatureDescriptionStyles()}>
              We create websites that break conventions while maintaining perfect functionality. 
              Every element is intentional, every colour purposeful, every interaction meaningful.
            </p>
          </div>
          <div
            className="neobrutalism-card accent-teal"
            style={{ padding: 'var(--space-xl)', transform: 'rotate(-1deg)' }}
          >
            <h3 style={createFeatureTitleStyles()}>STRATEGIC STRUCTURE</h3>
            <p style={createFeatureDescriptionStyles()}>
              Behind every rebellious design lies strategic thinking. We ensure your website 
              not only looks bold but performs brilliantly for your business goals.
            </p>
          </div>
          <div
            className="neobrutalism-card accent-yellow"
            style={{ padding: 'var(--space-xl)', transform: 'rotate(3deg)' }}
          >
            <h3 style={createFeatureTitleStyles()}>RESULTS DRIVEN</h3>
            <p style={createFeatureDescriptionStyles()}>
              Your competitors will notice when they see what we've built. This isn't just 
              a website. It's a powerful tool for your business success.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="section" style={{backgroundColor: 'var(--background-primary)', position: 'relative'}}>
    <div className="container">
      <h2 className="section-title" style={createSectionTitleStyles()}>
        OUR WEAPONS
      </h2>

      {/* CHAOTIC GRID LAYOUT */}
      <div className="grid grid-3" style={{ gap: 'var(--space-3xl)' }}>
        <div
          className="neobrutalism-card accent-violet"
          style={createServiceCardStyles()}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            WEBSITE DESIGN
          </h3>
          <p
            className="mb-3 service-description"
            style={createServiceDescriptionStyles()}
          >
            Bold, structured websites that break conventions while maintaining 
            perfect functionality and user experience. We create digital experiences 
            that capture attention and drive results.
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
          style={{...createServiceCardStyles(), transform: 'rotate(-2deg)'}}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            BRAND IDENTITY
          </h3>
          <p
            className="mb-3 service-description"
            style={createServiceDescriptionStyles()}
          >
            Distinctive brand identities that stand out in a crowded marketplace 
            with rebellious visual elements. Your brand should be as bold as your ambitions.
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
          style={{...createServiceCardStyles(), transform: 'rotate(1deg)'}}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            WEB DEVELOPMENT
          </h3>
          <p
            className="mb-3 service-description"
            style={createServiceDescriptionStyles()}
          >
            Robust, scalable web applications built with modern technologies 
            and bold design principles. We build the technical foundation 
            that supports your bold vision.
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

      {/* CHAOTIC GRID LAYOUT */}
      <div className="grid grid-4" style={{ gap: 'var(--space-3xl)' }}>
        <div
          className="neobrutalism-stats-card"
          style={createStatsCardStyles()}
        >
          <h2 style={createStatsNumberStyles('var(--accent-magenta)')}>100+</h2>
          <p style={createStatsLabelStyles()}>Projects Destroyed</p>
        </div>
        <div
          className="neobrutalism-stats-card"
          style={{...createStatsCardStyles(), transform: 'rotate(2deg)'}}
        >
          <h2 style={createStatsNumberStyles('var(--accent-teal)')}>100%</h2>
          <p style={createStatsLabelStyles()}>Client Satisfaction</p>
        </div>
        <div
          className="neobrutalism-stats-card"
          style={{...createStatsCardStyles(), transform: 'rotate(-1deg)'}}
        >
          <h2 style={createStatsNumberStyles('var(--accent-green)')}>24/7</h2>
          <p style={createStatsLabelStyles()}>Creative Destruction</p>
        </div>
        <div
          className="neobrutalism-stats-card"
          style={{...createStatsCardStyles(), transform: 'rotate(3deg)'}}
        >
          <h2 style={createStatsNumberStyles('var(--accent-violet)')}>∞</h2>
          <p style={createStatsLabelStyles()}>Creative Possibilities</p>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="section" style={{backgroundColor: 'var(--accent-light-yellow)', position: 'relative'}}>
    <div className="container">
      <h2 className="section-title" style={createSectionTitleStyles()}>
        HOW WE WORK
      </h2>

      {/* CHAOTIC GRID LAYOUT */}
      <div className="grid grid-2" style={{ gap: 'var(--space-3xl)' }}>
        <div
          className="neobrutalism-card accent-teal"
          style={createServiceCardStyles()}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            DISCOVER
          </h3>
          <p style={createServiceDescriptionStyles()}>
            We begin by understanding your business, your goals, and the rebellious 
            spirit you want to unleash in your digital presence.
          </p>
        </div>

        <div
          className="neobrutalism-card accent-teal"
          style={{...createServiceCardStyles(), transform: 'rotate(-2deg)'}}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            STRATEGISE
          </h3>
          <p style={createServiceDescriptionStyles()}>
            We develop a bold approach that balances creative rebellion with 
            strategic thinking and user-centred design principles.
          </p>
        </div>

        <div
          className="neobrutalism-card accent-green"
          style={{...createServiceCardStyles(), transform: 'rotate(1deg)'}}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            CREATE
          </h3>
          <p style={createServiceDescriptionStyles()}>
            We craft designs that break conventions while maintaining perfect 
            functionality and exceptional user experience.
          </p>
        </div>

        <div
          className="neobrutalism-card accent-violet"
          style={{...createServiceCardStyles(), transform: 'rotate(3deg)'}}
        >
          <h3 className="mb-3" style={createServiceTitleStyles()}>
            LAUNCH
          </h3>
          <p style={createServiceDescriptionStyles()}>
            We deliver your project with precision, ensuring every element works 
            perfectly while maintaining its bold, rebellious spirit.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="section accent-section-light" style={{backgroundColor: 'var(--background-primary)', position: 'relative'}}>
    <div className="container">
      <div
        className="neobrutalism-hero-card text-center"
        style={createCTACardStyles()}
      >
        <h2 className="mb-4" style={createCTATitleStyles()}>
          READY TO DESTROY?
        </h2>
        <p
          className="mb-4 cta-description"
          style={createCTADescriptionStyles()}
        >
          Let's create a website that breaks the rules while delivering exceptional 
          results for your business. Something bold, strategic, and absolutely unforgettable.
        </p>
        <div style={createButtonContainerStyles()}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="primary"
              style={{
                fontSize: '1.5rem',
                padding: 'var(--space-xl) var(--space-3xl)',
                transform: 'rotate(-2deg)',
              }}
            >
              START DESTRUCTION
            </Button>
          </Link>
          <Link to="/work" style={{ textDecoration: 'none' }}>
            <Button
              variant="outline"
              style={{
                fontSize: '1.5rem',
                padding: 'var(--space-xl) var(--space-3xl)',
                transform: 'rotate(2deg)',
              }}
            >
              VIEW OUR WORK
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
      <ProcessSection />
      <CTASection />
    </div>
  );
};

export default Home;
