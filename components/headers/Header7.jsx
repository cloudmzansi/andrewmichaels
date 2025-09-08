"use client";
import { openMobileMenu } from "@/utils/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { menuItems } from "@/data/menu";
import { 
  IMAGE_CONFIG, 
  UI_CONFIG,
  LAYOUT_CONFIG 
} from "../../constants/config";

export default function Header7() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;
      const scrollDifference = Math.abs(currentScrollPos - prevScrollPos);

      // Only trigger if scroll difference is significant (avoid jittery behavior)
      if (scrollDifference > 5) {
        if (currentScrollPos <= 50) {
          // Always show navbar when near top of page
          setIsVisible(true);
        } else if (isScrollingUp) {
          // Show navbar when scrolling up
          setIsVisible(true);
        } else {
          // Hide navbar when scrolling down
          setIsVisible(false);
        }
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isVisible]);

  return (
    <header
      className="uc-header header-eight uc-navbar-sticky-wrap z-999 uc-dark uc-sticky"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999
      }}
    >
      <nav
        className="uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent"
        style={{ opacity: 1 }}
      >
        <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
          <div className="container">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white px-2 lg:px-3 bg-white dark:bg-tertiary-600 bg-opacity-95 rounded-3 mt-2 shadow-sm backdrop-blur-sm"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo ltr:ms-1 rtl:me-1">
                  <Link
                    className="panel text-none"
                    href="/"
                    style={{ width: 140 }}
                  >
                    <Image
                      className="dark:d-none"
                      alt="Lexend"
                      src="/assets/images/common/logo-8-light.svg"
                      width={IMAGE_CONFIG.DIMENSIONS.LOGO.width}
                      height={IMAGE_CONFIG.DIMENSIONS.LOGO.height}
                    />
                    <Image
                      className="d-none dark:d-block"
                      alt="Lexend"
                      src="/assets/images/common/logo-8-dark.svg"
                      width={IMAGE_CONFIG.DIMENSIONS.LOGO.width}
                      height={IMAGE_CONFIG.DIMENSIONS.LOGO.height}
                    />
                  </Link>
                </div>
              </div>
              <div className="uc-navbar-center">
                <ul className="uc-navbar-nav fs-5 gap-4 lg:gap-5 d-none lg:d-flex">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="fw-medium">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="uc-navbar-right">
                <a
                  className="btn btn-md btn-tertiary dark:bg-white dark:text-dark border fs-5 lg:px-4 d-none lg:d-inline-flex shadow-sm rounded-xl fw-bold"
                  href="#contact"
                >
                  Get Free Quote
                </a>
                <a
                  className="btn btn-md btn-tertiary w-48px h-48px d-inline-flex lg:d-none rounded-xl"
                  onClick={openMobileMenu}
                >
                  <i className="icon icon-2 unicon-menu" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}