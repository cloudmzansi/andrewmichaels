export const openSuccessModal = () => {
  try {
    const successModal = document.getElementById("uc-success-modal");
    if (successModal) {
      successModal.classList.add("uc-offcanvas-overlay");
      successModal.classList.add("uc-open");
    }
  } catch (error) {
    // Silently handle error - modal will remain closed
  }
};

export const closeSuccessModal = () => {
  try {
    const successModal = document.getElementById("uc-success-modal");
    if (successModal) {
      successModal.classList.remove("uc-offcanvas-overlay");
      successModal.classList.remove("uc-open");
    }
  } catch (error) {
    // Silently handle error - modal state will be reset on next page load
  }
};
