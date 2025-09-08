import React from "react";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";

export const metadata = {
  title: "Privacy Policy | CloudMzansi",
  description: "Privacy Policy for CloudMzansi web development agency. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage(): React.JSX.Element {
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
                          Privacy & Data Protection
                        </span>
                        <h1 className="h2 lg:h1 m-0 fw-bold">
                          Privacy Policy
                        </h1>
                        <p className="fs-6 xl:fs-5 lh-lg text-opacity-80">
                          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                        </p>
                      </div>
                      
                      <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                          <div className="vstack gap-6">
                            <section>
                              <h2 className="h3 fw-bold mb-4">1. Information We Collect</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li>Name and contact information (email, phone number, address)</li>
                                <li>Business information (company name, industry, project requirements)</li>
                                <li>Payment information (processed securely through third-party providers)</li>
                                <li>Communication preferences and correspondence</li>
                              </ul>
                              <p className="fs-6 lh-lg text-opacity-80">
                                We also automatically collect certain information when you visit our website, including IP address, browser type, device information, and usage patterns.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">2. How We Use Your Information</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                We use the information we collect to:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send technical notices, updates, and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Develop new products and services</li>
                                <li>Monitor and analyze trends and usage</li>
                                <li>Personalize and improve your experience</li>
                              </ul>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">3. Information Sharing and Disclosure</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li><strong>Service Providers:</strong> We may share information with trusted third parties who assist us in operating our website and conducting our business</li>
                                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, information may be transferred as part of the business assets</li>
                                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                              </ul>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">4. Data Security</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Regular security assessments and updates</li>
                                <li>Access controls and authentication systems</li>
                                <li>Staff training on data protection practices</li>
                              </ul>
                              <p className="fs-6 lh-lg text-opacity-80">
                                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">5. Cookies and Tracking Technologies</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li>Remember your preferences and settings</li>
                                <li>Analyze website traffic and usage patterns</li>
                                <li>Provide personalized content and advertisements</li>
                                <li>Improve website functionality and performance</li>
                              </ul>
                              <p className="fs-6 lh-lg text-opacity-80">
                                You can control cookie settings through your browser preferences. Note that disabling cookies may affect the functionality of our website.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">6. Your Rights and Choices</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                Under applicable data protection laws, you have certain rights regarding your personal information:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li><strong>Access:</strong> Request access to your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                                <li><strong>Objection:</strong> Object to processing of your information</li>
                                <li><strong>Restriction:</strong> Request restriction of processing</li>
                              </ul>
                              <p className="fs-6 lh-lg text-opacity-80">
                                To exercise these rights, please contact us using the information provided in the Contact section below.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">7. Data Retention</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Factors that determine retention periods include:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li>The nature of the information and purpose of processing</li>
                                <li>Legal and regulatory requirements</li>
                                <li>Business needs and operational requirements</li>
                                <li>Your consent and preferences</li>
                              </ul>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">8. International Data Transfers</h2>
                              <p className="fs-6 lh-lg text-opacity-80">
                                Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">9. Children's Privacy</h2>
                              <p className="fs-6 lh-lg text-opacity-80">
                                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">10. Changes to This Privacy Policy</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
                              </p>
                              <ul className="fs-6 lh-lg text-opacity-80 ps-4 mb-4">
                                <li>Posting the updated policy on our website</li>
                                <li>Sending you an email notification</li>
                                <li>Providing notice through our services</li>
                              </ul>
                              <p className="fs-6 lh-lg text-opacity-80">
                                Your continued use of our services after any changes constitutes acceptance of the updated privacy policy.
                              </p>
                            </section>

                            <section>
                              <h2 className="h3 fw-bold mb-4">11. Contact Us</h2>
                              <p className="fs-6 lh-lg text-opacity-80 mb-4">
                                If you have any questions about this privacy policy or our data practices, please contact us:
                              </p>
                              <div className="fs-6 lh-lg text-opacity-80">
                                <p><strong>CloudMzansi</strong></p>
                                <p>Durban, South Africa</p>
                                <p>Email: privacy@cloudmzansi.co.za</p>
                                <p>Phone: +27 (0) 31 XXX XXXX</p>
                                <p>Data Protection Officer: dpo@cloudmzansi.co.za</p>
                              </div>
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
