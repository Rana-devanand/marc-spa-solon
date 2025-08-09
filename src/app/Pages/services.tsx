import React, { useState } from 'react';
import Layout from '@/components/layouts/Layout';
import AnimationWrapper from '@/components/Animations/animations';
import Card from '@/components/UI/Card';
import Button from '@/components/UI/Button';

// Type definitions
interface Category {
  id: string;
  name: string;
  count: number;
}

interface Service {
  id: number;
  category: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  benefits: string[];
  icon: string;
  popular: boolean;
}

interface Package {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  savings: string;
  icon: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: Category[] = [
    { id: 'all', name: 'All Services', count: 12 },
    { id: 'facial', name: 'Facial Treatments', count: 4 },
    { id: 'injectables', name: 'Injectables', count: 3 },
    { id: 'laser', name: 'Laser Treatments', count: 3 },
    { id: 'body', name: 'Body Contouring', count: 2 }
  ];

  const services: Service[] = [
    {
      id: 1,
      category: 'facial',
      name: 'HydraFacial MD',
      price: 'From $180',
      duration: '45 minutes',
      description: 'A revolutionary treatment that cleanses, extracts, and hydrates skin using patented technology.',
      benefits: ['Deep cleansing', 'Improved texture', 'Instant glow', 'No downtime'],
      icon: '✨',
      popular: true
    },
    {
      id: 2,
      category: 'facial',
      name: 'Chemical Peels',
      price: 'From $120',
      duration: '30-60 minutes',
      description: 'Customized peels to address specific skin concerns and reveal healthier, younger-looking skin.',
      benefits: ['Reduces fine lines', 'Improves skin tone', 'Minimizes pores', 'Treats acne scars'],
      icon: '🧴',
      popular: false
    },
    {
      id: 3,
      category: 'facial',
      name: 'Microneedling',
      price: 'From $250',
      duration: '60 minutes',
      description: 'Stimulates collagen production using fine needles to improve skin texture and appearance.',
      benefits: ['Boosts collagen', 'Reduces scars', 'Tightens skin', 'Natural healing'],
      icon: '💉',
      popular: false
    },
    {
      id: 4,
      category: 'facial',
      name: 'Oxygen Facial',
      price: 'From $150',
      duration: '45 minutes',
      description: 'Infuses skin with oxygen and customized serums for immediate hydration and radiance.',
      benefits: ['Instant hydration', 'Plumps skin', 'Reduces redness', 'Perfect for events'],
      icon: '💨',
      popular: false
    },
    {
      id: 5,
      category: 'injectables',
      name: 'Botox Cosmetic',
      price: 'From $12/unit',
      duration: '15-30 minutes',
      description: 'FDA-approved treatment to reduce fine lines and wrinkles for a more youthful appearance.',
      benefits: ['Smooths wrinkles', 'Prevents new lines', 'Natural results', 'Quick procedure'],
      icon: '💉',
      popular: true
    },
    {
      id: 6,
      category: 'injectables',
      name: 'Dermal Fillers',
      price: 'From $650',
      duration: '30-45 minutes',
      description: 'Restore volume and enhance facial features with premium hyaluronic acid fillers.',
      benefits: ['Adds volume', 'Enhances lips', 'Reduces wrinkles', 'Natural look'],
      icon: '💋',
      popular: true
    },
    {
      id: 7,
      category: 'injectables',
      name: 'Sculptra',
      price: 'From $800',
      duration: '45 minutes',
      description: 'Stimulates natural collagen production for gradual, long-lasting facial volume restoration.',
      benefits: ['Long-lasting', 'Natural collagen', 'Gradual improvement', '2+ year results'],
      icon: '🎭',
      popular: false
    },
    {
      id: 8,
      category: 'laser',
      name: 'Laser Hair Removal',
      price: 'From $99',
      duration: '15-60 minutes',
      description: 'Permanent hair reduction using advanced laser technology for smooth, hair-free skin.',
      benefits: ['Permanent results', 'All skin types', 'Precise targeting', 'Minimal discomfort'],
      icon: '⚡',
      popular: true
    },
    {
      id: 9,
      category: 'laser',
      name: 'IPL Photofacial',
      price: 'From $350',
      duration: '30 minutes',
      description: 'Intense pulsed light therapy to improve skin tone, reduce pigmentation, and minimize pores.',
      benefits: ['Even skin tone', 'Reduces sun damage', 'Minimizes pores', 'No downtime'],
      icon: '🌟',
      popular: false
    },
    {
      id: 10,
      category: 'laser',
      name: 'Laser Skin Resurfacing',
      price: 'From $500',
      duration: '45-90 minutes',
      description: 'Advanced fractional laser treatment for skin rejuvenation and texture improvement.',
      benefits: ['Reduces wrinkles', 'Improves texture', 'Treats scars', 'Tightens skin'],
      icon: '✨',
      popular: false
    },
    {
      id: 11,
      category: 'body',
      name: 'CoolSculpting',
      price: 'From $750',
      duration: '35-60 minutes',
      description: 'Non-invasive fat reduction that freezes and eliminates stubborn fat cells permanently.',
      benefits: ['No surgery', 'Permanent results', 'FDA approved', 'Natural elimination'],
      icon: '❄️',
      popular: true
    },
    {
      id: 12,
      category: 'body',
      name: 'Body Contouring RF',
      price: 'From $400',
      duration: '45 minutes',
      description: 'Radiofrequency technology to tighten skin and reduce cellulite for a smoother silhouette.',
      benefits: ['Tightens skin', 'Reduces cellulite', 'No downtime', 'Gradual improvement'],
      icon: '🔥',
      popular: false
    }
  ];

