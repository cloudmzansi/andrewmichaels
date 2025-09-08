"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";

export default function Testimonials() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="reviewconnect.me"]');
    if (existingScript) {
      return;
    }

    // Wait for the container to be available
    const checkContainer = () => {
      const container = document.getElementById('reviews-widget-407');
      if (!container) {
        setTimeout(checkContainer, 100);
        return;
      }

      // Load the Google Reviews widget script
      const script = document.createElement('script');
      script.src = 'https://app.reviewconnect.me/embed/79x6bh8PaUH9OXbEQjN8BxpUqx5fSjmE/widget.js';
      script.async = true;
      script.onload = () => {
        // Remove loading message
        const loadingMsg = container.querySelector('.text-center');
        if (loadingMsg) {
          loadingMsg.remove();
        }
      };
      script.onerror = () => {
        // Show error message
        const container = document.getElementById('reviews-widget-407');
        if (container) {
          container.innerHTML = '<div class="text-center p-4"><p class="text-muted">Unable to load reviews at this time.</p></div>';
        }
      };
      
      document.head.appendChild(script);
    };

    checkContainer();

    return () => {
      // Cleanup script on component unmount
      const script = document.querySelector('script[src*="reviewconnect.me"]');
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://app.reviewconnect.me/embed/79x6bh8PaUH9OXbEQjN8BxpUqx5fSjmE/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Script loaded successfully
        }}
        onError={() => {
          // Handle script loading error silently
        }}
      />
      
      <div
        id="clients_feedbacks"
        className="clients-feedbacks section panel overflow-hidden"
      >
        <div className="section-outer panel py-4 md:py-6 xl:py-8">
          <div className="container max-w-lg">
            <div className="section-inner panel">
              <div
                className="panel vstack justify-center items-center gap-1 sm:gap-2 xl:gap-3"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-5 lg:mb-6 max-w-lg mx-auto text-center">
                  <span className="fs-8 fw-medium py-1 px-2 border rounded-pill bg-primary bg-opacity-10 text-primary">
                    Testimonials
                  </span>
                  <h2 className="h4 sm:h3 lg:h2 m-0">
                    What Our Clients Say
                  </h2>
                </div>
                
                <p className="fs-6 lg:fs-5 text-center text-dark dark:text-white text-opacity-70 max-w-650px mx-auto mb-4">
                  See how our Durban web agency has helped South African businesses achieve remarkable growth through strategic web design and digital solutions.
                </p>
                
                {/* Google Reviews Widget */}
                <div className="w-100 mb-4" style={{ minHeight: '300px' }}>
                  <div id="reviews-widget-407" className="reviews-container">
                    <div className="text-center p-4">
                      <p className="text-muted">Loading reviews...</p>
                    </div>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="uc-link fw-bold d-inline-flex items-center gap-narrow"
                >
                  <span>Get in touch with us</span>
                  <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
