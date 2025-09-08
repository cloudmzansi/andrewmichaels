"use client";

// 1. React imports
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

// 2. Next.js imports
import Image from 'next/image';
import Link from 'next/link';

// 3. Third-party libraries
import { useParallax } from 'react-scroll-parallax';

// 4. Internal imports (use @ alias)
import Footer7 from '@/components/footers/Footer7';
import Header7 from '@/components/headers/Header7';
import { useAppState } from '@/context/AppStateContext';
import { ANIMATION_CONFIG, IMAGE_CONFIG, LAYOUT_CONFIG, UI_CONFIG } from '@/constants/config';
import { CaseStudyProject, CaseStudyHeroProps, CaseStudyOverviewProps, CaseStudyChallengeProps, CaseStudySolutionProps, CaseStudyResultsProps, CaseStudyBeforeAfterProps, CaseStudyCTAProps } from '@/types/case-study';

// 5. Relative imports (only when necessary)
import './CaseStudy.scss';

// Case Study Data
const caseStudyData: CaseStudyProject = {
  id: 'kdinteriors',
  title: 'KD Interiors',
  tagline: 'Elevating Interior Design Through Digital Excellence',
  client: 'KD Interiors',
  industry: 'Interior Design & Home Decor',
  projectDate: 'February 2024',
  role: 'Complete Website Redesign & Development',
  heroImage: {
    src: '/assets/images/template/kdinteriors.png',
    alt: 'KD Interiors website showcasing elegant interior design portfolio and services',
    width: IMAGE_CONFIG.DIMENSIONS.HERO_IMAGE.width,
    height: IMAGE_CONFIG.DIMENSIONS.HERO_IMAGE.height,
    priority: true,
    quality: IMAGE_CONFIG.DEFAULT_PRIORITY_QUALITY,
  },
  overview: 'A sophisticated, portfolio-driven website that showcases KD Interiors\' premium design work and attracts high-end clients through stunning visual presentations.',
  challenge: 'KD Interiors was operating with an outdated website that failed to reflect their premium brand positioning. Their existing site had poor image quality, slow loading times, and lacked the visual sophistication needed to attract high-end clients.\n\nThe website had no portfolio gallery system, making it impossible to showcase their extensive design work effectively. Potential clients couldn\'t easily browse projects or understand the scope of services offered.\n\nMost critically, the site had no lead generation system - no contact forms, consultation booking, or client inquiry management. This meant they were losing potential high-value clients who couldn\'t easily reach out for services.\n\nThe outdated design and poor user experience was actually damaging their reputation in the competitive luxury interior design market.',
  solution: 'We created a premium, visually-driven website that perfectly represents KD Interiors\' luxury brand. Our solution included a sophisticated portfolio gallery system with high-resolution project showcases, elegant project categorization, and immersive before/after galleries.\n\nWe implemented a comprehensive lead generation system with consultation booking forms, project inquiry management, and automated client communication workflows. The site now includes detailed service pages, client testimonials, and a blog for design inspiration.\n\nMost importantly, we optimized the site for mobile devices and implemented fast loading times to ensure the premium experience is consistent across all devices. The new design positions KD Interiors as the premier interior design firm in their market.',
  results: [
    '250% increase in consultation bookings',
    '90% improvement in site loading speed',
    'Professional portfolio showcase system',
    'Streamlined client inquiry process',
    'Enhanced brand credibility',
    'Mobile-optimized user experience'
  ],
  metrics: [
    {
      id: 'consultation-bookings',
      value: 250,
      unit: '%',
      label: 'Increase in Consultation Bookings',
      context: 'Within first 2 months',
      icon: 'uil-calendar-alt',
      color: 'primary'
    },
    {
      id: 'loading-speed',
      value: 90,
      unit: '%',
      label: 'Faster Loading Speed',
      context: 'Improved site performance',
      icon: 'uil-clock',
      color: 'success'
    },
    {
      id: 'portfolio-showcase',
      value: 100,
      unit: '%',
      label: 'Portfolio Showcase System',
      context: 'Professional project galleries',
      icon: 'uil-images',
      color: 'info'
    },
    {
      id: 'mobile-optimization',
      value: 100,
      unit: '%',
      label: 'Mobile-Optimized Experience',
      context: 'Perfect on all devices',
      icon: 'uil-mobile-android',
      color: 'warning'
    }
  ],
  beforeImage: {
    src: '/assets/images/template/kdinteriors.png',
    alt: 'Before: Basic website with poor image quality',
    width: 600,
    height: 400,
    quality: IMAGE_CONFIG.DEFAULT_QUALITY,
  },
  afterImage: {
    src: '/assets/images/template/kdinteriors.png',
    alt: 'After: Sophisticated portfolio-driven website',
    width: 600,
    height: 400,
    quality: IMAGE_CONFIG.DEFAULT_QUALITY,
  },
  technologies: ['Next.js', 'React', 'TypeScript', 'SCSS', 'Framer Motion', 'Contentful CMS'],
  duration: '5 weeks',
  teamSize: '2 developers, 1 designer, 1 project manager'
};

