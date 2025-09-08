import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import About from "@/components/homes/home-8/About";
import ContactForm from "@/components/homes/home-8/ContactForm";
import Faqs from "@/components/homes/home-8/Faqs";
import Features from "@/components/homes/home-8/Features";
import Hero from "@/components/homes/home-8/Hero";
import Solutions from "@/components/homes/home-8/Solutions";
import Testimonials from "@/components/homes/home-8/Testimonials";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for below-the-fold components
const DynamicPricing = dynamic(() => import("@/components/homes/home-8/Pricing"), {
  loading: () => <div className="section panel py-8 md:py-10 xl:py-12"><div className="container"><div className="text-center">Loading pricing...</div></div></div>,
});

const DynamicTestimonials = dynamic(() => import("@/components/homes/home-8/Testimonials"), {
  loading: () => <div className="section panel py-8 md:py-10 xl:py-12"><div className="container"><div className="text-center">Loading testimonials...</div></div></div>,
});

const DynamicFaqs = dynamic(() => import("@/components/homes/home-8/Faqs"), {
  loading: () => <div className="section panel py-8 md:py-10 xl:py-12"><div className="container"><div className="text-center">Loading FAQs...</div></div></div>,
});

const DynamicContactForm = dynamic(() => import("@/components/homes/home-8/ContactForm"), {
  loading: () => <div className="section panel py-8 md:py-10 xl:py-12"><div className="container"><div className="text-center">Loading contact form...</div></div></div>,
});

export const metadata = {
  title:
    "Durban Web Agency | Professional Website Design & Digital Marketing Services",
  description:
    "Durban's leading web agency specialising in professional website design, eCommerce solutions, and digital marketing. We create high-converting websites that drive real business growth for South African companies.",
};

export default function HomePage() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper uc-dark">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <Hero />
              <About />
              <Solutions />
              <Features />
              <Suspense fallback={<div className="section panel py-8 md:py-10 xl:py-12"><div className="container"><div className="text-center">Loading...</div></div></div>}>
                <DynamicPricing />
              </Suspense>
              <Suspense fallback={<div className="section panel py-8 md:py-10 xl:py-12"><div className="container"><div className="text-center">Loading...</div></div></div>}>
                <DynamicTestimonials />
              </Suspense>
              <Suspense fallback={<div className="section panel py-8 md:py-10 xl:py-12"><div className="container"><div className="text-center">Loading...</div></div></div>}>
                <DynamicFaqs />
              </Suspense>
              <Suspense fallback={<div className="section panel py-8 md:py-10 xl:py-12"><div className="container"><div className="text-center">Loading...</div></div></div>}>
                <DynamicContactForm />
              </Suspense>
            </div>
            <Footer7 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
