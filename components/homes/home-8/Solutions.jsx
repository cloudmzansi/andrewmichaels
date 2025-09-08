"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Solutions() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      icon: "/assets/images/custom-icons/icon-01.svg",
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces and seamless user experiences that engage visitors and guide them through your website with purpose and clarity."
    },
    {
      icon: "/assets/images/custom-icons/icon-02.svg", 
      title: "Responsive Web Design",
      description: "Mobile-first designs that look perfect on every device, ensuring your website delivers an exceptional experience across smartphones, tablets, and desktops."
    },
    {
      icon: "/assets/images/custom-icons/icon-03.svg",
      title: "User Experience Research",
      description: "Data-driven insights into user behavior and preferences, helping us create websites that truly resonate with your target audience and drive conversions."
    },
    {
      icon: "/assets/images/custom-icons/icon-04.svg",
      title: "Wireframing & Prototyping",
      description: "Strategic planning and interactive prototypes that map out user journeys before development, ensuring every element serves a purpose."
    },
    {
      icon: "/assets/images/custom-icons/icon-05.svg",
      title: "Visual Design Systems",
      description: "Consistent brand experiences with cohesive color palettes, typography, and component libraries that maintain your brand identity across all touchpoints."
    },
    {
      icon: "/assets/images/custom-icons/icon-06.svg",
      title: "Usability Testing",
      description: "Real user feedback and iterative improvements that refine your website's functionality, ensuring optimal performance and user satisfaction."
    }
  ];

  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden uc-dark lg:px-6"
    >
      <div
        className="section-outer panel py-4 md:py-6 xl:py-10 bg-secondary dark:bg-tertiary-700 dark:text-white dark:text-opacity-60 rounded-2 lg:rounded-4"
        data-anime={isClient ? "onscroll: .key-features; onscroll-trigger: 1; onscoll-duration: 150%; translateY: [-80, 0]; scale: [0.85, 1]; opacity: [0.85, 1]; easing: linear;" : ""}
      >
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-3 xl:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-lg mx-auto text-center"
              data-anime={isClient ? "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});" : ""}
            >
              <span className="fs-8 fw-medium py-1 px-2 border rounded-pill bg-primary bg-opacity-10 text-primary">
                Our Services
              </span>
              <h2 className="h3 lg:h2 m-0 fw-bold">
                <span className="text-primary">Expert</span> UI/UX Design Solutions
              </h2>
              <p className="fs-6 xl:fs-4 xl:px-8 lh-lg text-opacity-80">
                As Durban's premier UI/UX design agency, we specialize in creating user-centered digital experiences that combine beautiful aesthetics with intuitive functionality. Our comprehensive approach ensures every interaction drives engagement and delivers measurable results.
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-5 lg:g-6 col-match"
              data-anime={isClient ? "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});" : ""}
            >
              {services.map((service, index) => (
                <div key={index}>
                  <div className="features-item vstack items-center justify-center text-center gap-5 p-4 lg:p-5 bg-white dark:bg-tertiary-600 rounded-3 shadow-sm card-hover min-h-280px">
                    <div className="icon-box cstack w-56px h-56px dark:bg-tertiary rounded-2 shadow-sm">
                      <Image
                        className="w-28px xl:w-32px text-primary-400 dark:text-tertiary"
                        alt="feature-icon"
                        src={service.icon}
                        width={28}
                        height={28}
                      />
                    </div>
                    <div className="panel">
                      <div className="vstack gap-2">
                        <h3 className="title h5 m-0 fw-bold">{service.title}</h3>
                        <p className="desc fs-6 text-opacity-80 lh-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
