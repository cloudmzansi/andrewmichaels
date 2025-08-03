// Animation utilities for the Neobrutalism design system

export const animations = {
  // Hover animations
  hover: {
    transform: 'translate(-1px, -1px)',
    boxShadow:
      'calc(var(--shadow-offset) + 1px) calc(var(--shadow-offset) + 1px) 0 0 var(--border-and-outline)',
  },

  // Active animations
  active: {
    transform: 'translate(0, 0)',
    boxShadow:
      'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border-and-outline)',
  },

  // Focus animations
  focus: {
    outline: '2px solid var(--accent-blue)',
    outlineOffset: '2px',
  },

  // Transition configurations
  transitions: {
    fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    normal: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Animation hooks for common patterns
export const useHoverAnimation = () => {
  const handleMouseEnter = e => {
    e.target.style.transform = animations.hover.transform;
    e.target.style.boxShadow = animations.hover.boxShadow;
  };

  const handleMouseLeave = e => {
    e.target.style.transform = animations.active.transform;
    e.target.style.boxShadow = animations.active.boxShadow;
  };

  return { handleMouseEnter, handleMouseLeave };
};

export const useFocusAnimation = () => {
  const handleFocus = e => {
    e.target.style.outline = animations.focus.outline;
    e.target.style.outlineOffset = animations.focus.outlineOffset;
  };

  const handleBlur = e => {
    e.target.style.outline = 'none';
    e.target.style.outlineOffset = '0';
  };

  return { handleFocus, handleBlur };
};

// Animation styles for components
export const getAnimationStyles = (type = 'normal') => ({
  transition: animations.transitions[type],
});

export const getHoverStyles = () => ({
  ...getAnimationStyles('normal'),
  cursor: 'pointer',
});

export const getInteractiveStyles = () => ({
  ...getHoverStyles(),
  userSelect: 'none',
});
