"use client";
import Accordion from "@/components/common/Accordion";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Faqs() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div id="faq" className="faq section panel scrollSpysection lg:px-6">
      <div className="section-outer panel py-8 md:py-10 xl:py-12 bg-secondary dark:bg-tertiary-700 rounded-2 lg:rounded-4">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel"
            data-anime={isClient ? "onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});" : ""}
          >
            <div className="faq-inner panel row child-cols-12 lg:child-cols justify-between g-4">
              <div className="lg:col-5 sticky-element">
                <div
                  className="uc-sticky-placeholder"
                  style={{ height: 0, width: 0, margin: 0 }}
                  hidden=""
                />
                <div className="panel vstack items-start gap-2 uc-sticky">
                  <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-secondary dark:bg-primary" />
                    <span className="fs-8 fw-bold text-uppercase">FAQs</span>
                  </div>
                  <h2 className="h3 lg:h2 m-0 text-tertiary-900 dark:text-tertiary-200">Questions Founders Ask</h2>
                  <p className="fs-6 lg:fs-5 text-tertiary-600 dark:text-tertiary-300">
                    We're here to help! Most businesses in Durban and across South Africa are looking to create professional websites that drive real results. Here are the questions we hear most often from our clients.
                  </p>
                  <Link
                    href="#contact"
                    className="btn btn-sm lg:btn-md btn-secondary px-3 mt-2"
                  >
                    <span>Still have questions?</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-6">
                <div className="panel">
                  <ul
                    className="gap-2 uc-accordion"
                    data-uc-accordion="targets: > li; multiple: true"
                  >
                    <Accordion parentClass="panel p-2 md:p-4 border border-tertiary-200 dark:border-tertiary-700 rounded-1-5 bg-white dark:bg-tertiary-800" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
