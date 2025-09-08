// Global type definitions for the CloudMZansi Lexend project

// Animation Configuration Types
export interface AnimationConfig {
  targets?: string;
  translateY?: string;
  opacity?: string;
  easing?: string;
  duration?: number;
  delay?: number;
  staggerStart?: number;
  onview?: number;
}

// Base Component Props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
  animate?: boolean;
  animationDelay?: number;
  animationDuration?: number;
  'aria-label'?: string;
  'aria-describedby'?: string;
  role?: string;
}

// Button Configuration
export interface ButtonConfig {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'ghost-primary' | 'ghost-secondary' | 'ghost-tertiary' | 'alt-dark';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

// Image Configuration
export interface ImageConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
}

// Section Configuration
export interface SectionConfig {
  id?: string;
  className?: string;
  animate?: boolean;
  animationConfig?: AnimationConfig;
  children?: React.ReactNode;
}

// Container Configuration
export interface ContainerConfig {
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
  children?: React.ReactNode;
}

// Heading Configuration
export interface HeadingConfig {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'display-1' | 'display-2' | 'display-3' | 'display-4' | 'display-5' | 'display-6';
  className?: string;
  children?: React.ReactNode;
}

// Text Configuration
export interface TextConfig {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
  children?: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}

// Icon Configuration
export interface IconConfig {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
}

// Form Configuration
export interface FormConfig {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  animate?: boolean;
  animationConfig?: AnimationConfig;
}

// Input Configuration
export interface InputConfig {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  animate?: boolean;
  animationConfig?: AnimationConfig;
}

// Textarea Configuration
export interface TextareaConfig {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  animate?: boolean;
  animationConfig?: AnimationConfig;
}

// Select Configuration
export interface SelectConfig {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
  animate?: boolean;
  animationConfig?: AnimationConfig;
}

// Checkbox Configuration
export interface CheckboxConfig {
  className?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  animate?: boolean;
  animationConfig?: AnimationConfig;
}

// Radio Configuration
export interface RadioConfig {
  className?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  name?: string;
  value?: string;
  animate?: boolean;
  animationConfig?: AnimationConfig;
}

// Pricing Plan Types
export interface PricingPlan {
  id?: number;
  title: string;
  description: string;
  price: number | string;
  priceType: 'once-off' | 'monthly';
  deposit?: number;
  midProject?: number;
  completion?: number;
  monthlyTotal?: number;
  features: string[];
  included: boolean[];
  link: string;
  buttonClass: string;
}

// FAQ Item Types
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  controls?: string;
  expanded?: boolean;
}

// Alternative FAQ Item Types (for different accordion styles)
export interface AlternativeFAQItem {
  id: number;
  title: string;
  icon?: string;
  content: string;
  isOpen?: boolean;
}

// Footer Link Types
export interface FooterLink {
  text: string;
  href: string;
  isLink?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Menu Item Types
export interface MenuItem {
  id: number;
  label: string;
  href: string;
}

// Menu Category Types
export interface MenuCategory {
  title: string;
  links: FooterLink[];
}

// Social Icon Types
export interface SocialIcon {
  href: string;
  iconClass: string;
}

// Navigation Configuration
export interface NavigationConfig {
  menuItems: MenuItem[];
  scrollBehavior: 'smooth' | 'instant' | 'auto';
  scrollOffset: number;
}

// App State Types
export interface AppState {
  // UI State
  isMobileMenuOpen: boolean;
  isSuccessModalOpen: boolean;
  scrollDirection: 'up' | 'down';
  scrollPosition: number;
  
  // Theme State
  isDarkMode: boolean;
  
  // Wishlist State
  wishlist: string[];
  
  // Quick View State
  quickViewItem: any;
  
  // Pricing State
  isMonthlyPricing: boolean;
  
  // Animation State
  completedAnimations: Set<string>;
}

// App Actions Types
export interface AppActions {
  // UI Actions
  setMobileMenuOpen: (isOpen: boolean) => void;
  setSuccessModalOpen: (isOpen: boolean) => void;
  setScrollDirection: (direction: 'up' | 'down') => void;
  setScrollPosition: (position: number) => void;
  
  // Theme Actions
  setDarkMode: (isDark: boolean) => void;
  
  // Wishlist Actions
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  
  // Quick View Actions
  setQuickViewItem: (item: any) => void;
  
  // Pricing Actions
  setPricingToggle: (isMonthly: boolean) => void;
  
  // Animation Actions
  setAnimationCompleted: (animationId: string) => void;
  isAnimationCompleted: (animationId: string) => boolean;
}

// Context Types
export interface AppStateContextType {
  state: AppState;
  actions: AppActions;
}

// Form Validation Types
export interface ValidationRule {
  (value: any): string | undefined;
}

export interface FormValidationConfig {
  [key: string]: ValidationRule;
}

export interface FormValidationReturn {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  validateForm: () => boolean;
  resetForm: () => void;
  setValues: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

// Error Boundary Types
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error | null }>;
}

// Loading Component Types
export interface LoadingComponentConfig {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

// Empty State Component Types
export interface EmptyStateComponentConfig {
  title?: string;
  description?: string;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}

// Card Component Types
export interface CardConfig {
  className?: string;
  children?: React.ReactNode;
  animate?: boolean;
  animationConfig?: AnimationConfig;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

// Badge Component Types
export interface BadgeConfig {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
  animationConfig?: AnimationConfig;
}

// Swiper Configuration Types
export interface SwiperConfig {
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween: number }>;
}

// Intersection Observer Configuration Types
export interface IntersectionConfig {
  threshold: number;
  rootMargin: string;
  animationTriggerOffset: number;
}

// Storage Keys Types
export interface StorageKeys {
  WISHLIST: string;
  THEME: string;
  USER_PREFERENCES: string;
}

// API Endpoints Types
export interface ApiEndpoints {
  CONTACT: string;
  NEWSLETTER: string;
  ANALYTICS: string;
}

// Feature Flags Types
export interface FeatureFlags {
  ENABLE_ANALYTICS: boolean;
  ENABLE_DARK_MODE_TOGGLE: boolean;
  ENABLE_WISHLIST: boolean;
  ENABLE_QUICK_VIEW: boolean;
}
