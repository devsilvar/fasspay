'use client';

import React, { useState } from 'react';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-br bg-[#473893]  text-white'>
        <div className='container mx-auto px-4 py-16 lg:py-24'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-6'>
              Privacy Policy
            </h1>
            <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed'>
              At WallX, we are committed to protecting your privacy and ensuring
              the security of your personal and financial information. This
              comprehensive Privacy Policy outlines how we collect, use, and
              safeguard your data across all our services.
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-4 gap-8'>
            {/* Table of Contents - Sticky Sidebar */}
            <div className='lg:col-span-1'>
              <div className='bg-white rounded-lg shadow-sm p-6 sticky top-8'>
                <h2 className='text-lg font-semibold mb-4 text-gray-800'>
                  Table of Contents
                </h2>
                <nav className='space-y-2'>
                  {[
                    { id: 'scope', title: '1. Scope of This Policy' },
                    { id: 'information', title: '2. Information We Collect' },
                    {
                      id: 'how-we-use',
                      title: '3. How We Use Your Information',
                    },
                    {
                      id: 'legal-basis',
                      title: '4. Legal Basis for Processing',
                    },
                    { id: 'sharing', title: '5. Sharing Your Information' },
                    { id: 'retention', title: '6. Data Retention' },
                    { id: 'security', title: '7. Data Security' },
                    {
                      id: 'transfers',
                      title: '8. International Data Transfers',
                    },
                    { id: 'rights', title: '9. Your Rights' },
                    { id: 'cookies', title: '10. Cookies and Tracking' },
                    { id: 'children', title: "11. Children's Privacy" },
                    { id: 'changes', title: '12. Changes to This Policy' },
                    { id: 'contact', title: '13. Contact Us' },
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className='lg:col-span-3'>
              <div className='bg-white rounded-lg shadow-sm p-8 lg:p-12'>
                {/* Introduction Paragraph */}

                {/* Privacy Policy Content */}
                <div className='prose prose-lg max-w-none'>
                  {/* Section 1 */}
                  <section id='scope' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        1
                      </span>
                      Scope of This Policy
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>
                        This Privacy Policy applies to all individuals and
                        businesses who:
                      </p>
                      <ul className='list-disc pl-6 space-y-2'>
                        <li>
                          Use WallX Services for digital payments, merchant
                          collections, transfers, lending, savings, or credit
                          profiling;
                        </li>
                        <li>
                          Interact with our platforms, apps, APIs, or websites;
                        </li>
                        <li>
                          Participate in marketing or promotional activities; or
                        </li>
                        <li>Communicate with us or our support team.</li>
                      </ul>
                      <p>
                        This Policy also extends to any data we collect through
                        authorized partners, agents, or financial service
                        providers that integrate with WallX.
                      </p>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section id='information' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        2
                      </span>
                      Information We Collect
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>
                        We collect Personal Information and Financial Data to
                        deliver secure, compliant, and personalized financial
                        services.
                      </p>

                      <div className='ml-4'>
                        <h3 className='font-semibold text-lg mb-2'>
                          a. Information You Provide Directly
                        </h3>
                        <ul className='list-disc pl-6 space-y-2'>
                          <li>
                            <strong>Account Information:</strong> Full name,
                            phone number, address, date of birth, BVN or
                            government-issued ID, and contact details.
                          </li>
                          <li>
                            <strong>Financial Details:</strong> Bank account
                            information, transaction history, payment methods,
                            and credit assessment data.
                          </li>
                          <li>
                            <strong>Verification Data:</strong> KYC/AML
                            documentation such as ID cards, utility bills,
                            business registration details, or tax identification
                            numbers. All verification data is externally managed
                            through a truted 3rd party named &quot;Veriff&quot;
                          </li>
                          <li>
                            <strong>Business Profile Data:</strong> For
                            merchants, this may include company name, industry
                            type, sales data, and financial records.
                          </li>
                          <li>
                            <strong>Support and Communications:</strong> Details
                            you share when contacting customer support,
                            reporting issues, or participating in surveys.
                          </li>
                          <li>
                            <strong>Consent-Based Data:</strong> Information
                            shared when you authorize us to access third-party
                            accounts, link wallets, or connect to financial
                            APIs.
                          </li>
                        </ul>
                      </div>

                      <div className='ml-4'>
                        <h3 className='font-semibold text-lg mb-2'>
                          b. Information Collected Automatically
                        </h3>
                        <ul className='list-disc pl-6 space-y-2'>
                          <li>
                            <strong>Usage Data:</strong> How you interact with
                            our apps, dashboards, and Services (e.g.,
                            transaction frequency, navigation patterns, and
                            engagement).
                          </li>
                          <li>
                            <strong>Device Data:</strong> IP address, browser
                            type, device model, operating system, mobile
                            identifiers, and app version.
                          </li>
                          <li>
                            <strong>Cookies and Tracking:</strong> To improve
                            performance, analytics, and fraud detection.
                          </li>
                          <li>
                            <strong>Location Data:</strong> Approximate or
                            precise location (where permitted) to verify
                            transactions, enhance security, and comply with
                            regulations.
                          </li>
                        </ul>
                      </div>

                      <div className='ml-4'>
                        <p>
                          <strong>c. Information from Third Parties</strong>
                        </p>
                        <p className='ml-6'>We may receive information from:</p>
                        <ul className='list-disc pl-10 space-y-2'>
                          <li>
                            Financial Institutions & Payment Partners for
                            processing and verification.
                          </li>
                          <li>
                            ID Verification Services for credit scoring and KYC
                            compliance;
                          </li>
                          <li>
                            Regulatory or Law Enforcement Agencies for risk and
                            compliance reporting;
                          </li>
                          <li>
                            Merchants, Aggregators, or Business Partners
                            offering WallX-integrated payment or lending
                            services.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3 */}
                  <section id='how-we-use' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        3
                      </span>
                      How We Use Your Information
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>
                        We use collected data to provide safe, compliant, and
                        efficient financial services.
                      </p>
                      <ul className='list-disc pl-6 space-y-2'>
                        <li>
                          <strong>Account Creation & Verification:</strong> To
                          verify identity, comply with Know-Your-Customer (KYC)
                          and Anti-Money-Laundering (AML) laws.
                        </li>
                        <li>
                          <strong>Transaction Processing:</strong> To initiate,
                          validate, and complete payments, transfers,
                          settlements, and refunds.
                        </li>
                        <li>
                          <strong>Fraud Detection & Risk Management:</strong> To
                          monitor suspicious activity, prevent unauthorized
                          access, and safeguard customer funds.
                        </li>
                        <li>
                          <strong>Customer Support & Communication:</strong> To
                          respond to inquiries, resolve disputes, and provide
                          updates about your account or transactions.
                        </li>
                        <li>
                          <strong>Product Improvement:</strong> To enhance
                          system performance, develop new features, and
                          personalize your experience.
                        </li>
                        <li>
                          <strong>Marketing & Engagement:</strong> With your
                          consent, to send promotional materials, offers, and
                          updates related to our services.
                        </li>
                        <li>
                          <strong>Compliance & Legal Obligations:</strong> To
                          meet tax, audit, and record-keeping requirements under
                          applicable laws.
                        </li>
                        <li>
                          <strong>Credit Profiling & Analytics:</strong> To
                          assess creditworthiness, enable access to capital, and
                          support data-driven financial inclusion. May be
                          powered by 3rd parties
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Section 4 */}
                  <section id='legal-basis' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        4
                      </span>
                      Legal Basis for Processing
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>
                        We process your Personal Information under the following
                        lawful bases:
                      </p>
                      <ul className='list-disc pl-6 space-y-2'>
                        <li>
                          <strong>Consent:</strong> When you voluntarily provide
                          data or opt into communications.
                        </li>
                        <li>
                          <strong>Contract:</strong> To fulfill our obligations
                          under our service agreement with you.
                        </li>
                        <li>
                          <strong>Legal Obligation:</strong> To comply with
                          financial and regulatory requirements.
                        </li>
                        <li>
                          <strong>Legitimate Interest:</strong> To enhance
                          security, prevent fraud, and improve customer
                          experience.
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Section 5 */}
                  <section id='sharing' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        5
                      </span>
                      Sharing Your Information
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>
                        We share data only when necessary and always under
                        secure and lawful conditions.
                      </p>
                      <p>We may share your information with:</p>
                      <ul className='list-disc pl-6 space-y-2'>
                        <li>
                          Financial Institutions and Payment Networks (for
                          transaction processing and settlements).
                        </li>
                        <li>
                          Service Providers and Partners (for KYC verification,
                          fraud monitoring, analytics, cloud hosting, or
                          support).
                        </li>
                        <li>
                          Credit Bureaus and Lending Partners (for credit
                          evaluation or credit history reporting).
                        </li>
                        <li>
                          Regulators and Law Enforcement Agencies (as required
                          by law).
                        </li>
                        <li>
                          <strong>Business Transfers:</strong> In case of a
                          merger, acquisition, or restructuring, your data may
                          be securely transferred to the new entity.
                        </li>
                      </ul>
                      <p className='font-semibold'>
                        We never sell your personal or financial information to
                        third parties.
                      </p>
                    </div>
                  </section>

                  {/* Section 6 */}
                  <section id='retention' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        6
                      </span>
                      Data Retention
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>
                        We retain your Personal Information only for as long as
                        necessary to:
                      </p>
                      <ul className='list-disc pl-6 space-y-2'>
                        <li>fulfill the purposes outlined in this Policy;</li>
                        <li>
                          Comply with applicable legal, tax, or accounting
                          obligations; and
                        </li>
                        <li>Prevent, detect, and mitigate fraud or misuse.</li>
                      </ul>
                      <p>
                        Typically, financial data is retained for up to seven
                        (7) years after account closure or as required by law.
                      </p>
                    </div>
                  </section>

                  {/* Section 7 */}
                  <section id='security' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        7
                      </span>
                      Data Security
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>
                        We apply advanced administrative, technical, and
                        physical safeguards to protect your data.
                      </p>
                      <p>Security measures include:</p>
                      <ul className='list-disc pl-6 space-y-2'>
                        <li>Encryption (at rest and in transit);</li>
                        <li>
                          Multi-factor authentication and access controls.
                        </li>
                        <li>
                          Continuous network monitoring and fraud detection
                          systems.
                        </li>
                        <li>
                          PCI DSS-compliant payment processing; (Not applicable
                          to us as we do not hold card details)
                        </li>
                        <li>Regular vulnerability and penetration testing.</li>
                      </ul>
                      <p>
                        Although we maintain robust systems, no platform can
                        guarantee absolute security. In the event of a data
                        breach, we will notify affected parties promptly and
                        comply with all applicable laws.
                      </p>
                    </div>
                  </section>

                  {/* Section 8 */}
                  <section id='transfers' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        8
                      </span>
                      International Data Transfers
                    </h2>
                    <div className='text-gray-700 leading-relaxed'>
                      <p>
                        Where necessary, data may be transferred across borders
                        to our affiliates, cloud providers, or service partners.
                        Such transfers are protected through appropriate
                        safeguards — including data transfer agreements,
                        standard contractual clauses, or equivalent legal
                        mechanisms.
                      </p>
                    </div>
                  </section>

                  {/* Section 9 */}
                  <section id='rights' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        9
                      </span>
                      Your Rights
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>
                        Depending on your jurisdiction (NDPR, GDPR, CCPA, etc.),
                        you may have the following rights:
                      </p>
                      <ul className='list-disc pl-6 space-y-2'>
                        <li>
                          <strong>Access:</strong> Request a copy of your data.
                        </li>
                        <li>
                          <strong>Correction:</strong> Update or correct
                          inaccurate information.
                        </li>
                        <li>
                          <strong>Deletion:</strong> Request deletion ("Right to
                          be Forgotten") where legally permissible.
                        </li>
                        <li>
                          <strong>Restriction:</strong> Limit how we process
                          your information.
                        </li>
                        <li>
                          <strong>Portability:</strong> Request transfer of your
                          data in a structured format.
                        </li>
                        <li>
                          <strong>Withdraw Consent:</strong> Opt out of
                          non-essential processing or marketing communications.
                        </li>
                      </ul>
                      <p>
                        To exercise any of these rights, please contact us via
                        the details below.
                      </p>
                    </div>
                  </section>

                  {/* Section 10 */}
                  <section id='cookies' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        10
                      </span>
                      Cookies and Tracking
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>WallX uses cookies and similar technologies to:</p>
                      <ul className='list-disc pl-6 space-y-2'>
                        <li>Improve user experience and system performance;</li>
                        <li>
                          Enable fraud detection and account security; and
                        </li>
                        <li>Measure website and app analytics.</li>
                      </ul>
                      <p>
                        You can manage or disable cookies through your browser
                        settings, but some features may not function properly
                        without them.
                      </p>
                    </div>
                  </section>

                  {/* Section 11 */}
                  <section id='children' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        11
                      </span>
                      Children's Privacy
                    </h2>
                    <div className='text-gray-700 leading-relaxed'>
                      <p>
                        WallX Services are not intended for individuals under 18
                        years old. We do not knowingly collect or process data
                        from minors. If we become aware of such collection, we
                        will promptly delete the data.
                      </p>
                    </div>
                  </section>

                  {/* Section 12 */}
                  <section id='changes' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        12
                      </span>
                      Changes to This Policy
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>
                        We may update this Privacy Policy periodically to
                        reflect legal, technical, or operational changes.
                      </p>
                      <p>
                        The latest version will always be available at:
                        <br />
                        <a
                          href='https://www.wallx.co/privacy-policy'
                          className='text-blue-600 hover:text-blue-800 underline'
                        >
                          https://www.wallx.co/privacy-policy
                        </a>
                      </p>
                      <p>
                        Significant updates will be communicated via email or
                        in-app notifications.
                      </p>
                    </div>
                  </section>

                  {/* Section 13 */}
                  <section id='contact' className='mb-12 scroll-mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                      <span className='bg-[#473893] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3'>
                        13
                      </span>
                      Contact Us
                    </h2>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                      <p>
                        For inquiries, data access, or complaints, please
                        contact our Data Protection Officer (DPO):
                      </p>
                      <p>
                        <strong>Email:</strong> or{' '}
                        <a
                          href='mailto:provacy@faaspay.ca'
                          className='text-blue-600 hover:text-blue-800'
                        >
                          provacy@faaspay.ca
                        </a>{' '}
                      </p>

                      <div className='bg-gray-50 p-6 rounded-lg'>
                        <p className='mb-4'>
                          <strong>Locations:</strong>
                        </p>
                        <p className='mb-2'>WallX Incorporation Inc.</p>
                        <p className='mb-2'>
                          290 King Street E, Kitchener, ON N2G 2L3, Canada
                        </p>
                        <p className='mb-2'>
                          220 East 23rd St Manhattan NY 10010, United States
                        </p>
                        <p className='mb-2'>
                          21 Nyese Ibrahim Tella Street, Lekki, Lagos , Nigeria
                        </p>
                        <p>
                          <strong>Fax Only:</strong> +1 519-804-9236
                        </p>
                      </div>

                      <p>
                        You may also contact your local data protection
                        authority (e.g., NDPC Nigeria, FTC USA, or OPC Canada).
                      </p>
                    </div>
                  </section>
                </div>

                {/* Last Updated */}
                <div className='mt-12 pt-8 border-t border-gray-200'>
                  {/* <p className='text-sm text-gray-500 text-center'>
                    This Privacy Policy was last updated on October 20, 2025
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
