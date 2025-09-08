"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { openSuccessModal } from "@/utils/toggleSuccessModal";

export default function ContactForm() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    subject: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    'Professional Website Design',
    'eCommerce Development',
    'Website Maintenance',
    'SEO & Digital Marketing',
    'Google Ads Management',
    'Social Media Management',
    'Brand Design & Logo',
    'Other'
  ];

  const budgetRanges = [
    'Under R5,000',
    'R5,000 - R10,000',
    'R10,000 - R25,000',
    'R25,000 - R50,000',
    'R50,000+',
    'Not sure yet'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Validate form data before submission
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitStatus('error');
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '40a862d8-0d3e-428b-b363-380ddfa76435',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          subject: formData.subject,
          message: formData.message,
          budget: formData.budget,
          from_name: 'Cloud Mzansi Contact Form',
          reply_to: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        openSuccessModal();
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          subject: '',
          message: '',
          budget: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // Handle form submission error silently
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div id="contact" className="contact section panel overflow-hidden">
      <div className="section-outer panel py-8 md:py-10 xl:py-12">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-lg mx-auto text-center"
              data-anime={isClient ? "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});" : ""}
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill text-white">
                Contact Us
              </span>
              <h2 className="h3 lg:h2 m-0 text-white">
                Ready to Start Your{" "}
                <span className="text-primary">
                  Project?
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 text-white text-opacity-70">
                Let's discuss how our Durban web agency can help transform your business with a professional website that converts visitors into customers and drives real growth.
              </p>
            </div>
            
            <div className="panel max-w-1100px mx-auto">
              <div className="vstack lg:hstack gap-5 lg:gap-6 items-stretch">
                {/* Contact Information - Left Side */}
                <div className="w-100 lg:w-2/5">
                  <div className="panel vstack items-start gap-3 p-4 lg:p-5 bg-secondary dark:bg-tertiary-700 rounded-2 border border-gray-200 dark:border-tertiary-600 h-100 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="vstack gap-3 w-100">
                      <div className="panel vstack gap-2">
                        <h3 className="h4 m-0 text-white fw-bold">Let's Discuss Your Project</h3>
                        <p className="fs-6 text-white text-opacity-70">
                          Ready to transform your business with a professional website? Our Durban web agency team is here to help you create a digital presence that drives real results.
                        </p>
                      </div>
                      
                      <div className="panel vstack gap-2">
                        <div className="panel vstack items-start gap-2 p-3 bg-white dark:bg-tertiary-600 rounded-2 border border-gray-200 dark:border-tertiary-600 hover:-translate-y-1 duration-200 transition-all group">
                          <div className="panel hstack gap-3 items-center">
                            <span className="fs-4">📱</span>
                            <div className="panel vstack gap-1">
                              <h4 className="h6 m-0 text-dark dark:text-white fw-bold">WhatsApp</h4>
                              <a href="https://wa.me/270659107772" className="fs-7 m-0 text-primary hover:text-primary/80 transition-colors">
                                065 910 7772
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        <div className="panel vstack items-start gap-2 p-3 bg-white dark:bg-tertiary-600 rounded-2 border border-gray-200 dark:border-tertiary-600 hover:-translate-y-1 duration-200 transition-all group">
                          <div className="panel hstack gap-3 items-center">
                            <span className="fs-4">📞</span>
                            <div className="panel vstack gap-1">
                              <h4 className="h6 m-0 text-dark dark:text-white fw-bold">Landline</h4>
                              <a href="tel:+270310300666" className="fs-7 m-0 text-primary hover:text-primary/80 transition-colors">
                                031 030 0666
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        <div className="panel vstack items-start gap-2 p-3 bg-white dark:bg-tertiary-600 rounded-2 border border-gray-200 dark:border-tertiary-600 hover:-translate-y-1 duration-200 transition-all group">
                          <div className="panel hstack gap-3 items-center">
                            <span className="fs-4">📧</span>
                            <div className="panel vstack gap-1">
                              <h4 className="h6 m-0 text-dark dark:text-white fw-bold">Email</h4>
                              <a href="mailto:info@cloudmzansi.co.za" className="fs-7 m-0 text-primary hover:text-primary/80 transition-colors">
                                info@cloudmzansi.co.za
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        <div className="panel vstack items-start gap-2 p-3 bg-white dark:bg-tertiary-600 rounded-2 border border-gray-200 dark:border-tertiary-600 hover:-translate-y-1 duration-200 transition-all group">
                          <div className="panel hstack gap-3 items-center">
                            <span className="fs-4">📍</span>
                            <div className="panel vstack gap-1">
                              <h4 className="h6 m-0 text-dark dark:text-white fw-bold">Location</h4>
                              <p className="fs-7 m-0 text-primary">Queensburgh, Durban</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form - Right Side */}
                <div className="w-100 lg:w-3/5">
                  <div className="panel vstack items-start gap-3 p-4 lg:p-5 bg-secondary dark:bg-tertiary-700 rounded-2 border border-gray-200 dark:border-tertiary-600 h-100 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="vstack gap-4 w-100">
                      <h3 className="h4 m-0 text-white fw-bold">Send Us a Message</h3>
                      <p className="fs-6 text-white text-opacity-70">
                        Complete the form below and we'll get back to you within 24 hours with a detailed proposal tailored to your business needs.
                      </p>
                      
                      <form
                        onSubmit={handleSubmit}
                        className="vstack gap-3 w-100"
                        role="form"
                        aria-label="Contact form"
                      >
                        <div className="row child-cols-12 md:child-cols-6 g-3">
                          <div>
                            <label htmlFor="contact-name" className="sr-only">
                              Full name
                            </label>
                            <input
                              id="contact-name"
                              className="form-control h-48px w-100 bg-white dark:bg-tertiary-600 border border-gray-200 dark:border-tertiary-600 text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none rounded-xl px-3 transition-all duration-200"
                              type="text"
                              name="name"
                              placeholder="Full name *"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              aria-required="true"
                              aria-describedby="name-error"
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="contact-email"
                              className="form-control h-48px w-100 bg-white dark:bg-tertiary-600 border border-gray-200 dark:border-tertiary-600 text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none rounded-xl px-3 transition-all duration-200"
                              type="email"
                              name="email"
                              placeholder="Your email *"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              aria-required="true"
                              aria-describedby="email-error"
                            />
                          </div>
                        </div>
                        
                        <div className="row child-cols-12 md:child-cols-6 g-3">
                          <div>
                            <label htmlFor="contact-phone" className="sr-only">
                              Phone number
                            </label>
                            <input
                              id="contact-phone"
                              className="form-control h-48px w-100 bg-white dark:bg-tertiary-600 border border-gray-200 dark:border-tertiary-600 text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none rounded-xl px-3 transition-all duration-200"
                              type="tel"
                              name="phone"
                              placeholder="Phone number *"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              aria-required="true"
                              aria-describedby="phone-error"
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-service" className="sr-only">
                              Service needed
                            </label>
                            <select
                              id="contact-service"
                              className="form-control h-48px w-100 bg-white dark:bg-tertiary-600 border border-gray-200 dark:border-tertiary-600 text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none rounded-xl px-3 transition-all duration-200"
                              name="service"
                              value={formData.service}
                              onChange={handleInputChange}
                              required
                              aria-required="true"
                              aria-describedby="service-error"
                            >
                              <option value="">Select a service *</option>
                              {services.map((service, index) => (
                                <option key={index} value={service}>
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="contact-subject" className="sr-only">
                            Subject
                          </label>
                          <input
                            id="contact-subject"
                            className="form-control h-48px w-100 bg-white dark:bg-tertiary-600 border border-gray-200 dark:border-tertiary-600 text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none rounded-xl px-3 transition-all duration-200"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            aria-describedby="subject-help"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="contact-message" className="sr-only">
                            Project message
                          </label>
                          <textarea
                            id="contact-message"
                            className="form-control w-100 bg-white dark:bg-tertiary-600 border border-gray-200 dark:border-tertiary-600 text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none resize-none rounded-xl px-3 py-3 transition-all duration-200"
                            style={{ minHeight: '158px' }}
                            name="message"
                            placeholder="Tell us about your project... *"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            aria-required="true"
                            aria-describedby="message-error"
                          />
                        </div>
                        
                        {submitStatus === 'error' && (
                          <div className="alert alert-danger p-3 rounded-xl" role="alert" aria-live="polite">
                            <i className="icon unicon-close me-2" aria-hidden="true"></i>
                            Sorry, there was an error sending your message. Please try again or contact us directly.
                          </div>
                        )}
                        
                        <button
                          className="btn btn-md btn-primary w-100 rounded-xl py-2 fw-bold shadow-md hover:shadow-lg transition-all duration-200"
                          type="submit"
                          disabled={isSubmitting}
                          aria-describedby={submitStatus === 'error' ? 'form-error' : undefined}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </form>
                    </div>
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
