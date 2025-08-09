"use client"
import React, { useState, useEffect } from 'react';
import AnimationWrapper from '../Animations/animations';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      age: 34,
      treatment: "HydraFacial & Botox",
      rating: 5,
      text: "I've been coming to Marc Med Spa for over a year now and the results have been absolutely incredible. My skin has never looked better, and the staff makes me feel so comfortable and welcomed every visit.",
      location: "Beverly Hills, CA",
      beforeAfter: "10 years younger",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Thompson",
      age: 42,
      treatment: "Laser Hair Removal",
      rating: 5,
      text: "As a busy professional, I needed a solution that worked with my schedule. The laser hair removal treatments have been life-changing - no more daily shaving! The team is professional and the results speak for themselves.",
      location: "Manhattan, NY",
      beforeAfter: "Smooth & confident",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "Sarah Chen",
      age: 29,
      treatment: "Chemical Peel Series",
      rating: 5,
      text: "After struggling with acne scars for years, the chemical peel series has completely transformed my skin. I can't believe the difference! The consultation was thorough and the treatment plan was perfect for my needs.",
      location: "San Francisco, CA",
      beforeAfter: "Clear, glowing skin",
      avatar: "👩‍🎓"
    },
    {
      id: 4,
      name: "Robert Johnson",
      age: 38,
      treatment: "CoolSculpting",
      rating: 5,
      text: "I was skeptical at first, but CoolSculpting really works! The team explained everything clearly, and the results exceeded my expectations. Finally achieved the body contour I've been working towards.",
      location: "Miami, FL",
      beforeAfter: "Sculpted confidence",
      avatar: "👨‍🏫"
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      age: 31,
      treatment: "Dermal Fillers",
      rating: 5,
      text: "The lip enhancement and cheek fillers look so natural! Dr. Chen has an amazing artistic eye. I get compliments constantly and people can't figure out what's different - they just say I look refreshed.",
      location: "Austin, TX",
      beforeAfter: "Natural enhancement",
      avatar: "👩‍🎨"
    },
    {
      id: 6,
      name: "David Park",
      age: 45,
      treatment: "Skin Tightening",
      rating: 5,
      text: "The non-invasive skin tightening treatment was exactly what I needed. No downtime, amazing results, and the staff made the whole experience comfortable and professional. Highly recommend!",
      location: "Seattle, WA",
      beforeAfter: "Firmer, younger look",
      avatar: "👨‍⚕️"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating : number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their transformative experiences.
            </p>
          </div>
        </AnimationWrapper>

        {/* Main Testimonial Slider */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <AnimationWrapper>
                    <div className="max-w-4xl mx-auto">
                      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-8">
                          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-full p-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                            </svg>
                          </div>
                        </div>

                        <div className="text-center pt-8">
                          {/* Avatar */}
                          <div className="text-6xl mb-4">{testimonial.avatar}</div>
                          
                          {/* Rating */}
                          <div className="flex justify-center mb-6">
                            {renderStars(testimonial.rating)}
                          </div>

                          {/* Testimonial Text */}
                          <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                            "{testimonial.text}"
                          </blockquote>

                          {/* Client Info */}
                          <div className="border-t border-gray-200 pt-6">
                            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                              <div className="text-center md:text-left">
                                <h4 className="text-lg font-bold text-gray-900">
                                  {testimonial.name}
                                </h4>
                                <p className="text-gray-600">
                                  Age {testimonial.age} • {testimonial.location}
                                </p>
                              </div>
                              
                              <div className="hidden md:block w-px h-16 bg-gray-300"></div>
                              
                              <div className="text-center md:text-left">
                                <h5 className="font-semibold text-rose-600 mb-1">
                                  Treatment: {testimonial.treatment}
                                </h5>
                                <p className="text-gray-600">
                                  Result: {testimonial.beforeAfter}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimationWrapper>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-rose-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <AnimationWrapper delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">3+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </AnimationWrapper>

        {/* Call to Action */}
        <AnimationWrapper delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Ready to join our community of satisfied clients?
            </p>
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
              Book Your Transformation Today
            </button>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Testimonials;