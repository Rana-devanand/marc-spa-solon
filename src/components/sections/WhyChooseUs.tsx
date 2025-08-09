import React from 'react';
import AnimationWrapper from '../Animations/animations';
import { FaUserMd, FaGraduationCap, FaShieldAlt, FaHeart } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaUserMd className="text-3xl text-rose-500" />,
      title: 'Personalized Consultation',
      description: 'Every service begins with a thorough consultation to understand your unique needs and goals.'
    },
    {
      icon: <FaGraduationCap className="text-3xl text-rose-500" />,
      title: 'Expert Team',
      description: 'Our experienced team has received both local and international training in the latest techniques.'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-rose-500" />,
      title: 'High Hygiene Standards',
      description: 'We maintain the highest standards of cleanliness and provide private treatment areas for your comfort.'
    },
    {
      icon: <FaHeart className="text-3xl text-rose-500" />,
      title: 'Friendly Atmosphere',
      description: 'Our welcoming environment is designed to make you feel at home from the moment you arrive.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why You'll Love It Here
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Marc Medi Spa, we're committed to providing an exceptional experience 
            that goes beyond just treatments.
          </p>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;