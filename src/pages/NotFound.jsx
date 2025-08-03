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
} from '../components/ui';

const NotFound = () => {
  return (
    <div>
      {/* Hero Section - Structured Rebellion */}
      <section
        className="section accent-section-light"
        style={{
          padding: 'var(--space-3xl) 0',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container">
          <div
            className="neobrutalism-card text-center"
            style={{
              background: 'var(--background-primary)',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                fontSize: '8rem',
                fontWeight: 'bold',
                color: 'var(--accent-violet)',
                marginBottom: 'var(--space-lg)',
                lineHeight: '1',
              }}
            >
              404
            </div>
            <h1 className="mb-4">PAGE NOT FOUND</h1>
            <p
              className="mb-4"
              style={{ fontSize: '1.375rem', color: 'var(--text-secondary)' }}
            >
              Oops! Looks like this page got lost in the structured rebellion.
              Don't worry, even the most structured designs have their
              rebellious moments!
            </p>
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-md)',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="primary"
                onClick={() => (window.location.href = '/')}
              >
                Go Home
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Links Section - Structured Layout */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">MAYBE YOU'RE LOOKING FOR:</h2>
          <div className="grid grid-3">
            <div className="neobrutalism-card accent-blue">
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--accent-blue)',
                    border:
                      'var(--border-thickness) solid var(--border-and-outline)',
                    borderRadius: '50%',
                    margin: '0 auto var(--space-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: 'white',
                    boxShadow:
                      'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
                  }}
                >
                  🏠
                </div>
                <h3 className="mb-3">HOME</h3>
                <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
                  Return to our homepage and explore our structured rebellion
                  approach.
                </p>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button variant="primary">Visit Home</Button>
                </Link>
              </div>
            </div>

            <div className="neobrutalism-card accent-teal">
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--accent-teal)',
                    border:
                      'var(--border-thickness) solid var(--border-and-outline)',
                    borderRadius: '50%',
                    margin: '0 auto var(--space-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: 'white',
                    boxShadow:
                      'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
                  }}
                >
                  🎨
                </div>
                <h3 className="mb-3">SERVICES</h3>
                <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
                  Discover our services and see what we can create for you.
                </p>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                  <Button variant="primary">View Services</Button>
                </Link>
              </div>
            </div>

            <div className="neobrutalism-card accent-green">
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--accent-green)',
                    border:
                      'var(--border-thickness) solid var(--border-and-outline)',
                    borderRadius: '50%',
                    margin: '0 auto var(--space-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: 'white',
                    boxShadow:
                      'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
                  }}
                >
                  📞
                </div>
                <h3 className="mb-3">CONTACT</h3>
                <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
                  Get in touch with us to discuss your project and start
                  creating structured rebellion.
                </p>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <Button variant="primary">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Structured Call to Action */}
      <section className="section accent-section">
        <div className="container">
          <div
            className="neobrutalism-card text-center"
            style={{
              background: 'var(--background-primary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <h2 className="mb-4">NEED HELP?</h2>
            <p
              className="mb-4"
              style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}
            >
              Can't find what you're looking for? Our team is here to help you
              navigate our structured rebellion approach.
            </p>
            <Button
              variant="primary"
              onClick={() => (window.location.href = '/contact')}
            >
              Get Help
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
