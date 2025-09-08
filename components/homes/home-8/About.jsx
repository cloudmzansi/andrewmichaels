import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="about section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10 -mt-16 md:-mt-20 lg:-mt-24 xl:-mt-32 relative z-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-3 xl:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-lg mx-auto text-center"
            >
              <span className="fs-8 fw-medium py-1 px-2 border rounded-pill bg-primary bg-opacity-10 text-primary">
                About Our Agency
              </span>
              <h2 className="h3 lg:h2 m-0 fw-bold">
                Durban's Leading{" "}
                <span className="text-tertiary dark:text-primary position-relative">
                  Web Agency
                  <span className="position-absolute bottom-0 start-0 end-0 h-1 bg-primary opacity-30 rounded-pill"></span>
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 lh-lg text-opacity-80">
                Based in the heart of Durban, we're a dedicated web agency that understands the unique challenges facing South African businesses. We don't just build websites; we craft digital experiences that convert visitors into customers and drive measurable growth for your business.
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-4 g-5 lg:g-6 col-match"
            >
              <div>
                <div className="panel vstack items-start justify-between gap-5 p-5 lg:p-6 min-h-320px bg-secondary dark:bg-tertiary-700 text-dark dark:text-white rounded-3 shadow-sm card-hover">
                  <div className="vstack gap-3">
                    <h3 className="h4 m-0 text-inherit fw-bold">Results-Driven Approach</h3>
                    <p className="fs-6 text-opacity-80 m-0 lh-lg">
                      Every website we create is designed with one goal in mind: converting visitors into customers. We combine cutting-edge design with proven conversion strategies to deliver websites that don't just look impressive, but actually drive business growth and measurable returns on investment.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel vstack items-start justify-between gap-5 p-5 lg:p-6 min-h-320px bg-secondary dark:bg-tertiary-700 text-dark dark:text-white rounded-3 shadow-sm card-hover">
                  <div className="vstack gap-3">
                    <h3 className="h4 m-0 text-inherit fw-bold">Transparent Partnership</h3>
                    <p className="fs-6 text-opacity-80 m-0 lh-lg">
                      We believe in honest, straightforward communication. No hidden fees, no agency jargon, no promises we can't deliver. You'll receive clear pricing, regular updates, and complete transparency throughout your project. We're not just your web agency; we're your trusted digital partner.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel vstack items-start justify-between gap-5 p-5 lg:p-6 min-h-320px bg-secondary dark:bg-tertiary-700 text-dark dark:text-white rounded-3 shadow-sm card-hover">
                  <div className="vstack gap-3">
                    <h3 className="h4 m-0 text-inherit fw-bold">Local Durban Expertise</h3>
                    <p className="fs-6 text-opacity-80 m-0 lh-lg">
                      As a Durban-based web agency, we understand the local market dynamics, cultural nuances, and business challenges unique to South Africa. Our proximity means faster response times, better communication, and a deeper understanding of what makes South African businesses successful in the digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
