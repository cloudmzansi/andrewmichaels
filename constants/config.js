// Animation Constants
export const ANIMATION_CONFIG = {
  // Default animation durations
  DURATION: {
    FAST: 300,
    NORMAL: 450,
    SLOW: 750,
    VERY_SLOW: 1000,
  },
  
  // Default easing functions
  EASING: {
    EASE_OUT_CUBIC: 'easeOutCubic',
    EASE_OUT_EXPO: 'easeOutExpo',
    EASE_IN_OUT: 'easeInOut',
  },
  
  // Default delays
  DELAY: {
    STAGGER_SHORT: 100,
    STAGGER_MEDIUM: 150,
    STAGGER_LONG: 200,
    INITIAL_SHORT: 200,
    INITIAL_MEDIUM: 500,
    INITIAL_LONG: 1000,
  },
  
  // Animation targets
  TARGETS: {
    CHILDREN: '>*',
    SELF: 'self',
  },
  
  // Default transforms
  TRANSFORMS: {
    SLIDE_UP: '[48, 0]',
    SLIDE_DOWN: '[-48, 0]',
    SLIDE_LEFT: '[48, 0]',
    SLIDE_RIGHT: '[-48, 0]',
    SCALE_IN: '[0, 1]',
    SCALE_OUT: '[1, 0]',
    FADE_IN: '[0, 1]',
    FADE_OUT: '[1, 0]',
  },
};

// Layout Constants
export const LAYOUT_CONFIG = {
  // Breakpoints
  BREAKPOINTS: {
    MOBILE: 0,
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    XXL: 1536,
  },
  
  // Container sizes
  CONTAINER_SIZES: {
    SM: 'max-w-sm',
    MD: 'max-w-md',
    LG: 'max-w-lg',
    XL: 'max-w-xl',
    XXL: 'max-w-2xl',
    FULL: 'max-w-full',
  },
  
  // Spacing
  SPACING: {
    SECTION_PADDING: 'py-6 xl:py-9',
    CONTAINER_PADDING: 'px-2 lg:px-3',
    CARD_PADDING: 'p-2 md:p-3 lg:p-4 xl:p-5',
  },
  
  // Z-index values
  Z_INDEX: {
    HEADER: 999,
    MODAL: 1000,
    OVERLAY: 1001,
  },
};

// UI Constants
export const UI_CONFIG = {
  // Button sizes
  BUTTON_SIZES: {
    SM: 'btn-sm',
    MD: 'btn-md',
    LG: 'btn-lg',
    XL: 'btn-xl',
  },
  
  // Button variants
  BUTTON_VARIANTS: {
    PRIMARY: 'btn-primary',
    SECONDARY: 'btn-secondary',
    TERTIARY: 'btn-tertiary',
    GHOST: 'btn-ghost',
    GHOST_PRIMARY: 'btn-ghost-primary',
    GHOST_SECONDARY: 'btn-ghost-secondary',
    GHOST_TERTIARY: 'btn-ghost-tertiary',
    ALT_DARK: 'btn-alt-dark',
  },
  
  // Icon sizes
  ICON_SIZES: {
    SM: 'icon-sm',
    MD: 'icon',
    LG: 'icon-lg',
    XL: 'icon-xl',
    XXL: 'icon-2',
  },
  
  // Text sizes
  TEXT_SIZES: {
    SM: 'fs-7',
    MD: 'fs-6',
    LG: 'fs-5',
    XL: 'fs-4',
    XXL: 'fs-3',
  },
  
  // Heading sizes
  HEADING_SIZES: {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    DISPLAY_1: 'display-1',
    DISPLAY_2: 'display-2',
    DISPLAY_3: 'display-3',
    DISPLAY_4: 'display-4',
    DISPLAY_5: 'display-5',
    DISPLAY_6: 'display-6',
  },
};

