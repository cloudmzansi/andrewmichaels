"use client";
import { icons, menuItems } from "@/data/menu";
import { closeMobileMenu } from "@/utils/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const [activeParent1, setActiveParent1] = useState(-1);
  const [activeParent2, setActiveParent2] = useState(-1);
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeMobileMenu();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  const isMenuActive = (menu) => {
    let isActive = false;
    if (menu.href) {
      if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    if (menu.subItems) {
      menu.subItems.forEach((el) => {
        if (el.href) {
          if (pathname.split("/")[1] == el.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (el.subItems) {
          el.subItems.map((elm) => {
            if (elm.href) {
              if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                isActive = true;
              }
            }
          });
        }
      });
    }
    return isActive;
  };
  return (
    <div
      ref={containerRef}
      id="uc-menu-panel"
      data-uc-offcanvas="overlay: true;"
      className="uc-offcanvas mobile-menu"
      style={{ display: "block" }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      aria-hidden="true"
    >
      <div
        ref={elementRef}
        className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide "
        style={{ maxWidth: 876 }}
      >
        <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
          <div className="uc-logo">
            <Link
              href={`/`}
              className="h5 text-none text-gray-900 dark:text-white"
              aria-label="Cloud Mzansi Home"
            >
              <Image
                className="w-32px"
                alt="Cloud Mzansi Logo"
                src="/assets/images/common/logo-mark.svg"
                width="34"
                height="34"
              />
            </Link>
          </div>
          <button
            className="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <i className="unicon-close" aria-hidden="true" />
          </button>
        </header>
        <div className="panel">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="search-panel"
            className="form-icon-group vstack gap-1 mb-3 uc-sticky"
            data-uc-sticky=""
            role="search"
            aria-label="Site search"
          >
            <label htmlFor="mobile-search" className="sr-only">
              Search the site
            </label>
            <input
              id="mobile-search"
              type="search"
              className="form-control form-control-lg fs-6 rounded-default"
              placeholder="Search..."
              style={{ minHeight: '48px', fontSize: '1rem' }}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-label="Search the site"
            />
            <span className="form-icon text-gray" aria-hidden="true">
              <i className="unicon-search icon-1" />
            </span>
          </form>
          <div
            className="uc-sticky-placeholder"
            style={{ height: 40, width: 290, margin: "0px 0px 16px" }}
            hidden=""
          />
          <nav aria-label="Main navigation">
            <ul className="nav-y gap-2 fw-medium fs-6 uc-nav" data-uc-nav="" role="menubar">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${item.subItems ? "uc-parent" : ""} ${
                  activeParent1 == index ? "active" : ""
                }`}
                style={{ minHeight: '48px' }}
                role="none"
              >
                {item.href ? (
                  <Link
                    className={`${isMenuActive(item) ? "menuActive" : ""} d-flex align-items-center`}
                    href={item.href}
                    style={{ minHeight: '48px', padding: '0.75rem 0' }}
                    role="menuitem"
                    aria-current={isMenuActive(item) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <a
                      className={`${isMenuActive(item) ? "menuActive" : ""} d-flex align-items-center`}
                      onClick={() =>
                        setActiveParent1((pre) => (pre == index ? -1 : index))
                      }
                      style={{ minHeight: '48px', padding: '0.75rem 0', cursor: 'pointer' }}
                      role="menuitem"
                      tabIndex={0}
                      aria-expanded={activeParent1 === index}
                      aria-haspopup="true"
                      aria-label={`${item.label} menu`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveParent1((pre) => (pre == index ? -1 : index));
                        }
                      }}
                    >
                      {item.label}
                    </a>
                    {item.subItems && (
                      <ul
                        className={`uc-nav-sub ${
                          activeParent1 == index ? "active" : ""
                        }`}
                        role="menu"
                        aria-hidden={activeParent1 !== index}
                      >
                        {item.subItems.map((subItem, index2) => (
                          <li
                            key={index2}
                            className={`${!subItem.href ? "uc-parent" : ""}  ${
                              activeParent2 == index2 ? "active" : ""
                            }`}
                            role="presentation"
                            style={{ minHeight: '44px' }}
                          >
                            {subItem.href ? (
                              <Link
                                className={`${isMenuActive(subItem) ? "menuActive" : ""} d-flex align-items-center`}
                                href={subItem.href}
                                style={{ minHeight: '44px', padding: '0.5rem 1rem' }}
                              >
                                {subItem.label}
                              </Link>
                            ) : (
                              <>
                                <a
                                  className={`${isMenuActive(subItem) ? "menuActive" : ""} d-flex align-items-center`}
                                  onClick={() =>
                                    setActiveParent2((pre) =>
                                      pre == index2 ? -1 : index2
                                    )
                                  }
                                  style={{ minHeight: '44px', padding: '0.5rem 1rem', cursor: 'pointer' }}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault();
                                      setActiveParent2((pre) => (pre == index2 ? -1 : index2));
                                    }
                                  }}
                                >
                                  {subItem.label}
                                </a>
                                {subItem.subItems && (
                                  <ul
                                    className={`uc-nav-sub ${
                                      activeParent2 == index2 ? "active" : ""
                                    }`}
                                  >
                                    {subItem.subItems.map((subItem, index3) => (
                                      <li
                                        key={index3}
                                        className={
                                          !subItem.href ? "uc-parent" : ""
                                        }
                                        role="presentation"
                                      >
                                        {subItem.href ? (
                                          <Link
                                            className={
                                              isMenuActive(subItem)
                                                ? "menuActive"
                                                : ""
                                            }
                                            href={subItem.href}
                                          >
                                            {subItem.label}
                                          </Link>
                                        ) : (
                                          <></>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
            <li className="hr opacity-10 my-2" />
            <li style={{ minHeight: '48px' }}>
              <Link 
                href={`/sign-up`}
                className="d-flex align-items-center"
                style={{ minHeight: '48px', padding: '0.75rem 0' }}
              >
                Create an account
              </Link>
            </li>
            <li style={{ minHeight: '48px' }}>
              <Link 
                href={`/sign-in`}
                className="d-flex align-items-center"
                style={{ minHeight: '48px', padding: '0.75rem 0' }}
              >
                Log in
              </Link>
            </li>
            <li style={{ minHeight: '48px' }}>
              <a 
                href="https://themeforest.net/user/ib-themes/portfolio"
                className="d-flex align-items-center"
                style={{ minHeight: '48px', padding: '0.75rem 0' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Template
              </a>
            </li>
            </ul>
          </nav>
          <ul className="social-icons nav-x mt-4" role="list" aria-label="Social media links">
            <li>
              {icons.map((icon, index) => (
                <a key={index} href={icon.href} aria-label={`Visit our ${icon.name || 'social media'} page`}>
                  <i className={icon.iconClass} aria-hidden="true" />
                </a>
              ))}
            </li>
          </ul>
          <div
            className="uc-sticky-placeholder"
            style={{ height: 83, width: 290, margin: "32px 0px 0px" }}
          />
        </div>
      </div>
    </div>
  );
}
