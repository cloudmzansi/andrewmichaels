export const openMobileMenu = () => {
  try {
    const menuPanel = document.getElementById("uc-menu-panel");
    if (menuPanel) {
      menuPanel.classList.add("uc-offcanvas-overlay");
      menuPanel.classList.add("uc-open");
    }
  } catch (error) {
    // Silently handle error - menu will remain closed
  }
};

export const closeMobileMenu = () => {
  try {
    const menuPanel = document.getElementById("uc-menu-panel");
    if (menuPanel) {
      menuPanel.classList.remove("uc-offcanvas-overlay");
      menuPanel.classList.remove("uc-open");
    }
  } catch (error) {
    // Silently handle error - menu state will be reset on next page load
  }
};
