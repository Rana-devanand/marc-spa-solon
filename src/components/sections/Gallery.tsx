"use client"
import React, { useState } from "react";

// Type definitions
interface Category {
  id: string;
  name: string;
  count: number;
}

interface GalleryImage {
  id: number;
  category: string;
  title: string;
  description: string;
  beforeAfter: boolean;
}

interface AnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

// AnimationWrapper component for smooth animations
const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, delay = 0 }) => {
  return (
    <div 
      className="animate-fade-in-up"
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

const SalonGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const categories: Category[] = [
    { id: "all", name: "All", count: 16 },
    { id: "haircut", name: "Hair Cuts & Styling", count: 5 },
    { id: "coloring", name: "Hair Coloring", count: 4 },
    { id: "bridal", name: "Bridal & Party", count: 3 },
    { id: "treatment", name: "Hair Treatments", count: 2 },
    { id: "salon", name: "Our Salon", count: 2 },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      category: "haircut",
      title: "Modern Layered Cut",
      description: "Stylish layered haircut with perfect finishing",
      beforeAfter: true,
    },
    {
      id: 2,
      category: "coloring",
      title: "Balayage Highlights",
      description: "Beautiful balayage highlighting technique",
      beforeAfter: true,
    },
    {
      id: 3,
      category: "bridal",
      title: "Bridal Hair Styling",
      description: "Elegant bridal hairstyle with floral accessories",
      beforeAfter: false,
    },
    {
      id: 4,
      category: "Hair wash",
      title: "Hair Washing Area",
      description: "Comfortable and luxurious hair washing stations",
      beforeAfter: false,
    },
    {
      id: 5,
      category: "haircut",
      title: "Bob Cut Transformation",
      description: "Classic bob cut with modern styling",
      beforeAfter: true,
    },
    {
      id: 6,
      category: "coloring",
      title: "Ombre Hair Color",
      description: "Stunning ombre color transformation",
      beforeAfter: true,
    },
  ];

  const filteredImages: GalleryImage[] =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img: GalleryImage) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage): void => {
    setLightboxImage(image);
  };

  const closeLightbox = (): void => {
    setLightboxImage(null);
  };

  const getCategoryIcon = (category: string): string => {
    const icons: Record<string, string> = {
      haircut: "✂️",
      coloring: "🎨",
      bridal: "👰",
      treatment: "💆",
      salon: "🏪"
    };
    return icons[category] || "💇";
  };

  const handleCategoryClick = (categoryId: string): void => {
    setSelectedCategory(categoryId);
  };

  const handleImageClick = (image: GalleryImage): void => {
    openLightbox(image);
  };

  const handleLightboxBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  const handleBookAppointment = (): void => {
    // Add your booking logic here
    console.log("Book appointment clicked");
  };

  const handleCallNow = (): void => {
    // Add your call logic here
    window.open("tel:+919876543210");
  };

  const handleBookSimilarService = (service: GalleryImage): void => {
    // Add your service booking logic here
    console.log("Book similar service:", service.title);
  };

  return (
    <>
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>

      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Salon Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the artistry of our skilled stylists through stunning transformations 
                and see why we're the most trusted salon in the city
              </p>
            </div>
          </AnimationWrapper>

          {/* Category Filter */}
          <AnimationWrapper delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category: Category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600 border border-gray-200 hover:border-amber-200"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </AnimationWrapper>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image: GalleryImage, index: number) => (
              <AnimationWrapper key={image.id} delay={index * 0.05}>
                <div
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => handleImageClick(image)}
                >
                  {/* Consistent Image Container */}
                  <div className="relative w-full h-64 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                        {getCategoryIcon(image.category)}
                      </div>
                    </div>
                    
                    {/* Professional overlay pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
                  </div>

                  {/* Before/After Badge */}
                  {image.beforeAfter && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Before/After
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1 line-clamp-1">{image.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
            <div className="text-center mt-16 space-y-6">
              <p className="text-gray-600 text-lg">
                Ready for your own stunning transformation?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={handleBookAppointment}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
                >
                  Book Your Appointment
                </button>
                <button 
                  onClick={handleCallNow}
                  className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 font-semibold"
                >
                  Call Now: +91 98765 43210
                </button>
              </div>
            </div>
          </AnimationWrapper>
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={handleLightboxBackdropClick}
          >
            <div className="relative max-w-2xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close lightbox"
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

              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="h-80 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 flex items-center justify-center">
                  <div className="text-8xl">
                    {getCategoryIcon(lightboxImage.category)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {lightboxImage.title}
                    </h3>
                    {lightboxImage.beforeAfter && (
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Before/After
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {lightboxImage.description}
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button 
                      onClick={() => handleBookSimilarService(lightboxImage)}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-semibold"
                    >
                      Book Similar Service
                    </button>
                    <button 
                      onClick={closeLightbox}
                      className="border border-gray-300 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-50 transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SalonGallery;