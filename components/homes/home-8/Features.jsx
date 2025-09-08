"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const portfolioBlocks = [
    {
      title: "Abbaquar-san Dream Centre",
      description: "A vibrant, community-driven website for the Abbaquar-San Dream Centre - showcasing youth empowerment, cultural activities, and social upliftment initiatives in Durban.",
      image: "/assets/images/template/abbaquar.png",
      link: "/portfolio/abbaquar-san-dream-centre"
    },
    {
      title: "Kitchen Designs & Interiors",
      description: "A sleek portfolio and lead-generation site for Kitchen Designs & Interiors, showcasing custom renovation services across Cape Town.",
      image: "/assets/images/template/kdinteriors.png",
      link: "/portfolio/kdinteriors"
    },
    {
      title: "The Smartphone Trader",
      description: "An eCommerce platform for The Smartphone Trader - buying, selling, and repairing smartphones with nationwide delivery.",
      image: "/assets/images/template/smartphonetrader.png",
      link: "/portfolio/smartphonetrader"
    }
  ];

  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-8 md:py-10 xl:py-12">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-3 xl:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-lg mx-auto text-center"
              data-anime={isClient ? "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});" : ""}
            >
              <span className="fs-8 fw-medium py-1 px-2 border rounded-pill bg-primary bg-opacity-10 text-primary">
                Our Portfolio
              </span>
              <h2 className="h3 lg:h2 m-0 fw-bold">
                Proven Results from{" "}
                <span className="text-primary position-relative">
                  Real Businesses
                  <span className="position-absolute bottom-0 start-0 end-0 h-1 bg-primary opacity-30 rounded-pill"></span>
                </span>
              </h2>
              <p className="fs-6 xl:fs-4 xl:px-8 lh-lg text-opacity-80">
                See how our Durban web agency has helped South African businesses achieve remarkable growth through strategic web design and digital solutions.
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-4 col-match g-4 lg:g-5"
              data-anime={isClient ? "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});" : ""}
            >
              {portfolioBlocks.map((item, index) => (
                <div key={index}>
                  <div className="panel overflow-hidden bg-secondary text-gray-900 dark:bg-tertiary-700 dark:text-white rounded-3 lg:rounded-4 h-100 shadow-sm card-hover" style={{minHeight: '500px', display: 'flex', flexDirection: 'column'}}>
                    <div className="panel p-3 pb-0">
                      <Image
                        className="rounded-2"
                        alt={item.title}
                        src={item.image}
                        width={680}
                        height={680}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                      />
                    </div>
                    <div className="panel vstack items-start justify-content-between gap-3 p-4 lg:p-5 h-100" style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                      <div className="panel vstack gap-3">
                        <h4 className="h4 m-0 text-inherit fw-bold">{item.title}</h4>
                        <p className="fs-6 text-opacity-80 lh-lg">{item.description}</p>
                      </div>
                      <div className="panel w-100" style={{marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-end'}}>
                        <Link 
                          href={item.link}
                          className="btn btn-sm rounded-lg fw-medium view-project-btn portfolio-btn-enhanced transition-all duration-200 hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-md"
                          style={{
                            display: 'inline-flex',
                            backgroundColor: 'var(--color-primary)',
                            color: 'black',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '0.5rem',
                            textDecoration: 'none',
                            textAlign: 'center',
                            fontWeight: '500',
                            border: 'none',
                            width: '50%',
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.25rem'
                          }}
                        >
                          <span>View Project</span>
                          <i className="icon icon-narrow unicon-arrow-right fw-bold" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action Button */}
            <div 
              className="panel mt-6 lg:mt-8"
              data-anime={isClient ? "onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;" : ""}
            >
              <div className="text-center">
                <Link 
                  href="#contact" 
                  className="btn btn-lg btn-primary px-3 py-3 fw-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Start Your Project Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
