import React from 'react';
import Layout from "@/components/layouts/Layout";
import AnimationWrapper from "@/components/Animations/animations";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";

const AboutPage = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every treatment, using only the latest technology and proven techniques.'
    },
    {
      icon: '❤️',
      title: 'Care',
      description: 'Your comfort and satisfaction are our top priorities. We treat every client like family.'
    },
    {
      icon: '🔬',
      title: 'Innovation',
      description: 'We stay at the forefront of aesthetic medicine, continuously updating our services and equipment.'
    },
    {
      icon: '🏆',
      title: 'Results',
      description: 'Our track record speaks for itself - thousands of satisfied clients and amazing transformations.'
    }
  ];

  const certifications = [
    'American Board of Cosmetic Surgery',
    'International Association for Physicians in Aesthetic Medicine',
    'American Society of Plastic Surgeons',
    'Medical Board of California',
    'Allergan Certified Provider',
    'CoolSculpting University Graduate'
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Marc Med Spa Founded',
      description: 'Started with a vision to provide world-class aesthetic treatments in a luxurious, comfortable environment.'
    },
    {
      year: '2022',
      title: 'Expanded Services',
      description: 'Added advanced laser treatments and non-invasive body contouring to our comprehensive service menu.'
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Received "Best Med Spa" award from the local business community for excellence in patient care.'
    },
    {
      year: '2024',
      title: 'Advanced Technology',
      description: 'Invested in state-of-the-art equipment and expanded our team of certified professionals.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About Marc Med Spa
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Dedicated to helping you look and feel your absolute best through cutting-edge 
                aesthetic treatments and personalized care.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Marc Med Spa was founded with a simple yet powerful mission: to provide 
                    exceptional aesthetic treatments that enhance natural beauty while 
                    maintaining the highest standards of safety and professionalism.
                  </p>
                  <p>
                    Our journey began when our founder, Dr. Marc Johnson, recognized the need 
                    for a medical spa that combined advanced technology with a truly 
                    for a medical spa that combined advanced technology with a truly 
                    personalized approach to aesthetic care. Today, we're proud to be 
                    one of the region's most trusted destinations for cosmetic treatments.
                  </p>
                  <p>
                    Every member of our team is committed to helping you achieve your 
                    aesthetic goals in a safe, comfortable, and welcoming environment. 
                    We believe that everyone deserves to feel confident in their own skin.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-12 text-center">
                  <div className="text-8xl mb-4">🏥</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Modern Facility</h3>
                  <p className="text-gray-600">
                    State-of-the-art equipment in a luxurious, spa-like atmosphere
                  </p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do and ensure you receive 
                the highest quality care and results.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimationWrapper key={value.title} delay={index * 0.1}>
                <Card className="text-center h-full" hover>
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <Card.Title size="md" className="mb-3">{value.title}</Card.Title>
                  <Card.Description>{value.description}</Card.Description>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From our humble beginnings to becoming a premier destination for 
                aesthetic treatments.
              </p>
            </div>
          </AnimationWrapper>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-500 to-pink-500 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimationWrapper key={item.year} delay={index * 0.2}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:pr-8">
                      <Card className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                          {item.year}
                        </div>
                        <Card.Title size="lg" className="mb-3">{item.title}</Card.Title>
                        <Card.Description>{item.description}</Card.Description>
                      </Card>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden md:block w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <div className="flex-1 md:pl-8"></div>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Credentials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team maintains the highest professional standards through 
                continuous education and certification.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <AnimationWrapper key={cert} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 text-center border border-rose-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">🏆</div>
                  <h3 className="font-semibold text-gray-900">{cert}</h3>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the Marc Med Spa difference. Book your consultation today and 
              discover what makes us the preferred choice for aesthetic treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Schedule Consultation
              </Button>
              <Button variant="secondary" size="lg" className="text-lg">
                View Our Services
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;