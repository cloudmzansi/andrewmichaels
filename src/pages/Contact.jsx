import React, { useState } from 'react';
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
  Accordion,
} from '../components/ui';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
            background: 'var(--accent-red)',
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
                marginBottom: 'var(--space-lg)',
              }}
            >
              LET'S CREATE TOGETHER
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
              Ready to make something unforgettable? Let's talk about your
              vision and turn it into reality with our structured rebellion
              approach. We're here to help you create a website that stands out 
              and drives results.
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
              Bold designs with purposeful structure. Rebellious creativity with
              intentional clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Enhanced Design */}
      <section className="section">
        <div className="container">
          <div
            className="grid grid-2"
            style={{ gap: 'var(--space-3xl)', alignItems: 'start' }}
          >
            <div>
              <h2
                className="mb-4"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                }}
              >
                TELL US YOUR STORY
              </h2>
              <p
                className="mb-4 form-intro"
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.6',
                  marginBottom: 'var(--space-xl)',
                }}
              >
                Share your vision, your challenges, and your rebellious spirit.
                We'll help you create something that breaks the rules while
                maintaining perfect functionality.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-lg)',
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-sm)',
                      fontWeight: '600',
                      fontSize: '1rem',
                    }}
                  >
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border:
                        'var(--border-thickness) solid var(--border-and-outline)',
                      borderRadius: 'var(--border-radius)',
                      fontSize: '1rem',
                      background: 'var(--background-primary)',
                      boxShadow:
                        'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-sm)',
                      fontWeight: '600',
                      fontSize: '1rem',
                    }}
                  >
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border:
                        'var(--border-thickness) solid var(--border-and-outline)',
                      borderRadius: 'var(--border-radius)',
                      fontSize: '1rem',
                      background: 'var(--background-primary)',
                      boxShadow:
                        'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-sm)',
                      fontWeight: '600',
                      fontSize: '1rem',
                    }}
                  >
                    PHONE
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border:
                        'var(--border-thickness) solid var(--border-and-outline)',
                      borderRadius: 'var(--border-radius)',
                      fontSize: '1rem',
                      background: 'var(--background-primary)',
                      boxShadow:
                        'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-sm)',
                      fontWeight: '600',
                      fontSize: '1rem',
                    }}
                  >
                    SERVICE INTEREST *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border:
                        'var(--border-thickness) solid var(--border-and-outline)',
                      borderRadius: 'var(--border-radius)',
                      fontSize: '1rem',
                      background: 'var(--background-primary)',
                      boxShadow:
                        'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="brand-identity">Brand Identity</option>
                    <option value="web-design">Web Design</option>
                    <option value="digital-experiences">
                      Digital Experiences
                    </option>
                    <option value="design-systems">Design Systems</option>
                    <option value="creative-direction">
                      Creative Direction
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-sm)',
                      fontWeight: '600',
                      fontSize: '1rem',
                    }}
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border:
                        'var(--border-thickness) solid var(--border-and-outline)',
                      borderRadius: 'var(--border-radius)',
                      fontSize: '1rem',
                      background: 'var(--background-primary)',
                      boxShadow:
                        'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  style={{
                    fontSize: '1.125rem',
                    padding: 'var(--space-md) var(--space-xl)',
                    alignSelf: 'flex-start',
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2
                className="mb-4"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                }}
              >
                GET IN TOUCH
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-xl)',
                }}
              >
                <div
                  className="neobrutalism-card accent-blue"
                  style={{ padding: 'var(--space-xl)' }}
                >
                  <h3
                    className="mb-3"
                    style={{ fontSize: '1.5rem', fontWeight: '700' }}
                  >
                    EMAIL
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '1.125rem',
                      lineHeight: '1.5',
                    }}
                  >
                    hello@cloudmzansi.com
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
                    PHONE
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '1.125rem',
                      lineHeight: '1.5',
                    }}
                  >
                    +44 (0) 123 456 7890
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
                    LOCATION
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '1.125rem',
                      lineHeight: '1.5',
                    }}
                  >
                    London, United Kingdom
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
                    AVAILABILITY
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '1.125rem',
                      lineHeight: '1.5',
                    }}
                  >
                    Monday - Friday: 9AM - 6PM GMT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced Design */}
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
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Accordion>
              <Accordion.Item title="What is Structured Rebellion?">
                <p style={{ lineHeight: '1.6', fontSize: '1.125rem' }}>
                  Structured Rebellion is our design philosophy that combines
                  the raw energy of Neobrutalism with the structured precision
                  of modern design systems. We break the rules, but we do it
                  with purpose. We challenge conventions, but we maintain
                  clarity.
                </p>
              </Accordion.Item>

              <Accordion.Item title="How long does a typical project take?">
                <p style={{ lineHeight: '1.6', fontSize: '1.125rem' }}>
                  Project timelines vary depending on complexity. A simple brand
                  identity might take 2-3 weeks, while a full website design
                  could take 4-6 weeks. We'll provide a detailed timeline during
                  our initial consultation.
                </p>
              </Accordion.Item>

              <Accordion.Item title="Do you work with international clients?">
                <p style={{ lineHeight: '1.6', fontSize: '1.125rem' }}>
                  Absolutely! We work with clients worldwide. Our structured
                  approach ensures clear communication and smooth collaboration
                  regardless of time zones or locations.
                </p>
              </Accordion.Item>

              <Accordion.Item title="What makes your approach different?">
                <p style={{ lineHeight: '1.6', fontSize: '1.125rem' }}>
                  We don't just create bold designs. We create bold designs with
                  purpose. Every element serves a function, every colour has
                  meaning, every interaction is intentional. It's rebellion with
                  structure.
                </p>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced Design */}
      <section
        className="section accent-section"
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
              <Link to="/services" style={{ textDecoration: 'none' }}>
                <Button
                  variant="primary"
                  style={{
                    fontSize: '1.125rem',
                    padding: 'var(--space-md) var(--space-xl)',
                  }}
                >
                  View Our Services
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
    </div>
  );
};

export default Contact;
