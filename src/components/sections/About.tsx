import React from 'react';
import AnimationWrapper from '../Animations/animations';
import Image from 'next/image';
import AboutImage from '@/asssts/img/hero1.jpg';

const About = () => {
  return (
    <>
     <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimationWrapper direction="left">
            <div className="relative">
              <Image
                src={AboutImage}
                alt="Marc Medi Spa Interior"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-500">10+</div>
                  <div className="text-gray-600">Years Experience</div>

              </div>
            </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper direction="right" delay={0.2}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Marc Medi Spa
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Marc Medi Spa has been a beacon of wellness and beauty for over a decade. 
                We combine cutting-edge medical aesthetics with the relaxing ambiance of 
                a luxury spa to provide our clients with transformative experiences.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of certified professionals is dedicated to helping you achieve 
                your aesthetic goals through personalized treatment plans and the latest 
                in non-invasive cosmetic procedures. We believe that beauty comes from 
                feeling confident and comfortable in your own skin.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Certified Professionals</h3>
                    <p className="text-gray-600 text-sm">Licensed and experienced specialists</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Latest Technology</h3>
                    <p className="text-gray-600 text-sm">State-of-the-art equipment and techniques</p>
                  </div>
                </div>
              </div>

              <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Learn More About Us
              </button>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;