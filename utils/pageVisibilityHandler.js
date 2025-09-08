/**
 * Page Visibility Handler
 * Fixes overlay issues when returning from developer tools console
 */

// Import remaining modal close functions
import { closeMobileMenu } from "@/utils/toggleMobileMenu";
import { closeSuccessModal } from "@/utils/toggleSuccessModal";

/**
 * Closes all open modals and overlays
 */
export const closeAllModals = () => {
  try {
    // Close remaining modals
    closeMobileMenu();
    closeSuccessModal();
    
    // Force close any stuck overlays using CSS classes
    document.body.classList.add('force-close-overlays', 'reset-modal-state');
    
    // Remove any lingering overlay classes from body
    document.body.classList.remove('modal-open', 'uc-offcanvas-overlay');
    
    // Remove any lingering overlay classes from html
    document.documentElement.classList.remove('uc-offcanvas-overlay');
    
    // Reset any Swiper instances that might be stuck
    const swiperElements = document.querySelectorAll('.swiper');
    swiperElements.forEach(swiperEl => {
      if (swiperEl.swiper) {
        // Force update the swiper instance
        swiperEl.swiper.update();
      }
    });
    
    // Remove the force close classes after a short delay
    setTimeout(() => {
      document.body.classList.remove('force-close-overlays', 'reset-modal-state');
    }, 300);
    
  } catch (error) {
    // Silently handle error - modals will be closed on next visibility change
  }
};

/**
 * Handles page visibility changes
 * Closes all modals when page becomes visible again
 */
export const handlePageVisibilityChange = () => {
  if (document.visibilityState === 'visible') {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      closeAllModals();
    }, 100);
  }
};

/**
 * Initializes the page visibility handler
 * Should be called once when the app loads
 */
export const initPageVisibilityHandler = () => {
  // Only run on client side
  if (typeof window === 'undefined') return;
  
  // Add event listener for visibility changes
  document.addEventListener('visibilitychange', handlePageVisibilityChange);
  
  // Also handle focus events as a backup
  window.addEventListener('focus', () => {
    setTimeout(() => {
      closeAllModals();
    }, 100);
  });
  
  // Handle page load to ensure clean state
  window.addEventListener('load', () => {
    closeAllModals();
  });
  
  // Add keyboard shortcut to manually close overlays (Escape key)
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllModals();
    }
  });
  
  // Page visibility handler initialized
};

/**
 * Cleanup function to remove event listeners
 */
export const cleanupPageVisibilityHandler = () => {
  if (typeof window === 'undefined') return;
  
  document.removeEventListener('visibilitychange', handlePageVisibilityChange);
  window.removeEventListener('focus', handlePageVisibilityChange);
  window.removeEventListener('load', handlePageVisibilityChange);
  document.removeEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllModals();
    }
  });
};