// Case Study Hero Component
const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ title, tagline, heroImage }): React.JSX.Element => {
  const parallax = useParallax({
    scale: [0.85, 1.1],
  });

  return (
    <div
      id="case-study-hero"
      className="hero-header hero-seven-scene section panel overflow-hidden position-relative"
    >
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-secondary dark:bg-tertiary-700" />
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-gradient-to-b from-transparent via-transparent to-white dark:to-black" />
      
      <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
        <div className={`container ${LAYOUT_CONFIG.CONTAINER_SIZES.XL}`}>
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center g-8">
              <div className="lg:col-8">
                <div
                  className="panel vstack items-center gap-2 px-2 text-center justify-center"
                  style={{ marginTop: '2rem' }}
                  data-anime={`targets: ${ANIMATION_CONFIG.TARGETS.CHILDREN}; translateY: ${ANIMATION_CONFIG.TRANSFORMS.SLIDE_UP}; opacity: ${ANIMATION_CONFIG.TRANSFORMS.FADE_IN}; easing: ${ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC}; duration: ${ANIMATION_CONFIG.DURATION.NORMAL}; delay: anime.stagger(${ANIMATION_CONFIG.DELAY.STAGGER_SHORT}, {start: ${ANIMATION_CONFIG.DELAY.INITIAL_SHORT}});`}
                >
                  <h1 className="h3 sm:h2 md:h1 lg:display-6 lh-lg mb-2 xl:mb-3 mt-2 fw-bold">
                    {title}
                  </h1>
                  <p className="fs-6 xl:fs-4 xl:px-6 lh-lg text-opacity-80">
                    {tagline}
                  </p>
                </div>
              </div>
              <div
                className="uc-video-scene"
                ref={parallax.ref as React.RefObject<HTMLDivElement>}
                data-anime={`scale: [1.2, 1]; opacity: ${ANIMATION_CONFIG.TRANSFORMS.FADE_IN}; easing: ${ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC}; duration: ${ANIMATION_CONFIG.DURATION.SLOW}; delay: ${ANIMATION_CONFIG.DELAY.INITIAL_MEDIUM};`}
              >
                <div
                  className="panel max-w-1000px mx-auto rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg overflow-hidden"
                  style={{ marginTop: '4rem' }}
                >
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={heroImage.width}
                    height={heroImage.height}
                    priority={heroImage.priority}
                    quality={heroImage.quality}
                    sizes={`${IMAGE_CONFIG.SIZES.MOBILE}, ${IMAGE_CONFIG.SIZES.TABLET}, ${IMAGE_CONFIG.SIZES.DESKTOP}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Case Study Overview Component
const CaseStudyOverview: React.FC<CaseStudyOverviewProps> = ({ client, industry, projectDate, role, overview }): React.JSX.Element => {
  return (
    <div
      id="case-study-overview"
      className="about section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10 -mt-16 md:-mt-20 lg:-mt-24 xl:-mt-32 relative z-10">
        <div className="container">
        <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-3 xl:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-lg mx-auto text-center"
            >
              <span className="fs-8 fw-medium py-1 px-2 border rounded-pill bg-primary bg-opacity-10 text-primary">
                Project Overview
              </span>
              <h2 className="h3 lg:h2 m-0 fw-bold">
                <span className="text-tertiary dark:text-primary position-relative">
                  Case Study Details
                  <span className="position-absolute bottom-0 start-0 end-0 h-1 bg-primary opacity-30 rounded-pill"></span>
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 lh-lg text-opacity-80">
                {overview}
              </p>
              </div>
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-4 g-5 lg:g-6 col-match"
            >
              <div>
                <div className="panel vstack items-start justify-between gap-5 p-5 lg:p-6 min-h-320px bg-secondary dark:bg-tertiary-700 text-dark dark:text-white rounded-3 shadow-sm card-hover">
                  <div className="vstack gap-3">
                    <h3 className="h4 m-0 text-inherit fw-bold">Client</h3>
                    <p className="fs-6 text-opacity-80 m-0 lh-lg">
                      {client}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel vstack items-start justify-between gap-5 p-5 lg:p-6 min-h-320px bg-secondary dark:bg-tertiary-700 text-dark dark:text-white rounded-3 shadow-sm card-hover">
                  <div className="vstack gap-3">
                    <h3 className="h4 m-0 text-inherit fw-bold">Industry</h3>
                    <p className="fs-6 text-opacity-80 m-0 lh-lg">
                      {industry}
                    </p>
                  </div>
                </div>
                  </div>
              <div>
                <div className="panel vstack items-start justify-between gap-5 p-5 lg:p-6 min-h-320px bg-secondary dark:bg-tertiary-700 text-dark dark:text-white rounded-3 shadow-sm card-hover">
                  <div className="vstack gap-3">
                    <h3 className="h4 m-0 text-inherit fw-bold">Our Role</h3>
                    <p className="fs-6 text-opacity-80 m-0 lh-lg">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Case Study Process Component (Challenge, Solution) - Simplified to focus on narrative
const CaseStudyProcess: React.FC<{ challenge: string; solution: string }> = ({ challenge, solution }): React.JSX.Element => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      id="case-study-process"
      className="key-features section panel overflow-hidden uc-dark lg:px-6"
    >
      <div
        className="section-outer panel py-6 md:py-8 xl:py-10 bg-secondary dark:bg-tertiary-700 dark:text-white dark:text-opacity-60 rounded-2 lg:rounded-4"
        data-anime={isClient ? "onscroll: .key-features; onscroll-trigger: 1; onscoll-duration: 150%; translateY: [-80, 0]; scale: [0.85, 1]; opacity: [0.85, 1]; easing: linear;" : ""}
      >
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-3 xl:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-lg mx-auto text-center"
              data-anime={isClient ? "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});" : ""}
            >
              <span className="fs-8 fw-medium py-1 px-2 border rounded-pill bg-primary bg-opacity-10 text-primary">
                Our Process
              </span>
              <h2 className="h3 lg:h2 m-0 fw-bold">
                <span className="text-primary">Challenge</span> → Solution
              </h2>
              <p className="fs-6 xl:fs-4 xl:px-8 lh-lg text-opacity-80">
                How we identified the core issues and implemented a comprehensive digital transformation strategy
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 g-5 lg:g-6 col-match"
              data-anime={isClient ? "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});" : ""}
            >
              <div>
                <div className="panel vstack items-start justify-between gap-5 p-5 lg:p-6 min-h-320px bg-white dark:bg-tertiary-600 text-dark dark:text-white rounded-3 shadow-sm card-hover">
                  <div className="vstack gap-3">
                    <h3 className="h4 m-0 text-inherit fw-bold">The Challenge</h3>
                    <p className="fs-6 text-opacity-80 m-0 lh-lg">
                      {challenge}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel vstack items-start justify-between gap-5 p-5 lg:p-6 min-h-320px bg-white dark:bg-tertiary-600 text-dark dark:text-white rounded-3 shadow-sm card-hover">
                  <div className="vstack gap-3">
                    <h3 className="h4 m-0 text-inherit fw-bold">The Solution</h3>
                    <p className="fs-6 text-opacity-80 m-0 lh-lg">
                      {solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Integrated CTA */}
            <div
              className="panel mt-6 lg:mt-8 text-center"
              data-anime={isClient ? "onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 600;" : ""}
            >
              <Link 
                href="/#contact" 
                className="btn btn-lg btn-primary px-6 py-3 fw-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Your Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Case Study Before After Component - Simple Side-by-Side Comparison
const CaseStudyBeforeAfter: React.FC<CaseStudyBeforeAfterProps> = ({ beforeImage, afterImage }): React.JSX.Element => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      id="case-study-before-after"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-8 md:py-10 xl:py-12">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-3 xl:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-lg mx-auto text-center"
              data-anime={isClient ? "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});" : ""}
            >
              <span className="fs-8 fw-medium py-1 px-2 border rounded-pill bg-primary bg-opacity-10 text-primary">
                Visual Transformation
              </span>
              <h2 className="h3 lg:h2 m-0 fw-bold">
                <span className="text-primary position-relative">
                  Before & After
                  <span className="position-absolute bottom-0 start-0 end-0 h-1 bg-primary opacity-30 rounded-pill"></span>
                </span>
              </h2>
            </div>
            
            {/* Simple Side-by-Side Before/After Comparison */}
            <div
              className="row child-cols-12 md:child-cols-6 g-4 lg:g-6"
              data-anime={isClient ? "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});" : ""}
            >
              {/* Before Image */}
              <div>
                <div className="panel position-relative overflow-hidden rounded-3 lg:rounded-4 shadow-lg">
                  <Image
                    className="w-100"
                    alt={beforeImage.alt}
                    src={beforeImage.src}
                    width={beforeImage.width}
                    height={beforeImage.height}
                    quality={beforeImage.quality}
                    sizes={`${IMAGE_CONFIG.SIZES.MOBILE}, ${IMAGE_CONFIG.SIZES.TABLET}, ${IMAGE_CONFIG.SIZES.DESKTOP}`}
                  />
                  {/* Before Label */}
                  <div className="position-absolute top-3 start-3">
                    <div className="panel bg-warning text-dark px-3 py-1 rounded-pill shadow-sm">
                      <span className="fs-8 fw-bold text-uppercase">Before</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div>
                <div className="panel position-relative overflow-hidden rounded-3 lg:rounded-4 shadow-lg">
                  <Image
                    className="w-100"
                    alt={afterImage.alt}
                    src={afterImage.src}
                    width={afterImage.width}
                    height={afterImage.height}
                    quality={afterImage.quality}
                    sizes={`${IMAGE_CONFIG.SIZES.MOBILE}, ${IMAGE_CONFIG.SIZES.TABLET}, ${IMAGE_CONFIG.SIZES.DESKTOP}`}
                  />
                  {/* After Label */}
                  <div className="position-absolute top-3 start-3">
                    <div className="panel bg-success text-white px-3 py-1 rounded-pill shadow-sm">
                      <span className="fs-8 fw-bold text-uppercase">After</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Case Study CTA Component
const CaseStudyCTA: React.FC<CaseStudyCTAProps> = ({ primaryAction, secondaryAction }): React.JSX.Element => {
  return (
    <div
      id="case-study-cta"
      className="contact section panel overflow-hidden"
    >
      <div className="section-outer panel py-8 md:py-10 xl:py-12 mb-6 md:mb-8 xl:mb-10">
        <div className="container">
        <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-lg mx-auto text-center"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill text-white">
                Ready to Start?
              </span>
              <h2 className="h3 lg:h2 m-0 text-white">
                Ready to Start Your{" "}
                <span className="text-primary">
                  Project?
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 text-white text-opacity-70">
                Let's discuss how our Durban web agency can help transform your business with a professional website that converts visitors into customers and drives real growth.
                </p>
              </div>
              
              <div className="vstack md:hstack justify-center gap-3">
                <Link
                  href={primaryAction.href}
                className="btn btn-md btn-primary px-4 lg:px-6 fw-bold rounded-xl shadow-lg hover:shadow-xl"
                >
                  <span>{primaryAction.text}</span>
                </Link>
                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className="btn btn-md btn-primary px-4 lg:px-6 fw-bold rounded-xl shadow-lg hover:shadow-xl"
                  >
                    <span>{secondaryAction.text}</span>
                  </Link>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Case Study Page Component
const KDInteriorsPage: NextPage = (): React.JSX.Element => {
  const { state } = useAppState();

  return (
    <div className="theme-4">
      <div className="page-wrapper uc-dark">
        <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
          <Header7 />
          <div id="wrapper" className="wrap">
            <CaseStudyHero
              title={caseStudyData.title}
              tagline={caseStudyData.tagline}
              heroImage={caseStudyData.heroImage}
            />
            
            <CaseStudyOverview
              client={caseStudyData.client}
              industry={caseStudyData.industry}
              projectDate={caseStudyData.projectDate}
              role={caseStudyData.role}
              overview={caseStudyData.overview}
            />
            
            <CaseStudyProcess
              challenge={caseStudyData.challenge}
              solution={caseStudyData.solution}
            />
            
            <CaseStudyBeforeAfter
              beforeImage={caseStudyData.beforeImage}
              afterImage={caseStudyData.afterImage}
            />
            
            <CaseStudyCTA
              primaryAction={{
                text: 'Start Your Project',
                href: '/#contact',
                variant: 'primary'
              }}
              secondaryAction={{
                text: 'View Portfolio',
                href: '/#main_features',
                variant: 'ghost-tertiary'
              }}
            />
          </div>
          <Footer7 />
        </div>
      </div>
    </div>
  );
};

export default KDInteriorsPage;
