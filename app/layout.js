"use client";
import Context from "@/context/Context";
import "../public/assets/css/main.scss";
import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../public/assets/custom.scss";
import "../public/assets/css/contact-form.css";
import "../public/assets/css/modal-styles.css";

import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import { useEffect } from "react";
import anime from "animejs";
import { usePathname } from "next/navigation";
import { ParallaxProvider } from "react-scroll-parallax";
import { initPageVisibilityHandler } from "@/utils/pageVisibilityHandler";
import dynamic from "next/dynamic";
import { 
  ANIMATION_CONFIG, 
  INTERSECTION_CONFIG 
} from "../constants/config";

// Dynamic imports for non-critical components
const MobileMenu = dynamic(() => import("@/components/headers/component/MobileMenu"), {
  ssr: false,
});

const SuccessModal = dynamic(() => import("@/components/modals/SuccessModal"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  useEffect(() => {
    try {
      const elements = document.querySelectorAll("[data-anime]");

      // Optimized Intersection Observer with better performance
      const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
          try {
            if (entry.isIntersecting) {
              const element = entry.target;
              const dataAnime = element.getAttribute("data-anime");

              if (!dataAnime) return;

              // Cache parsed animation data to avoid re-parsing
              if (!element._animeData) {
                const modifieddataAnime = dataAnime.replace(
                  /anime\.stagger\((\d+),\s*\{start:\s*(\d+)\}\)/,
                  "$1,$2"
                );

                const parseAnimeData = (data) => {
                  try {
                    const settings = {};
                    data.split(";").forEach((param) => {
                      const [key, value] = param
                        .split(":")
                        .map((item) => item.trim());
                      if (key && value) {
                        settings[key] = value;
                      }
                    });
                    return settings;
                  } catch (error) {
                    return {};
                  }
                };

                element._animeData = parseAnimeData(modifieddataAnime);
              }

              const animeSettings = element._animeData;

              // Optimize target selection with caching
              let targets;
              if (animeSettings.targets === ">*") {
                targets = element.children;
              } else {
                targets = element?.querySelectorAll(animeSettings.targets);
              }

              // Apply optimized Anime.js animation with better performance
              try {
                anime({
                  loop: animeSettings.loop ? true : false,
                  targets: targets,
                  translateX: JSON.parse(animeSettings.translateX || "[0, 0]"),
                  translateY: JSON.parse(animeSettings.translateY || "[48, 0]"),
                  opacity: [0, 1],
                  easing: animeSettings.easing || "easeOutCubic",
                  duration: Number(animeSettings.duration) || 450,
                  delay: animeSettings.delay
                    ? animeSettings.delay.includes(",")
                      ? anime.stagger(animeSettings.delay.split(",")[0] / 1, {
                          start: animeSettings.delay.split(",")[1] / 1,
                        })
                      : animeSettings.delay / 1
                    : 0,
                  // Performance optimizations handled via CSS will-change properties
                });
              } catch (animationError) {
                // Fallback: apply basic opacity animation with CSS transforms
                if (targets && targets.length > 0) {
                  anime({
                    targets: targets,
                    opacity: ANIMATION_CONFIG.TRANSFORMS.FADE_IN,
                    duration: ANIMATION_CONFIG.DURATION.NORMAL,
                    easing: ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC,
                  });
                }
              }

              // Unobserve the element after animation triggers
              observer.unobserve(element);
            }
          } catch (entryError) {
            // Skip this entry if there's an error
            observer.unobserve(entry.target);
          }
        });
      };

      // Optimized observer with better thresholds and root margin
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: INTERSECTION_CONFIG.THRESHOLD,
        rootMargin: INTERSECTION_CONFIG.ROOT_MARGIN, // Start animation slightly before element is visible
      });

      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        // Clean up the observer on component unmount
        try {
          elements.forEach((element) => {
            observer.unobserve(element);
            // Clean up cached data
            delete element._animeData;
          });
        } catch (cleanupError) {
          // Silently handle cleanup errors
        }
      };
    } catch (error) {
      // Silently handle initialization errors
    }
  }, [pathname]);

  // Initialize page visibility handler to fix overlay issues
  useEffect(() => {
    try {
      initPageVisibilityHandler();
    } catch (error) {
      // Silently handle initialization errors
    }
  }, []);

  return (
    <html lang="en" dir="ltr" className="uc-dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {" "}
        <Context>
          <ParallaxProvider>{children}</ParallaxProvider>
          <MobileMenu />
          <SuccessModal />
        </Context>
      </body>
    </html>
  );
}
