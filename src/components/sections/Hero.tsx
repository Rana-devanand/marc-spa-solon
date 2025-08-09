"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Hero1 from "@/asssts/img/hero1.jpg";
import Hero2 from "@/asssts/img/hero3.jpg";
import Hero3 from "@/asssts/img/hero4.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Hero1,
      title: "Transform Your Style",
      subtitle: "Expert hair styling and coloring that brings out your natural beauty",
      cta: "Book Appointment",
    },
    {
      image: Hero2,
      title: "Professional Hair Care",
      subtitle: "Advanced treatments and cuts using premium products and techniques",
      cta: "View Services",
    },
    {
      image: Hero3,
      title: "Luxury Salon Experience",
      subtitle: "Relax and indulge in our premium hair and beauty services",
      cta: "Schedule Now",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide} 
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out"
            priority
            fill
          />
          {/* Enhanced dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Additional gradient overlay for even better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content - Aligned to left */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl text-white">
            <motion.h1
              key={`title-${currentSlide}`}
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.p
              key={`subtitle-${currentSlide}`}
              className="text-base md:text-lg lg:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-gray-100 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            
            <motion.div
              key={`cta-${currentSlide}`}
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-purple-500/25 min-w-[180px] md:min-w-[200px]">
                {slides[currentSlide].cta}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Buttons - Hidden on Mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20 group"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20 group"
        aria-label="Next slide"
      >
        <FaChevronRight size={20} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "w-8 h-3 bg-white shadow-lg" 
                : "w-3 h-3 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-8 lg:right-16 z-10 opacity-20">
        <div className="w-32 h-32 border border-white/30 rounded-full animate-pulse"></div>
        <div className="w-16 h-16 border border-white/20 rounded-full ml-8 -mt-8 animate-pulse animation-delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;