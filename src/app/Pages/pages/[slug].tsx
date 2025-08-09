import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layouts/Layout';
import AnimationWrapper from '@/components/Animations/animations';
import Card from '@/components/UI/Card';
import Button from '@/components/UI/Button';

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Page content based on slug
  const getPageContent = (slug: string) => {
    const pages = {
      'privacy-policy': {
        title: 'Privacy Policy',
        lastUpdated: 'August 2024',
        content: [
          {
            title: 'Information We Collect',
            text: 'At Marc Med Spa, we collect information you provide directly to us, such as when you create an account, schedule an appointment, or contact us. This may include your name, email address, phone number, medical history, and treatment preferences.'
          },
          {
            title: 'How We Use Your Information',
            text: 'We use the information we collect to provide, maintain, and improve our services, process appointments, communicate with you, and comply with legal obligations. Your medical information is handled in accordance with HIPAA regulations.'
          },
          {
            title: 'Information Sharing',
            text: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with healthcare providers, insurance companies, or as required by law.'
          },
          {
            title: 'Data Security',
            text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
          }
        ]
      },
      'terms-of-service': {
        title: 'Terms of Service',
        lastUpdated: 'August 2024',
        content: [
          {
            title: 'Acceptance of Terms',
            text: 'By accessing and using Marc Med Spa services, you accept and agree to be bound by the terms and provision of this agreement.'
          },
          {
            title: 'Services Description',
            text: 'Marc Med Spa provides cosmetic and aesthetic medical treatments. All services are provided by licensed medical professionals in accordance with applicable regulations and standards of care.'
          },
          {
            title: 'Appointment Policies',
            text: 'Appointments must be cancelled at least 24 hours in advance. Late cancellations or no-shows may result in fees. Treatment plans and pricing are subject to individual consultation and assessment.'
          },
          {
            title: 'Treatment Risks',
            text: 'All medical and cosmetic treatments carry inherent risks. Detailed information about specific risks and benefits will be provided during your consultation and before any treatment.'
          }
        ]
      },
      'careers': {
        title: 'Join Our Team',
        lastUpdated: 'Current Openings',
        content: [
          {
            title: 'Why Work at Marc Med Spa?',
            text: 'Join a team of passionate professionals dedicated to helping clients look and feel their best. We offer competitive compensation, comprehensive benefits, and opportunities for professional growth in a supportive environment.'
          },
          {
            title: 'Current Opportunities',
            text: 'We are currently seeking qualified candidates for the following positions: Licensed Aesthetician, Medical Assistant, Front Desk Coordinator, and Marketing Coordinator. All positions offer competitive salary and benefits.'
          },
          {
            title: 'Benefits Package',
            text: 'Our comprehensive benefits include health insurance, paid time off, professional development opportunities, employee discounts on treatments, and a supportive team environment focused on excellence in patient care.'
          },
          {
            title: 'How to Apply',
            text: 'To apply for any position, please send your resume and cover letter to careers@marcmedspa.com. Include the position title in the subject line. We are an equal opportunity employer.'
          }
        ]
      },
      'insurance-financing': {
        title: 'Insurance & Financing',
        lastUpdated: 'Payment Options',
        content: [
          {
            title: 'Insurance Coverage',
            text: 'Most cosmetic treatments are considered elective and are not covered by insurance. However, some treatments for medical conditions may be covered. We recommend checking with your insurance provider for specific coverage details.'
          },
          {
            title: 'Payment Options',
            text: 'We accept cash, credit cards (Visa, MasterCard, American Express, Discover), and care credit. Payment is due at the time of service unless other arrangements have been made in advance.'
          },
          {
            title: 'Financing Available',
            text: 'We partner with CareCredit and other financing companies to offer flexible payment plans with low monthly payments. Apply online or in-office for quick approval and special promotional rates.'
          },
          {
            title: 'Treatment Packages',
            text: 'Save money with our treatment packages designed to provide optimal results. Package pricing offers significant savings compared to individual treatment costs and can be combined with financing options.'
          }
        ]
      },
      'faq': {
        title: 'Frequently Asked Questions',
        lastUpdated: 'Common Questions',
        content: [
          {
            title: 'How do I prepare for my treatment?',
            text: 'Preparation varies by treatment type. We provide detailed pre-treatment instructions after your consultation. Generally, avoid sun exposure, certain medications, and alcohol before treatments. Arrive with clean skin and no makeup for facial treatments.'
          },
          {
            title: 'What should I expect during recovery?',
            text: 'Recovery time depends on the specific treatment. Many treatments have minimal to no downtime, while others may require several days of healing. We provide comprehensive aftercare instructions and are available for any questions during your recovery.'
          },
          {
            title: 'How long do results last?',
            text: 'Results vary by treatment and individual factors. Botox typically lasts 3-4 months, dermal fillers 6-18 months, and laser treatments may provide permanent results. We discuss expected duration during your consultation.'
          },
          {
            title: 'Are treatments safe?',
            text: 'All treatments are performed by licensed medical professionals using FDA-approved equipment and products. We conduct thorough consultations to ensure you are a good candidate and discuss all risks and benefits before treatment.'
          }
        ]
      }
    };

    return pages[slug as keyof typeof pages] || {
      title: '404 - Page Not Found',
      lastUpdated: '',
      content: [{
        title: 'Page Not Found',
        text: 'The page you are looking for does not exist. Please check the URL or return to our homepage.'
      }]
    };
  };

  const pageData = getPageContent(slug as string);

  const renderJobOpenings = () => {
    if (slug !== 'careers') return null;

    const jobs = [
      {
        title: 'Licensed Aesthetician',
        type: 'Full-time',
        experience: '2+ years',
        description: 'Perform advanced facial treatments, chemical peels, and microneedling procedures.'
      },
      {
        title: 'Medical Assistant',
        type: 'Full-time',
        experience: '1+ years',
        description: 'Assist with injectable treatments, patient care, and treatment room preparation.'
      },
      {
        title: 'Front Desk Coordinator',
        type: 'Part-time',
        experience: 'Entry level',
        description: 'Handle appointment scheduling, patient check-in, and administrative tasks.'
      }
    ];

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Current Job Openings
            </h2>
          </AnimationWrapper>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <AnimationWrapper key={job.title} delay={index * 0.1}>
                <Card className="p-6" hover>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full">
                          {job.type}
                        </span>
                        <span>{job.experience} experience</span>
                      </div>
                    </div>
                    <Button size="sm">Apply Now</Button>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {job.description}
                  </p>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderFAQSection = () => {
    if (slug !== 'faq') return null;

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600">
                Can't find what you're looking for? Contact us directly.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimationWrapper delay={0.2}>
              <Card className="text-center p-8">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">(555) 123-4567</p>
                <Button variant="outline" size="sm">Call Now</Button>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper delay={0.3}>
              <Card className="text-center p-8">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Available Mon-Fri 9AM-6PM</p>
                <Button variant="outline" size="sm">Start Chat</Button>
              </Card>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {pageData.title}
              </h1>
              {pageData.lastUpdated && (
                <p className="text-gray-600">
                  Last updated: {pageData.lastUpdated}
                </p>
              )}
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {pageData.content.map((section, index) => (
              <AnimationWrapper key={section.title} delay={index * 0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.text}
                  </p>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          {/* Page-specific additional content */}
          {slug === 'privacy-policy' && (
            <AnimationWrapper delay={0.8}>
              <div className="mt-16 p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Contact Us About Privacy</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us at:
                </p>
                <div className="text-gray-700">
                  <p>Marc Med Spa</p>
                  <p>123 Beauty Avenue</p>
                  <p>Beverly Hills, CA 90210</p>
                  <p>Email: privacy@marcmedspa.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>
            </AnimationWrapper>
          )}

          {slug === 'terms-of-service' && (
            <AnimationWrapper delay={0.8}>
              <div className="mt-16 p-6 bg-rose-50 rounded-2xl border border-rose-200">
                <h3 className="text-lg font-bold text-rose-900 mb-3">Important Notice</h3>
                <p className="text-rose-800">
                  These terms are subject to change. Continued use of our services after 
                  changes constitutes acceptance of the new terms. Please review periodically 
                  for updates.
                </p>
              </div>
            </AnimationWrapper>
          )}
        </div>
      </section>

      {/* Render additional sections */}
      {renderJobOpenings()}
      {renderFAQSection()}

      {/* Call to Action */}
      {slug !== 'faq' && (
        <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimationWrapper>
              <h2 className="text-3xl font-bold text-white mb-6">
                {slug === 'careers' ? 'Ready to Join Our Team?' : 'Have Questions?'}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {slug === 'careers' 
                  ? 'Send us your resume and become part of our exceptional team.'
                  : 'Contact us for more information or to schedule a consultation.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  {slug === 'careers' ? 'Apply Now' : 'Contact Us'}
                </Button>
                <Button variant="secondary" size="lg">
                  {slug === 'careers' ? 'Learn More' : 'Book Consultation'}
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default DynamicPage;