// Color Constants
export const COLOR_CONFIG = {
  // Theme colors
  THEME: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    INFO: 'info',
  },
  
  // Background colors
  BACKGROUND: {
    WHITE: 'bg-white',
    BLACK: 'bg-black',
    GRAY_100: 'bg-gray-100',
    GRAY_200: 'bg-gray-200',
    GRAY_300: 'bg-gray-300',
    GRAY_400: 'bg-gray-400',
    GRAY_500: 'bg-gray-500',
    GRAY_600: 'bg-gray-600',
    GRAY_700: 'bg-gray-700',
    GRAY_800: 'bg-gray-800',
    GRAY_900: 'bg-gray-900',
  },
  
  // Text colors
  TEXT: {
    WHITE: 'text-white',
    BLACK: 'text-black',
    GRAY_900: 'text-gray-900',
    GRAY_800: 'text-gray-800',
    GRAY_700: 'text-gray-700',
    GRAY_600: 'text-gray-600',
    GRAY_500: 'text-gray-500',
    GRAY_400: 'text-gray-400',
    GRAY_300: 'text-gray-300',
    GRAY_200: 'text-gray-200',
    GRAY_100: 'text-gray-100',
  },
};

// Pricing Constants
export const PRICING_CONFIG = {
  // Currency
  CURRENCY: 'R',
  
  // Payment terms
  PAYMENT_TERMS: {
    DEPOSIT_PERCENTAGE: 25,
    MID_PROJECT_PERCENTAGE: 25,
    COMPLETION_PERCENTAGE: 50,
  },
  
  // Pricing types
  PRICING_TYPES: {
    ONCE_OFF: 'once-off',
    MONTHLY: 'monthly',
  },
  
  // Button classes for different pricing tiers
  BUTTON_CLASSES: {
    PRIMARY: 'btn-primary',
    SECONDARY: 'btn-secondary',
    GHOST_TERTIARY: 'btn-ghost-tertiary',
  },
};

// Navigation Constants
export const NAVIGATION_CONFIG = {
  // Menu items
  MENU_ITEMS: [
    { label: 'Home', href: '#hero_header' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#key_features' },
    { label: 'Work', href: '#main_features' },
    { label: 'Contact', href: '#contact' },
  ],
  
  // Scroll behavior
  SCROLL_BEHAVIOR: {
    SMOOTH: 'smooth',
    INSTANT: 'instant',
    AUTO: 'auto',
  },
  
  // Scroll offset
  SCROLL_OFFSET: 80,
};

// Image Constants
export const IMAGE_CONFIG = {
  // Default image settings
  DEFAULT_QUALITY: 85,
  DEFAULT_PRIORITY_QUALITY: 90,
  
  // Image sizes
  SIZES: {
    MOBILE: '(max-width: 768px) 100vw',
    TABLET: '(max-width: 1200px) 80vw',
    DESKTOP: '1000px',
  },
  
  // Common image dimensions
  DIMENSIONS: {
    LOGO: { width: 148, height: 39 },
    ICON_SM: { width: 24, height: 24 },
    ICON_MD: { width: 48, height: 48 },
    ICON_LG: { width: 72, height: 72 },
    HERO_IMAGE: { width: 1353, height: 978 },
  },
};

// Swiper Constants
export const SWIPER_CONFIG = {
  // Default settings
  DEFAULT_SPACE_BETWEEN: 24,
  DEFAULT_SLIDES_PER_VIEW: 1.1,
  
  // Breakpoints
  BREAKPOINTS: {
    0: {
      slidesPerView: 1.1,
    },
    640: { 
      slidesPerView: 2.1, 
      spaceBetween: 16 
    },
    768: { 
      slidesPerView: 3, 
      spaceBetween: 16 
    },
    1024: { 
      slidesPerView: 3, 
      spaceBetween: 24 
    },
  },
};

// Intersection Observer Constants
export const INTERSECTION_CONFIG = {
  // Default thresholds
  THRESHOLD: 0.1,
  
  // Root margin
  ROOT_MARGIN: '50px 0px -50px 0px',
  
  // Animation triggers
  ANIMATION_TRIGGER_OFFSET: -200,
};

// Local Storage Keys
export const STORAGE_KEYS = {
  WISHLIST: 'wishlist',
  THEME: 'theme',
  USER_PREFERENCES: 'userPreferences',
};

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  VALIDATION: 'Please check your input and try again.',
  NOT_FOUND: 'The requested resource was not found.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Thank you! Your message has been sent successfully.',
  WISHLIST_ADDED: 'Item added to wishlist',
  WISHLIST_REMOVED: 'Item removed from wishlist',
};

// API Endpoints (if needed)
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  ANALYTICS: '/api/analytics',
};

// Feature Flags
export const FEATURE_FLAGS = {
  ENABLE_ANALYTICS: true,
  ENABLE_DARK_MODE_TOGGLE: false, // Currently disabled as per current implementation
  ENABLE_WISHLIST: true,
  ENABLE_QUICK_VIEW: true,
};
