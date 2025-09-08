"use client";
import { pricingPlans } from "@/data/pricing";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { 
  ANIMATION_CONFIG, 
  PRICING_CONFIG, 
  SWIPER_CONFIG
} from "../../../constants/config";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);
  return (
    <div id="pricing" className="pricing section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 lg:mx-2 mt-2 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="pricing-tables panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime={`onview: ${ANIMATION_CONFIG.ANIMATION_TRIGGER_OFFSET}; targets: ${ANIMATION_CONFIG.TARGETS.CHILDREN}; translateY: ${ANIMATION_CONFIG.TRANSFORMS.SLIDE_UP}; opacity: ${ANIMATION_CONFIG.TRANSFORMS.FADE_IN}; easing: ${ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC}; duration: ${ANIMATION_CONFIG.DURATION.NORMAL}; delay: anime.stagger(${ANIMATION_CONFIG.DELAY.STAGGER_SHORT}, {start: ${ANIMATION_CONFIG.DELAY.INITIAL_SHORT}});`}
            >
              <div
                className="section-header vstack items-center gap-2 lg:gap-3"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                  Transparent Pricing
                </span>
                <h2 className="h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto">
                  Professional web agency solutions{" "}
                  <span className="text-tertiary dark:text-primary">
                    tailored for your business
                  </span>
                </h2>
              </div>
              <div
                className="panel w-100"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <ul
                  className="uc-subnav uc-subnav-pill gap-1 uc-child-width-expand rounded-1-5 p-narrow max-w-xs mx-auto bg-white shadow-xs"
                  data-uc-switcher="swiping: false;"
                  role="tablist"
                >
                  <li
                    className={!isMonthly ? "uc-active" : ""}
                    onClick={() => setIsMonthly(false)}
                  >
                    <a className="d-flex justify-center text-dark">
                      Once-off
                    </a>
                  </li>
                  <li
                    className={isMonthly ? "uc-active" : ""}
                    onClick={() => setIsMonthly(true)}
                  >
                    <a className="d-flex justify-center text-dark">
                      Monthly
                    </a>
                  </li>
                </ul>
                <div className="uc-switcher mt-4 lg:mt-6">
                  <li
                    className="uc-active"
                    id="uc-switcher-24"
                    role="tabpanel"
                    aria-labelledby="uc-switcher-23"
                  >
                    <Swiper
                      spaceBetween={SWIPER_CONFIG.DEFAULT_SPACE_BETWEEN}
                      slidesPerView={SWIPER_CONFIG.DEFAULT_SLIDES_PER_VIEW}
                      breakpoints={SWIPER_CONFIG.BREAKPOINTS}
                      observeSlideChildren
                      className="swiper overflow-unset lg:overflow-hidden swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                    >
                      {pricingPlans
                        .filter((plan) => 
                          isMonthly 
                            ? plan.priceType === "monthly" 
                            : plan.priceType === "once-off"
                        )
                        .map((plan, index) => (
                        <SwiperSlide key={index}>
                          <div className="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 bg-white text-dark shadow-xs">
                            <span className="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">
                              {plan.title}
                            </span>
                            <p className="pricing-box-desc opacity-70">
                              {plan.description}
                            </p>
                            <div className="pricing-box-price hstack gap-narrow items-end mt-2">
                              <h4 className="price h1 lg:display-5 m-0 text-inherit">
                                {PRICING_CONFIG.CURRENCY}{plan.price}
                              </h4>
                              <span className="duration fs-7 opacity-70">
                                {plan.priceType === PRICING_CONFIG.PRICING_TYPES.MONTHLY ? "/month" : "once-off"}
                              </span>
                            </div>
                              <p className="pricing-box-bill fs-7 opacity-70">
                                {plan.priceType === PRICING_CONFIG.PRICING_TYPES.MONTHLY 
                                  ? plan.monthlyTotal 
                                    ? `${PRICING_CONFIG.CURRENCY}${plan.monthlyTotal} total for 12 months` 
                                    : "Billed monthly"
                                  : plan.deposit 
                                    ? (
                                        <span>
                                          <span className="fw-semibold">{PRICING_CONFIG.PAYMENT_TERMS.DEPOSIT_PERCENTAGE}%</span> deposit •{" "}
                                          <span className="fw-semibold">{PRICING_CONFIG.PAYMENT_TERMS.MID_PROJECT_PERCENTAGE}%</span> mid-project •{" "}
                                          <span className="fw-semibold">{PRICING_CONFIG.PAYMENT_TERMS.COMPLETION_PERCENTAGE}%</span> on completion
                                        </span>
                                      )
                                    : "One-time payment"
                                }
                              </p>
                            <hr />
                            <ul className="nav-y gap-1 fs-6">
                              <li className="mb-1">
                                <b>Standout features</b>
                              </li>
                              {plan.features.map((feature, i) => (
                                <li key={i}>
                                  <i
                                    className={`icon icon-narrow ${
                                      plan.included[i]
                                        ? "unicon-checkmark"
                                        : "unicon-close"
                                    } fw-bold ltr:me-1 rtl:ms-1`}
                                  />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                              <a
                                href={plan.link}
                                className={`btn btn-md ${plan.buttonClass} border`}
                                onClick={(e) => {
                                  if (plan.link.startsWith('#')) {
                                    e.preventDefault();
                                    document.querySelector(plan.link)?.scrollIntoView({
                                      behavior: 'smooth',
                                      block: 'start'
                                    });
                                  }
                                }}
                              >
                                Choose Plan
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
