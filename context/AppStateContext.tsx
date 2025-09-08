"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { AppState, AppActions, AppStateContextType } from "@/types";

// Action types for consistent state management
export const ActionTypes = {
  // UI State
  SET_MOBILE_MENU_OPEN: 'SET_MOBILE_MENU_OPEN',
  SET_SUCCESS_MODAL_OPEN: 'SET_SUCCESS_MODAL_OPEN',
  SET_SCROLL_DIRECTION: 'SET_SCROLL_DIRECTION',
  SET_SCROLL_POSITION: 'SET_SCROLL_POSITION',
  
  // Theme State
  SET_DARK_MODE: 'SET_DARK_MODE',
  
  // Wishlist State
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  SET_WISHLIST: 'SET_WISHLIST',
  
  // Quick View State
  SET_QUICK_VIEW_ITEM: 'SET_QUICK_VIEW_ITEM',
  
  // Pricing State
  SET_PRICING_TOGGLE: 'SET_PRICING_TOGGLE',
  
  // Animation State
  SET_ANIMATION_COMPLETED: 'SET_ANIMATION_COMPLETED',
} as const;

// Action type definitions
type ActionType = typeof ActionTypes[keyof typeof ActionTypes];

interface Action {
  type: ActionType;
  payload: any;
}

// Initial state
const initialState: AppState = {
  // UI State
  isMobileMenuOpen: false,
  isSuccessModalOpen: false,
  scrollDirection: 'down',
  scrollPosition: 0,
  
  // Theme State
  isDarkMode: true, // Always dark mode as per current implementation
  
  // Wishlist State
  wishlist: [],
  
  // Quick View State
  quickViewItem: null,
  
  // Pricing State
  isMonthlyPricing: false,
  
  // Animation State
  completedAnimations: new Set(),
};

// Reducer function
function appStateReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case ActionTypes.SET_MOBILE_MENU_OPEN:
      return {
        ...state,
        isMobileMenuOpen: action.payload,
      };
      
    case ActionTypes.SET_SUCCESS_MODAL_OPEN:
      return {
        ...state,
        isSuccessModalOpen: action.payload,
      };
      
    case ActionTypes.SET_SCROLL_DIRECTION:
      return {
        ...state,
        scrollDirection: action.payload,
      };
      
    case ActionTypes.SET_SCROLL_POSITION:
      return {
        ...state,
        scrollPosition: action.payload,
      };
      
    case ActionTypes.SET_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      };
      
    case ActionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
      
    case ActionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(id => id !== action.payload),
      };
      
    case ActionTypes.SET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
      
    case ActionTypes.SET_QUICK_VIEW_ITEM:
      return {
        ...state,
        quickViewItem: action.payload,
      };
      
    case ActionTypes.SET_PRICING_TOGGLE:
      return {
        ...state,
        isMonthlyPricing: action.payload,
      };
      
    case ActionTypes.SET_ANIMATION_COMPLETED:
      const newCompletedAnimations = new Set(state.completedAnimations);
      newCompletedAnimations.add(action.payload);
      return {
        ...state,
        completedAnimations: newCompletedAnimations,
      };
      
    default:
      return state;
  }
}

// Context creation
const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

// Custom hook to use the context
export const useAppState = (): AppStateContextType => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

// Provider component props
interface AppStateProviderProps {
  children: React.ReactNode;
}

// Provider component
export function AppStateProvider({ children }: AppStateProviderProps): React.JSX.Element {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);
        dispatch({ type: ActionTypes.SET_WISHLIST, payload: parsedWishlist });
      }
    } catch (error) {
      // Silently handle localStorage errors in production
      if (process.env.NODE_ENV === 'development') {
        console.error('Error loading wishlist from localStorage:', error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    } catch (error) {
      // Silently handle localStorage errors in production
      if (process.env.NODE_ENV === 'development') {
        console.error('Error saving wishlist to localStorage:', error);
      }
    }
  }, [state.wishlist]);

  // Action creators for better type safety and consistency
  const actions: AppActions = {
    // UI Actions
    setMobileMenuOpen: (isOpen: boolean) => 
      dispatch({ type: ActionTypes.SET_MOBILE_MENU_OPEN, payload: isOpen }),
      
    setSuccessModalOpen: (isOpen: boolean) => 
      dispatch({ type: ActionTypes.SET_SUCCESS_MODAL_OPEN, payload: isOpen }),
      
    setScrollDirection: (direction: 'up' | 'down') => 
      dispatch({ type: ActionTypes.SET_SCROLL_DIRECTION, payload: direction }),
      
    setScrollPosition: (position: number) => 
      dispatch({ type: ActionTypes.SET_SCROLL_POSITION, payload: position }),
      
    // Theme Actions
    setDarkMode: (isDark: boolean) => 
      dispatch({ type: ActionTypes.SET_DARK_MODE, payload: isDark }),
      
    // Wishlist Actions
    addToWishlist: (id: string) => 
      dispatch({ type: ActionTypes.ADD_TO_WISHLIST, payload: id }),
      
    removeFromWishlist: (id: string) => 
      dispatch({ type: ActionTypes.REMOVE_FROM_WISHLIST, payload: id }),
      
    toggleWishlist: (id: string) => {
      if (state.wishlist.includes(id)) {
        dispatch({ type: ActionTypes.REMOVE_FROM_WISHLIST, payload: id });
      } else {
        dispatch({ type: ActionTypes.ADD_TO_WISHLIST, payload: id });
      }
    },
    
    isInWishlist: (id: string): boolean => state.wishlist.includes(id),
    
    // Quick View Actions
    setQuickViewItem: (item: any) => 
      dispatch({ type: ActionTypes.SET_QUICK_VIEW_ITEM, payload: item }),
      
    // Pricing Actions
    setPricingToggle: (isMonthly: boolean) => 
      dispatch({ type: ActionTypes.SET_PRICING_TOGGLE, payload: isMonthly }),
      
    // Animation Actions
    setAnimationCompleted: (animationId: string) => 
      dispatch({ type: ActionTypes.SET_ANIMATION_COMPLETED, payload: animationId }),
      
    isAnimationCompleted: (animationId: string): boolean => 
      state.completedAnimations.has(animationId),
  };

  const contextValue: AppStateContextType = {
    state,
    actions,
  };

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
}
