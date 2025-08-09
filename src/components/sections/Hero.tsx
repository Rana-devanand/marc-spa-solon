"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Hero1 from "@/asssts/img/hero1.jpg";
import Hero2 from "@/asssts/img/hero2.jpg";
import Hero3 from "@/asssts/img/hero3.jpg";

const MotionDiv = dynamic(() => import("@/components/Animations/animations"), {
  ssr: false,
});
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Hero1,
      title: "Rejuvenate Your Beauty",
      subtitle: "Experience luxury treatments that refresh your body and soul",
      cta: "Book Consultation",
    },
    {
      image: Hero2,
      title: "Advanced Skincare Solutions",
      subtitle: "Professional treatments using the latest technology",
      cta: "Explore Services",
    },
    {
      image: Hero3,
      title: "Relax & Revitalize",
      subtitle: "Escape to tranquility in our luxurious spa environment",
      cta: "Schedule Now",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <MotionDiv key={currentSlide} className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-40" />
        </MotionDiv>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <MotionDiv
            key={`title-${currentSlide}`}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {slides[currentSlide].title}
          </MotionDiv>
          <MotionDiv
            key={`subtitle-${currentSlide}`}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            {slides[currentSlide].subtitle}
          </MotionDiv>
          <MotionDiv
            key={`cta-${currentSlide}`}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            {slides[currentSlide].cta}
          </MotionDiv>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rose-400 transition-colors z-20"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rose-400 transition-colors z-20"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