  const packages: Package[] = [
    {
      id: 1,
      name: 'Glow Package',
      price: '$450',
      originalPrice: '$530',
      savings: 'Save $80',
      icon: '🌟',
      description: 'Perfect introduction to our aesthetic treatments with essential facial care.',
      features: [
        'HydraFacial MD',
        'Oxygen Facial',
        'Follow-up consultation',
        '6-month comprehensive care',
        'Skincare product samples'
      ]
    },
    {
      id: 2,
      name: 'Luxury Package',
      price: '$1,200',
      originalPrice: '$1,500',
      savings: 'Save $300',
      icon: '👑',
      description: 'Our most comprehensive package combining injectables with premium facial treatments.',
      features: [
        'Botox Treatment (20 units)',
        'HydraFacial MD',
        'Chemical Peel',
        '3-month follow-up care',
        'Priority booking',
        'Complimentary skincare consultation'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Complete Package',
      price: '$2,500',
      originalPrice: '$3,200',
      savings: 'Save $700',
      icon: '💎',
      description: 'The ultimate transformation package for comprehensive facial rejuvenation.',
      features: [
        'Botox + Dermal Fillers',
        'Laser Skin Resurfacing',
        'Microneedling Series (3 sessions)',
        '6-month follow-up care',
        'VIP treatment experience',
        'Exclusive aftercare products',
        'Personal treatment coordinator'
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter((service: Service) => service.category === selectedCategory);

  const CheckIcon: React.FC = () => (
    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive range of cutting-edge aesthetic treatments designed 
                to help you look and feel your absolute best.
              </p>
            </div>
          </AnimationWrapper>

          {/* Service Categories Filter */}
          <AnimationWrapper delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category: Category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-500 border border-gray-200 shadow-sm'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service: Service, index: number) => (
              <AnimationWrapper key={service.id} delay={index * 0.1}>
                <Card className="h-full relative group" hover>
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      POPULAR
                    </div>
                  )}
                  
                  <Card.Header>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-rose-600">{service.price}</div>
                        <div className="text-sm text-gray-500">{service.duration}</div>
                      </div>
                    </div>
                    <Card.Title>{service.name}</Card.Title>
                  </Card.Header>

                  <Card.Content>
                    <Card.Description className="mb-6">
                      {service.description}
                    </Card.Description>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.benefits.map((benefit: string, idx: number) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckIcon />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card.Content>

                  <Card.Footer>
                    <div className="space-y-3">
                      <Button className="w-full group-hover:scale-105 transition-transform">
                        Book Consultation
                      </Button>
                      <button className="w-full text-rose-500 hover:text-rose-600 font-semibold text-sm transition-colors">
                        Learn More
                      </button>
                    </div>
                  </Card.Footer>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Treatment Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Save more with our specially designed treatment packages that combine 
                complementary services for optimal results.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg: Package, index: number) => (
              <AnimationWrapper key={pkg.id} delay={index * 0.1}>
                <Card className={`text-center h-full relative ${
                  pkg.popular ? 'ring-2 ring-rose-500 shadow-xl' : ''
                }`} variant={pkg.popular ? "gradient" : "bordered"}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <Card.Header className={pkg.popular ? "pt-8" : ""}>
                    <div className="text-4xl mb-4">{pkg.icon}</div>
                    <Card.Title>{pkg.name}</Card.Title>
                    <div className="text-3xl font-bold text-rose-600 mt-2">{pkg.price}</div>
                    <div className="text-sm text-gray-500 line-through">{pkg.originalPrice}</div>
                    <div className="text-sm text-green-600 font-semibold">{pkg.savings}</div>
                    <p className="text-sm text-gray-600 mt-3">{pkg.description}</p>
                  </Card.Header>
                  
                  <Card.Content>
                    <ul className="space-y-3 text-left text-gray-600">
                      {pkg.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card.Content>

                  <Card.Footer>
                    <Button 
                      variant={pkg.popular ? "primary" : "outline"} 
                      className="w-full"
                    >
                      Choose Package
                    </Button>
                  </Card.Footer>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to providing the highest quality treatments with proven results 
                and exceptional patient care.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Award-Winning',
                description: 'Recognized for excellence in aesthetic treatments and patient satisfaction.'
              },
              {
                icon: '👨‍⚕️',
                title: 'Expert Practitioners',
                description: 'Board-certified professionals with years of specialized experience.'
              },
              {
                icon: '🔬',
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment and cutting-edge treatment techniques.'
              },
              {
                icon: '💝',
                title: 'Personalized Care',
                description: 'Customized treatment plans tailored to your unique goals and needs.'
              }
            ].map((feature, index: number) => (
              <AnimationWrapper key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Your Treatment Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From consultation to results, we guide you through every step of your transformation.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description: 'Discuss your goals and concerns with our expert practitioners.',
                icon: '💬'
              },
              {
                step: '02',
                title: 'Customized Plan',
                description: 'Receive a personalized treatment plan tailored to your needs.',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Expert Treatment',
                description: 'Experience professional care with the latest techniques and technology.',
                icon: '✨'
              },
              {
                step: '04',
                title: 'Follow-Up Care',
                description: 'Ongoing support and monitoring to ensure optimal results.',
                icon: '🎯'
              }
            ].map((step, index: number) => (
              <AnimationWrapper key={index} delay={index * 0.15}>
                <div className="text-center relative">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-rose-200 to-pink-200 transform -translate-y-1/2 z-0"></div>
                  )}
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a consultation today to discuss which treatments are right for you. 
              Our experts will create a personalized plan to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Book Free Consultation
              </Button>
              <Button variant="secondary" size="lg" className="text-lg">
                Call (555) 123-4567
              </Button>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              <p>📧 info@aestheticspa.com | 📍 123 Beauty Lane, Spa City | ⏰ Mon-Sat: 9AM-7PM</p>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;