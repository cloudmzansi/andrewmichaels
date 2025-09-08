"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useContext } from "react";
import { AppStateProvider, useAppState } from "./AppStateContext";

const dataContext = React.createContext();

export const useContextElement = () => {
  return useContext(dataContext);
};

// Legacy wrapper component for backward compatibility
function LegacyContextWrapper({ children }) {
  const { state, actions } = useAppState();
  
  const contextElement = {
    toggleWishlist: actions.toggleWishlist,
    isAddedtoWishlist: actions.isInWishlist,
    quickViewItem: state.quickViewItem,
    wishList: state.wishlist,
    setQuickViewItem: actions.setQuickViewItem,
    isDark: state.isDarkMode,
  };

  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}

export default function Context({ children }) {
  return (
    <AppStateProvider>
      <LegacyContextWrapper>
        {children}
      </LegacyContextWrapper>
    </AppStateProvider>
  );
}