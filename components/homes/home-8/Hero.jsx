"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useParallax } from "react-scroll-parallax";
import { 
  ANIMATION_CONFIG, 
  IMAGE_CONFIG, 
  LAYOUT_CONFIG, 
  UI_CONFIG 
} from "../../../constants/config";

export default function Hero() {
  const parallax = useParallax({
    scale: [0.85, 1.1],
  });
  return (
    <div
      id="hero_header"
      className="hero-header hero-seven-scene section panel overflow-hidden position-relative"
    >
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-secondary dark:bg-tertiary-700" />
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-gradient-to-b from-transparent via-transparent to-white dark:to-black" />
      <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
        {/* Temporarily disabled hero icons */}
        {/* <div
          className="d-none lg:d-block"
          style={{ display: 'block' }}
          data-anime={`targets: ${ANIMATION_CONFIG.TARGETS.CHILDREN}; scale: ${ANIMATION_CONFIG.TRANSFORMS.SCALE_IN}; opacity: ${ANIMATION_CONFIG.TRANSFORMS.FADE_IN}; easing: ${ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC}; duration: ${ANIMATION_CONFIG.DURATION.SLOW}; delay: anime.stagger(${ANIMATION_CONFIG.DELAY.STAGGER_MEDIUM}, {start: ${ANIMATION_CONFIG.DELAY.INITIAL_MEDIUM}});`}
        >
          <Image
            alt="Marketing icon"
            className="position-absolute w-72px dark:d-none"
            style={{ top: "15%", left: "2%", display: "block" }}
            width={IMAGE_CONFIG.DIMENSIONS.ICON_LG.width}
            height={IMAGE_CONFIG.DIMENSIONS.ICON_LG.height}
            src="/assets/images/vectors/marketing.svg"
            loading="lazy"
            quality={IMAGE_CONFIG.DEFAULT_PRIORITY_QUALITY}
          />
          <Image
            alt="Charts icon"
            className="position-absolute w-72px dark:d-none"
            style={{ top: "15%", right: "2%", display: "block" }}
            width={IMAGE_CONFIG.DIMENSIONS.ICON_LG.width}
            height={IMAGE_CONFIG.DIMENSIONS.ICON_LG.height}
            src="/assets/images/vectors/charts-pc.svg"
            loading="lazy"
            quality={IMAGE_CONFIG.DEFAULT_PRIORITY_QUALITY}
          />
          <Image
            alt="Group icon"
            className="position-absolute w-64px dark:d-none"
            style={{ top: "25%", right: "15%", transform: "rotate(45deg)", display: "block" }}
            width={IMAGE_CONFIG.DIMENSIONS.ICON_LG.width}
            height={IMAGE_CONFIG.DIMENSIONS.ICON_LG.height}
            src="/assets/images/vectors/group.svg"
            loading="lazy"
            quality={IMAGE_CONFIG.DEFAULT_PRIORITY_QUALITY}
          />
          <Image
            alt="Idea icon"
            className="position-absolute w-48px dark:d-none"
            style={{ top: "25%", left: "15%", display: "block" }}
            width={IMAGE_CONFIG.DIMENSIONS.ICON_MD.width}
            height={IMAGE_CONFIG.DIMENSIONS.ICON_MD.height}
            src="/assets/images/vectors/idea.svg"
            loading="lazy"
            quality={IMAGE_CONFIG.DEFAULT_PRIORITY_QUALITY}
          />
          <Image
            alt="Group icon"
            className="position-absolute w-64px dark:d-none"
            style={{ top: "35%", left: "5%", display: "block" }}
            width={69}
            height={70}
            src="/assets/images/vectors/group.svg"
            loading="lazy"
            quality={90}
          />
          <Image
            alt="Marketing icon dark"
            className="position-absolute w-72px d-none dark:d-block"
            style={{ top: "15%", left: "2%", display: "block" }}
            width={85}
            height={73}
            src="/assets/images/vectors/marketing-dark.svg"
            loading="lazy"
            quality={90}
          />
          <Image
            alt="Charts icon dark"
            className="position-absolute w-72px d-none dark:d-block"
            style={{ top: "15%", right: "2%", display: "block" }}
            width={73}
            height={66}
            src="/assets/images/vectors/charts-pc-dark.svg"
            loading="lazy"
            quality={90}
          />
          <Image
            alt="Group icon dark"
            className="position-absolute w-64px d-none dark:d-block"
            style={{ top: "25%", right: "15%", transform: "rotate(45deg)", display: "block" }}
            width={69}
            height={70}
            src="/assets/images/vectors/group-dark.svg"
            loading="lazy"
            quality={90}
          />
          <Image
            alt="Idea icon dark"
            className="position-absolute w-48px d-none dark:d-block"
            style={{ top: "25%", left: "15%", display: "block" }}
            width={49}
            height={60}
            src="/assets/images/vectors/idea-dark.svg"
            loading="lazy"
            quality={90}
          />
          <Image
            alt="Group icon dark"
            className="position-absolute w-64px d-none dark:d-block"
            style={{ top: "35%", left: "5%", display: "block" }}
            width={69}
            height={70}
            src="/assets/images/vectors/group-dark.svg"
            loading="lazy"
            quality={90}
          />
        </div> */}
        <div className={`container ${LAYOUT_CONFIG.CONTAINER_SIZES.XL}`}>
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center g-8">
              <div className="lg:col-8">
                <div
                  className="panel vstack items-center gap-2 px-2 text-center justify-center"
                  style={{ marginTop: '2rem' }}
                  data-anime={`targets: ${ANIMATION_CONFIG.TARGETS.CHILDREN}; translateY: ${ANIMATION_CONFIG.TRANSFORMS.SLIDE_UP}; opacity: ${ANIMATION_CONFIG.TRANSFORMS.FADE_IN}; easing: ${ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC}; duration: ${ANIMATION_CONFIG.DURATION.NORMAL}; delay: anime.stagger(${ANIMATION_CONFIG.DELAY.STAGGER_SHORT}, {start: ${ANIMATION_CONFIG.DELAY.INITIAL_SHORT}});`}
                >
                  <h1
                    className="h3 sm:h2 md:h1 lg:display-6 lh-lg mb-2 xl:mb-3 mt-2 fw-bold"
                    style={{ transform: "translateY(0px)", opacity: 1 }}
                  >
                    We Build Websites That{" "}
                    <span className="px-1 text-primary position-relative">
                      Actually Work
                      <span className="position-absolute bottom-0 start-0 end-0 h-1 bg-primary opacity-20 rounded-pill"></span>
                    </span>
                  </h1>

                  <p className="fs-6 xl:fs-4 xl:px-6 lh-lg text-opacity-80">
                    As Durban's leading <strong className="fw-semibold dark:text-white">performance-focused web agency</strong>, we guarantee{" "}
                    <strong className="fw-semibold dark:text-white">lightning-fast websites</strong> that load in under 2 seconds. 
                    Every website we build is optimised for speed, conversion, and measurable results. No compromises, just exceptional digital experiences that turn visitors into customers.
                  </p>
                  <div
                    className="vstack md:hstack justify-center gap-3 mt-4"
                    style={{ transform: "translateY(0px)", opacity: 1 }}
                  >
                    <a
                      href="#contact"
                      className="btn btn-md xl:btn-lg btn-alt-dark border-dark px-4 lg:px-6 fw-bold contrast-shadow-sm hover:contrast-shadow rounded-xl"
                    >
                      <span>Get Your Free Quote</span>
                    </a>
                    <a
                      href="#main_features"
                      className="btn btn-md xl:btn-lg btn-primary px-4 lg:px-6 fw-bold rounded-xl shadow-lg hover:shadow-xl"
                    >
                      <span>View Portfolio</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="uc-video-scene"
                ref={parallax.ref}
                data-anime={`scale: [1.2, 1]; opacity: ${ANIMATION_CONFIG.TRANSFORMS.FADE_IN}; easing: ${ANIMATION_CONFIG.EASING.EASE_OUT_CUBIC}; duration: ${ANIMATION_CONFIG.DURATION.SLOW}; delay: ${ANIMATION_CONFIG.DELAY.INITIAL_MEDIUM};`}
              >
                <div
                  className="panel max-w-1000px mx-auto rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg overflow-hidden"
                  style={{ marginTop: '4rem' }}
                >
                  <Image
                    alt="Google PageSpeed Insights showing 95+ scores across Performance, Accessibility, Best Practices, and SEO categories"
                    src="/assets/images/template/pagespeed-scores.png"
                    width={IMAGE_CONFIG.DIMENSIONS.HERO_IMAGE.width}
                    height={IMAGE_CONFIG.DIMENSIONS.HERO_IMAGE.height}
                    priority
                    sizes={`${IMAGE_CONFIG.SIZES.MOBILE}, ${IMAGE_CONFIG.SIZES.TABLET}, ${IMAGE_CONFIG.SIZES.DESKTOP}`}
                    quality={IMAGE_CONFIG.DEFAULT_QUALITY}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
