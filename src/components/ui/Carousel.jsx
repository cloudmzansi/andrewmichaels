import React, { useState, useEffect, useRef, useCallback } from 'react';

// Style constants
const createCarouselStyles = () => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  borderRadius: 'var(--border-radius)',
  border: 'var(--border-thickness) solid var(--border-and-outline)',
  boxShadow:
    'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
  backgroundColor: 'var(--background-primary)',
  margin: 'var(--space-lg) 0',
});

const createSlidesContainerStyles = (
  currentSlide,
  isDragging,
  slidesLength
) => ({
  display: 'flex',
  transform: `translateX(-${currentSlide * 100}%)`,
  transition: isDragging ? 'none' : 'transform 0.3s ease',
  width: `${slidesLength * 100}%`,
  height: '100%',
});

const createSlideStyles = slidesLength => ({
  width: `${100 / slidesLength}%`,
  flexShrink: 0,
  padding: 'var(--space-xl)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '300px',
  boxSizing: 'border-box',
});

const createIndicatorsStyles = () => ({
  position: 'absolute',
  bottom: 'var(--space-md)',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 'var(--space-sm)',
  zIndex: 10,
  padding: 'var(--space-sm) var(--space-md)',
  background: 'var(--background-primary)',
  borderRadius: 'var(--border-radius)',
  border: 'var(--border-thickness) solid var(--border-and-outline)',
  boxShadow:
    'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
});

const createIndicatorStyles = isActive => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  border: 'var(--border-thickness) solid var(--border-and-outline)',
  backgroundColor: isActive
    ? 'var(--accent-teal)'
    : 'var(--background-primary)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: isActive
    ? 'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)'
    : 'none',
  touchAction: 'manipulation',
  WebkitTapHighlightColor: 'transparent',
});

const createArrowStyles = position => ({
  position: 'absolute',
  [position]: 'var(--space-sm)',
  top: '50%',
  transform: `translateY(-50%) ${position === 'left' ? 'translateX(-2px)' : 'translateX(2px)'}`,
  background: 'var(--background-primary)',
  border: 'var(--border-thickness) solid var(--border-and-outline)',
  borderRadius: '50%',
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 10,
  boxShadow:
    'calc(var(--shadow-offset) + 2px) calc(var(--shadow-offset) + 2px) 0 0 var(--border-and-outline)',
  transition: 'all 0.3s ease',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'var(--text-primary)',
  touchAction: 'manipulation',
  WebkitTapHighlightColor: 'transparent',
});

const createArrowBaseStyles = position => ({
  position: 'absolute',
  [position]: 'var(--space-sm)',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'var(--background-primary)',
  border: 'var(--border-thickness) solid var(--border-and-outline)',
  borderRadius: '50%',
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 10,
  boxShadow:
    'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
  transition: 'all 0.3s ease',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'var(--text-primary)',
  touchAction: 'manipulation',
  WebkitTapHighlightColor: 'transparent',
});

const Carousel = ({
  children,
  showDots = true,
  autoPlay = false,
  interval = 5000,
  mobileOnly = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const slides = React.Children.toArray(children);

  // Check if mobile and if mobileOnly is enabled
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  // Touch event handlers
  const handleTouchStart = useCallback(e => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback(
    e => {
      if (!isDragging) return;
      setCurrentX(e.touches[0].clientX);
    },
    [isDragging]
  );

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;

    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }

    setIsDragging(false);
  }, [isDragging, startX, currentX, currentSlide, slides.length]);

  // Navigation functions
  const goToSlide = useCallback(index => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Mouse event handlers for indicators
  const handleIndicatorHover = useCallback((e, isActive) => {
    if (!isActive) {
      e.target.style.backgroundColor = 'var(--accent-light-blue)';
      e.target.style.boxShadow =
        'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)';
    }
  }, []);

  const handleIndicatorLeave = useCallback((e, isActive) => {
    if (!isActive) {
      e.target.style.backgroundColor = 'var(--background-primary)';
      e.target.style.boxShadow = 'none';
    }
  }, []);

  // Mouse event handlers for arrows
  const handleArrowHover = useCallback((e, position) => {
    e.target.style.transform = `translateY(-50%) ${position === 'left' ? 'translateX(-2px)' : 'translateX(2px)'}`;
    e.target.style.boxShadow =
      'calc(var(--shadow-offset) + 2px) calc(var(--shadow-offset) + 2px) 0 0 var(--border-and-outline)';
  }, []);

  const handleArrowLeave = useCallback(e => {
    e.target.style.transform = 'translateY(-50%)';
    e.target.style.boxShadow =
      'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)';
  }, []);

  // Don't render carousel on desktop if mobileOnly is true
  if (mobileOnly && !isMobile) {
    return <div className="grid grid-4">{children}</div>;
  }

  return (
    <div className="mobile-carousel" style={createCarouselStyles()}>
      <div
        ref={carouselRef}
        style={createSlidesContainerStyles(
          currentSlide,
          isDragging,
          slides.length
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={createSlideStyles(slides.length)}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {showDots && slides.length > 1 && (
        <div className="carousel-indicators" style={createIndicatorsStyles()}>
          {slides.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="carousel-indicator"
                style={createIndicatorStyles(isActive)}
                onMouseEnter={e => handleIndicatorHover(e, isActive)}
                onMouseLeave={e => handleIndicatorLeave(e, isActive)}
              />
            );
          })}
        </div>
      )}

      {/* Navigation Arrows (Desktop Only) */}
      {slides.length > 1 && !isMobile && (
        <>
          <button
            onClick={prevSlide}
            style={createArrowBaseStyles('left')}
            onMouseEnter={e => handleArrowHover(e, 'left')}
            onMouseLeave={handleArrowLeave}
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            style={createArrowBaseStyles('right')}
            onMouseEnter={e => handleArrowHover(e, 'right')}
            onMouseLeave={handleArrowLeave}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
