"use client";

// 1. React imports
import React, { useEffect, useState, useRef } from 'react';

// 2. Next.js imports
// (No Next.js specific imports needed for this component)

// 3. Third-party libraries
// (No third-party libraries needed)

// 4. Internal imports (use @ alias)
import { ANIMATION_CONFIG, UI_CONFIG } from '@/constants/config';

// 5. Relative imports (only when necessary)
// (No relative imports needed)

// Metric Item Interface
export interface MetricItem {
  id: string;
  value: number;
  unit: string;
  label: string;
  context?: string;
  icon?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
}

// Impact Dashboard Props Interface
export interface ImpactDashboardProps {
  metrics: MetricItem[];
  className?: string;
}

// Counter Animation Hook
const useCounterAnimation = (endValue: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, endValue, duration, delay]);

  return { count, elementRef };
};

// Individual Metric Card Component
const MetricCard: React.FC<{ metric: MetricItem; index: number }> = ({ metric, index }): React.JSX.Element => {
  const { count, elementRef } = useCounterAnimation(metric.value, 2000, index * 200);
  
  const getColorClasses = (color?: string) => {
    // Use consistent homepage color pattern for all metric cards
    return 'bg-secondary dark:bg-tertiary-700 text-dark dark:text-white';
  };

  return (
    <div
      ref={elementRef}
      className={`panel vstack items-center justify-center gap-3 p-6 lg:p-8 rounded-3 lg:rounded-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${getColorClasses(metric.color)}`}
      data-anime={`onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: ${ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC}; duration: ${ANIMATION_CONFIG.DURATION.NORMAL}; delay: ${ANIMATION_CONFIG.DELAY.INITIAL_SHORT + (index * 100)};`}
    >
      {/* Icon (if provided) */}
      {metric.icon && (
        <div className="panel mb-2">
          <i className={`icon icon-lg ${metric.icon} text-dark dark:text-white opacity-80`} />
        </div>
      )}
      
      {/* Main Metric Value */}
      <div className="panel vstack items-center gap-1">
        <div className="panel hstack items-baseline gap-2">
          <span className="display-4 lg:display-3 fw-bold text-dark dark:text-white">
            {count}
          </span>
          <span className="fs-4 lg:fs-3 fw-semibold text-dark dark:text-white opacity-80">
            {metric.unit}
          </span>
        </div>
        
        {/* Metric Label */}
        <h3 className="h5 lg:h4 m-0 text-dark dark:text-white fw-bold text-center">
          {metric.label}
        </h3>
        
        {/* Supporting Context (if provided) */}
        {metric.context && (
          <p className="fs-7 lg:fs-6 m-0 text-dark dark:text-white opacity-70 text-center lh-sm">
            {metric.context}
          </p>
        )}
      </div>
    </div>
  );
};

// Main Impact Dashboard Component
const ImpactDashboard: React.FC<ImpactDashboardProps> = ({ metrics, className = '' }): React.JSX.Element => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      id="impact-dashboard"
      className={`impact-dashboard section panel overflow-hidden ${className}`}
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10">
        <div className="container">
          <div className="section-inner panel">
            {/* Section Header */}
            <div
              className="panel vstack items-center gap-3 xl:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-lg mx-auto text-center"
              data-anime={isClient ? `onview: -200; targets: ${ANIMATION_CONFIG.TARGETS.CHILDREN}; translateY: ${ANIMATION_CONFIG.TRANSFORMS.SLIDE_UP}; opacity: ${ANIMATION_CONFIG.TRANSFORMS.FADE_IN}; easing: ${ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC}; duration: ${ANIMATION_CONFIG.DURATION.NORMAL}; delay: anime.stagger(${ANIMATION_CONFIG.DELAY.STAGGER_SHORT}, {start: ${ANIMATION_CONFIG.DELAY.INITIAL_SHORT}});` : ""}
            >
              <span className="fs-8 fw-medium py-1 px-2 border rounded-pill bg-primary bg-opacity-10 text-primary">
                Measurable Impact
              </span>
              <h2 className="h3 lg:h2 m-0 fw-bold">
                <span className="text-primary position-relative">
                  Results That Matter
                  <span className="position-absolute bottom-0 start-0 end-0 h-1 bg-primary opacity-30 rounded-pill"></span>
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 lh-lg text-opacity-80">
                The transformation delivered measurable results that exceeded expectations and drove real business growth.
              </p>
            </div>
            
            {/* Metrics Grid */}
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-4 g-4 lg:g-6"
              data-anime={isClient ? `onview: -200; targets: ${ANIMATION_CONFIG.TARGETS.CHILDREN}; translateY: ${ANIMATION_CONFIG.TRANSFORMS.SLIDE_UP}; opacity: ${ANIMATION_CONFIG.TRANSFORMS.FADE_IN}; easing: ${ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC}; duration: ${ANIMATION_CONFIG.DURATION.NORMAL}; delay: anime.stagger(${ANIMATION_CONFIG.DELAY.STAGGER_MEDIUM}, {start: ${ANIMATION_CONFIG.DELAY.INITIAL_MEDIUM}});` : ""}
            >
              {metrics.map((metric, index) => (
                <div key={metric.id}>
                  <MetricCard metric={metric} index={index} />
                </div>
              ))}
            </div>
            
            {/* Optional Call-to-Action */}
            <div
              className="panel mt-6 lg:mt-8 text-center"
              data-anime={isClient ? `onview: -200; translateY: ${ANIMATION_CONFIG.TRANSFORMS.SLIDE_UP}; opacity: ${ANIMATION_CONFIG.TRANSFORMS.FADE_IN}; easing: ${ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC}; duration: ${ANIMATION_CONFIG.DURATION.NORMAL}; delay: ${ANIMATION_CONFIG.DELAY.INITIAL_MEDIUM + 500};` : ""}
            >
              <p className="fs-6 text-opacity-70 mb-3">
                Ready to achieve similar results for your organization?
              </p>
              <a
                href="#contact"
                className="btn btn-md btn-primary px-4 lg:px-6 fw-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Get Your Free Impact Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;
