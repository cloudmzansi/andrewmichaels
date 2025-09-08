import React from "react";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";

export const metadata = {
  title: "Terms of Service | CloudMzansi",
  description: "Terms of Service for CloudMzansi web development agency. Read our terms and conditions for using our services.",
};

export default function TermsPage(): React.JSX.Element {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper uc-dark">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <main className="flex-grow">
                <div className="container mx-auto px-2 lg:px-3">
                  <div className="section panel py-6 md:py-8 xl:py-10">
                    <div className="section-inner panel">
                      <div className="panel vstack items-center gap-3 xl:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto text-center">
                        <span className="fs-8 fw-medium py-1 px-2 border rounded-pill bg-primary bg-opacity-10 text-primary">
                          Legal Information
                        </span>
                        <h1 className="h2 lg:h1 m-0 fw-bold">
                          Terms of Service
                        </h1>
                        <p className="fs-6 xl:fs-5 lh-lg text-opacity-80">
                          Please read these terms and conditions carefully before using our services.
                        </p>
                      </div>
                      
                      <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                          <div className="vstack gap-6">
                            <section>
                              <h2 className="h3 fw-bold mb-4">1. Acceptance of Terms</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                By accessing and using CloudMzansi's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                              </p>
                              <p className="fs-6 lh-lg text-opacity-80">
                                These terms apply to all visitors, users, and others who access or use the service. Your continued use of the service after any such changes constitutes your acceptance of the new terms.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">2. Description of Service</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                CloudMzansi provides web development, design, and digital marketing services. We specialize in creating professional websites, eCommerce solutions, and digital marketing strategies for South African businesses.
                              </p>
                              <p className="fs-6 lh-lg text-opacity-80">
                                Our services include but are not limited to:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4">
                                <li>Website design and development</li>
                                <li>eCommerce platform development</li>
                                <li>Digital marketing and SEO services</li>
                                <li>Website maintenance and support</li>
                                <li>Consulting and strategy services</li>
                              </ul>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">3. User Responsibilities</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                You are responsible for:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li>Providing accurate and complete information</li>
                                <li>Maintaining the confidentiality of your account</li>
                                <li>All activities that occur under your account</li>
                                <li>Complying with all applicable laws and regulations</li>
                              </ul>
                              <p className="fs-6 lh-lg text-opacity-80">
                                You agree not to use our services for any unlawful purpose or any purpose prohibited under this clause. You may not use our services in any manner that could damage, disable, overburden, or impair any server, or the network(s) connected to any server.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">4. Payment Terms</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                Payment terms for our services are as follows:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li>25% deposit required to commence work</li>
                                <li>25% payment at project midpoint</li>
                                <li>50% final payment upon project completion</li>
                              </ul>
                              <p className="fs-6 lh-lg text-opacity-80">
                                All prices are quoted in South African Rand (ZAR) and are exclusive of VAT unless otherwise specified. Payment is due within 7 days of invoice date unless alternative arrangements have been made in writing.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">5. Intellectual Property</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                Upon full payment, you will own the final deliverables created specifically for your project. However, CloudMzansi retains the right to use any general knowledge, skills, techniques, or methodologies developed during the course of providing services.
                              </p>
                              <p className="fs-6 lh-lg text-opacity-80">
                                You grant CloudMzansi permission to showcase your project in our portfolio and marketing materials unless otherwise agreed in writing.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">6. Limitation of Liability</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                CloudMzansi shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                              </p>
                              <p className="fs-6 lh-lg text-opacity-80">
                                Our total liability to you for any damages arising from or related to this agreement shall not exceed the total amount paid by you to CloudMzansi in the twelve (12) months preceding the claim.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">7. Termination</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                Either party may terminate this agreement at any time with written notice. Upon termination:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li>You will pay for all work completed up to the termination date</li>
                                <li>CloudMzansi will deliver all completed work</li>
                                <li>Both parties will return any confidential information</li>
                              </ul>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">8. Governing Law</h2>
                              <p className="fs-6 lh-lg text-opacity-80">
                                This agreement shall be governed by and construed in accordance with the laws of South Africa. Any disputes arising from this agreement shall be subject to the exclusive jurisdiction of the courts of South Africa.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">9. Contact Information</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                              </p>
                              <div className="fs-6 lh-lg text-opacity-80">
                                <p><strong>CloudMzansi</strong></p>
                                <p>Durban, South Africa</p>
                                <p>Email: info@cloudmzansi.co.za</p>
                                <p>Phone: +27 (0) 31 XXX XXXX</p>
                              </div>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">10. Changes to Terms</h2>
                              <p className="fs-6 lh-lg text-opacity-80">
                                CloudMzansi reserves the right to modify these terms at any time. We will notify users of any changes by posting the new terms on this page. Changes are effective immediately upon posting.
                              </p>
                            </section>

                            <div className="text-center mt-8 pt-6 border-top">
                              <p className="fs-7 text-opacity-60">
                                Last updated: January 2025
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
