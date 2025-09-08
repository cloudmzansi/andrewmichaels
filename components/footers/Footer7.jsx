import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerSections } from "@/data/footer";

export default function Footer7() {
  return (
    <footer
      id="uc-footer"
      className="uc-footer panel overflow-hidden uc-dark uc-dark"
    >
      <div className="footer-outer py-3 lg:py-4 xl:py-5 bg-tertiary-700 text-white text-opacity-70 m-2 mt-0 rounded-2">
        <div className="uc-footer-content">
          <div className="container xl:max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 lg:col-6">
                    <div className="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                      <div>
                        <Link
                          className="panel text-none"
                          href="/"
                          style={{ width: 140 }}
                        >
                          <Image
                            className="dark:d-none"
                            alt="Lexend"
                            src="/assets/images/common/logo-8-light.svg"
                            width={148}
                            height={39}
                          />
                          <Image
                            className="d-none dark:d-block"
                            alt="Lexend"
                            src="/assets/images/common/logo-8-dark.svg"
                            width={148}
                            height={39}
                          />
                        </Link>
                        <p className="mt-2">
                          Durban's leading web agency specializing in professional website design, eCommerce solutions, and digital marketing. We create high-converting websites that drive real business growth for South African companies.
                        </p>
                      </div>
                    </div>
                  </div>
                  {footerSections.map((section, index) => (
                    <div key={index} className={section.className || ""}>
                      <h5 className="fw-bold text-white mb-3">{section.title}</h5>
                      <ul className="nav-y gap-1 fw-medium dark:text-white">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.isLink ? (
                              <Link href={link.href}>{link.text}</Link>
                            ) : (
                              <a href={link.href}>{link.text}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 mt-6 border-top">
                <p>Copyright © Cloud Mzansi 2025. All Rights Reserved.</p>
                <ul className="nav-x justify-center gap-4">
                  <li>
                    <Link className="duration-150 hover:text-primary" href="/privacy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="duration-150 hover:text-primary" href="/terms">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
