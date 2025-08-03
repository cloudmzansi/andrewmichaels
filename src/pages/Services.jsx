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

const Services = () => {
  return (
    <div>
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
            top: '12%',
            right: '6%',
            width: '160px',
            height: '160px',
            background: 'var(--accent-orange)',
            borderRadius: 'var(--border-radius)',
            border: 'var(--border-thickness) solid var(--border-and-outline)',
            boxShadow:
              'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
            opacity: '0.1',
            transform: 'rotate(12deg)',
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
              }}
            >
              OUR SERVICES
            </h1>
            <p
              className="mb-4 hero-description"
              style={{
                fontSize: 'clamp(1.125rem, 3vw, 1.375rem)',
                color: 'var(--text-secondary)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              We don't just provide services. We create digital experiences that embody
              structured rebellion. Every project is different, every design is unique,
              but every solution is built to deliver results for your business.
            </p>
            <p
              className="mb-4 hero-subtext"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                color: 'var(--text-muted)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.5',
              }}
            >
              Bold designs with purposeful structure. Rebellious creativity with
              strategic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section - Enhanced Design */}
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
            CORE SERVICES
          </h2>
          <Carousel mobileOnly={true} showDots={true} autoPlay={false}>
            <div
              className="neobrutalism-card accent-blue"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3 service-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                BRAND IDENTITY
              </h3>
              <p
                className="mb-3 service-description"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Visual identities that stand out while maintaining consistency.
                Bold logos, structured guidelines, rebellious spirit.
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
              className="neobrutalism-card accent-teal"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3 service-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                WEB DESIGN
              </h3>
              <p
                className="mb-3 service-description"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Bold, structured websites that break conventions while
                maintaining perfect usability. Every pixel is intentional.
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
              className="neobrutalism-card accent-green"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3 service-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                DIGITAL EXPERIENCES
              </h3>
              <p
                className="mb-3 service-description"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
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
          </Carousel>
        </div>
      </section>

      {/* Process Section - Enhanced Design */}
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
            OUR PROCESS
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

      {/* Specialised Services Section - Enhanced Design */}
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
            SPECIALISED SERVICES
          </h2>
          <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
            <div
              className="neobrutalism-card accent-violet"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                DESIGN SYSTEMS
              </h3>
              <p
                className="mb-3 service-description"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Creating structured frameworks that allow for bold creativity
                while maintaining consistency. Design systems that support both
                rebellion and structure.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-violet)',
                      borderRadius: '50%',
                    }}
                  />
                  Component Libraries
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-violet)',
                      borderRadius: '50%',
                    }}
                  />
                  Style Guides
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-violet)',
                      borderRadius: '50%',
                    }}
                  />
                  Design Tokens
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-violet)',
                      borderRadius: '50%',
                    }}
                  />
                  Documentation
                </li>
              </ul>
            </div>

            <div
              className="neobrutalism-card accent-orange"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h3
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                CREATIVE DIRECTION
              </h3>
              <p
                className="mb-3 service-description"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Strategic creative direction that balances bold vision with
                structured execution. Ensuring every creative decision serves a
                purpose.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-orange)',
                      borderRadius: '50%',
                    }}
                  />
                  Brand Strategy
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-orange)',
                      borderRadius: '50%',
                    }}
                  />
                  Creative Vision
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-orange)',
                      borderRadius: '50%',
                    }}
                  />
                  Art Direction
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-orange)',
                      borderRadius: '50%',
                    }}
                  />
                  Campaign Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced Design */}
      <section
        className="section accent-section"
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
            SERVICE PACKAGES
          </h2>
          <div className="grid grid-3" style={{ gap: 'var(--space-xl)' }}>
            <div
              className="neobrutalism-card accent-blue"
              style={{
                padding: 'var(--space-xl)',
                textAlign: 'center',
              }}
            >
              <h3
                className="mb-3 package-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                STARTER
              </h3>
              <h2
                className="package-price"
                style={{
                  fontSize: '3rem',
                  color: 'var(--accent-blue)',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: '900',
                }}
              >
                £500
              </h2>
              <p
                className="package-subtitle"
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-lg)',
                  fontSize: '1.125rem',
                }}
              >
                Perfect for small projects
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                  textAlign: 'left',
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-blue)',
                      borderRadius: '50%',
                    }}
                  />
                  Logo Design
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-blue)',
                      borderRadius: '50%',
                    }}
                  />
                  Basic Brand Guidelines
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-blue)',
                      borderRadius: '50%',
                    }}
                  />
                  Simple Website
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-blue)',
                      borderRadius: '50%',
                    }}
                  />
                  2 Revisions
                </li>
              </ul>
            </div>

            <div
              className="neobrutalism-card accent-teal"
              style={{
                padding: 'var(--space-xl)',
                textAlign: 'center',
              }}
            >
              <h3
                className="mb-3 package-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                PROFESSIONAL
              </h3>
              <h2
                className="package-price"
                style={{
                  fontSize: '3rem',
                  color: 'var(--accent-teal)',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: '900',
                }}
              >
                £1500
              </h2>
              <p
                className="package-subtitle"
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-lg)',
                  fontSize: '1.125rem',
                }}
              >
                For growing businesses
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                  textAlign: 'left',
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-teal)',
                      borderRadius: '50%',
                    }}
                  />
                  Complete Brand Identity
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-teal)',
                      borderRadius: '50%',
                    }}
                  />
                  Full Website Design
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-teal)',
                      borderRadius: '50%',
                    }}
                  />
                  Design System
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-teal)',
                      borderRadius: '50%',
                    }}
                  />
                  Unlimited Revisions
                </li>
              </ul>
            </div>

            <div
              className="neobrutalism-card accent-green"
              style={{
                padding: 'var(--space-xl)',
                textAlign: 'center',
              }}
            >
              <h3
                className="mb-3 package-title"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                ENTERPRISE
              </h3>
              <h2
                className="package-price"
                style={{
                  fontSize: '3rem',
                  color: 'var(--accent-green)',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: '900',
                }}
              >
                £3000+
              </h2>
              <p
                className="package-subtitle"
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-lg)',
                  fontSize: '1.125rem',
                }}
              >
                Custom solutions
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                  textAlign: 'left',
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-green)',
                      borderRadius: '50%',
                    }}
                  />
                  Full Creative Direction
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-green)',
                      borderRadius: '50%',
                    }}
                  />
                  Complex Web Applications
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-green)',
                      borderRadius: '50%',
                    }}
                  />
                  Ongoing Support
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent-green)',
                      borderRadius: '50%',
                    }}
                  />
                  Priority Service
                </li>
              </ul>
            </div>
          </div>
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
                NEW SERVICE AVAILABLE
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  fontSize: '1.125rem',
                }}
              >
                We're now offering our Structured Rebellion design system as a
                complete package. Get the full Neobrutalism experience with
                structured implementation.
              </p>
            </Alert>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
