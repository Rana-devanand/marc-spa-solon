"use client"
import React, { useState } from "react";
import AnimationWrapper from "../Animations/animations";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { id: "all", name: "All", count: 12 },
    { id: "facial", name: "Facials", count: 4 },
    { id: "laser", name: "Laser Treatments", count: 3 },
    { id: "injectables", name: "Injectables", count: 3 },
    { id: "facility", name: "Our Facility", count: 2 },
  ];

  const galleryImages = [
    {
      id: 1,
      category: "facial",
      title: "HydraFacial Treatment",
      description: "Deep cleansing and hydrating facial treatment",
      image: "/images/gallery/facial-1.jpg",
      beforeAfter: true,
    },
    {
      id: 2,
      category: "laser",
      title: "Laser Hair Removal",
      description: "Professional laser hair removal session",
      image: "/images/gallery/laser-1.jpg",
      beforeAfter: false,
    },
    {
      id: 3,
      category: "injectables",
      title: "Botox Treatment",
      description: "Anti-aging botox injection procedure",
      image: "/images/gallery/botox-1.jpg",
      beforeAfter: true,
    },
    {
      id: 4,
      category: "facility",
      title: "Treatment Room",
      description: "Our luxurious and sterile treatment environment",
      image: "/images/gallery/facility-1.jpg",
      beforeAfter: false,
    },
    {
      id: 5,
      category: "facial",
      title: "Chemical Peel Results",
      description: "Before and after chemical peel treatment",
      image: "/images/gallery/facial-2.jpg",
      beforeAfter: true,
    },
    {
      id: 6,
      category: "laser",
      title: "Skin Resurfacing",
      description: "Laser skin resurfacing treatment results",
      image: "/images/gallery/laser-2.jpg",
      beforeAfter: true,
    },
    {
      id: 7,
      category: "injectables",
      title: "Dermal Fillers",
      description: "Lip enhancement with dermal fillers",
      image: "/images/gallery/fillers-1.jpg",
      beforeAfter: true,
    },
    {
      id: 8,
      category: "facility",
      title: "Reception Area",
      description: "Welcome to our modern spa facility",
      image: "/images/gallery/facility-2.jpg",
      beforeAfter: false,
    },
    {
      id: 9,
      category: "facial",
      title: "Microdermabrasion",
      description: "Professional microdermabrasion treatment",
      image: "/images/gallery/facial-3.jpg",
      beforeAfter: true,
    },
    {
      id: 10,
      category: "laser",
      title: "Tattoo Removal",
      description: "Safe and effective tattoo removal",
      image: "/images/gallery/laser-3.jpg",
      beforeAfter: true,
    },
    {
      id: 11,
      category: "injectables",
      title: "Face Contouring",
      description: "Facial contouring with injectable treatments",
      image: "/images/gallery/fillers-2.jpg",
      beforeAfter: true,
    },
    {
      id: 12,
      category: "facial",
      title: "Oxygen Facial",
      description: "Rejuvenating oxygen facial treatment",
      image: "/images/gallery/facial-4.jpg",
      beforeAfter: false,
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: any) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Treatment Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the amazing transformations and results our clients have
              achieved with our expert treatments
            </p>
          </div>
        </AnimationWrapper>

        {/* Category Filter */}
        <AnimationWrapper delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-rose-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-500 border border-gray-200"
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </AnimationWrapper>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <AnimationWrapper key={image.id} delay={index * 0.1}>
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                onClick={() => openLightbox(image)}
              >
                {/* Image Placeholder */}
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-rose-100 to-pink-100">
                  <div className="flex items-center justify-center">
                    <div className="text-6xl text-rose-300">
                      {image.category === "facial" && "🧴"}
                      {image.category === "laser" && "✨"}
                      {image.category === "injectables" && "💉"}
                      {image.category === "facility" && "🏥"}
                    </div>
                  </div>
                </div>

                {/* Before/After Badge */}
                {image.beforeAfter && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Before/After
                    </span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        {/* Call to Action */}
        <AnimationWrapper delay={0.8}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Ready to achieve your own amazing transformation?
            </p>
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
              Schedule Your Consultation
            </button>
          </div>
        </AnimationWrapper>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg p-8 text-center">
              <div className="text-8xl text-rose-300 mb-4">
                {lightboxImage === "facial" && "🧴"}
                {lightboxImage === "laser" && "✨"}
                {lightboxImage === "injectables" && "💉"}
                {lightboxImage === "facility" && "🏥"}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {lightboxImage}
              </h3>
              <p className="text-gray-600">{lightboxImage}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
