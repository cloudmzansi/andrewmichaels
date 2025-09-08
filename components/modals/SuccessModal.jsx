"use client";

import { closeSuccessModal } from "@/utils/toggleSuccessModal";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SuccessModal() {
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside modal container
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside modal content
        !elementRef.current.contains(event.target)
      ) {
        closeSuccessModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeSuccessModal();
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      id="uc-success-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog max-w-500px bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-3 shadow-lg border border-gray-200 dark:border-gray-700"
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        style={{
          margin: '2rem auto',
          position: 'relative',
          zIndex: 1000
        }}
      >
        <div className="modal-content">
          {/* Success Icon */}
          <div className="success-icon-container mx-auto mb-4">
            <div className="success-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto">
              <i className="unicon-check" />
            </div>
          </div>

          {/* Success Message */}
          <div className="success-content text-center">
            <h3 
              id="success-modal-title"
              className="success-modal-title"
            >
              Thank you!
            </h3>
            
            <p className="success-modal-message">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>

            {/* Action Buttons */}
            <div className="success-actions">
              <button
                className="btn btn-primary btn-md px-4"
                onClick={closeSuccessModal}
              >
                Got it!
              </button>
              
              <button
                className="btn btn-outline-secondary btn-md px-4"
                onClick={closeSuccessModal}
              >
                Close
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="additional-info">
            <p className="fs-7 mb-0">
              Need immediate assistance? 
              <a 
                href="tel:+270659107772" 
                className="ms-1 fw-medium"
              >
                Call us now
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
