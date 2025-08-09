import React from 'react';
import AnimationWrapper from '../Animations/animations';
import Image from 'next/image';
import Featured1 from "@/asssts/img/featured/Bridal.jpg"
import Featured2 from "@/asssts/img/featured/Facial.jpg"
import Featured3 from "@/asssts/img/featured/Hair_coloue.jpg"
import Featured4 from "@/asssts/img/featured/Nail.jpg"
import Featured5 from "@/asssts/img/featured/Makeup.jpg"


const FeaturedServices = () => {
  const services = [
    {
      title: 'Hair Styling & Cuts',
      description: 'Professional haircuts, styling, and blowouts with premium products',
      image: Featured1,
      price: 'From $45'
    },
    {
      title: 'Hair Coloring',
      description: 'Full color, highlights, balayage, and color correction services',
      image: Featured2,
      price: 'From $85'
    },
    {
      title: 'Facial Treatments',
      description: 'Deep conditioning, keratin treatments, and hair repair therapies',
      image: Featured3,
      price: 'From $65'
    },
    {
      title: 'Bridal & Special Events',
      description: 'Elegant updos, styling, and makeup for your special occasions',
      image: Featured4,
      price: 'From $120'
    },
    {
      title: 'Nail Services',
      description: 'Manicures, pedicures, gel polish, and nail art designs',
      image: Featured5,
      price: 'From $35'
    },
    {
      title: 'Makeup Services',
      description: 'Professional makeup application for events and special occasions',
      image: Featured1,
      price: 'From $75'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular treatments designed to enhance your natural beauty 
            and promote overall wellness.
          </p>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <button className="text-rose-500 hover:text-rose-600 font-semibold transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;