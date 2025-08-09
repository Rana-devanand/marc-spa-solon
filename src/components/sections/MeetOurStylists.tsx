"use client";
import React from "react";

// Type definitions
import type { StaticImageData } from "next/image";

interface Stylist {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  experience: string;
  image: string | StaticImageData;
  bio: string;
}

interface AnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
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

// Card component
const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};


import Team1 from "@/asssts/img/team/team2.png";
import Team2 from "@/asssts/img/team/team1.jpg";
import Team3 from "@/asssts/img/team/team3.jpg";

const MeetOurStylists: React.FC = () => {
  const stylists: Stylist[] = [
    {
      id: 1,
      name: "Priya Sharma",
      title: "Master Hair Stylist",
      specialties: [
        "Bridal Hair Styling",
        "Hair Coloring & Highlights",
        "Keratin Treatments",
      ],
      experience: "10+ years",
      image: Team1,
      bio: "Priya is our lead stylist specializing in traditional and contemporary hair styling. She has transformed thousands of looks with her artistic vision.",
    },
    {
      id: 4,
      name: "Amit Singh",
      title: "Bridal Specialist",
      specialties: ["Bridal Makeup", "Party Styling", "Hair Extensions"],
      experience: "6+ years",
      image: Team2,
      bio: "Amit specializes in creating perfect bridal looks and glamorous party styles that make every occasion memorable.",
    },
    {
      id: 5,
      name: "Raj Mehta",
      title: "Hair Treatment Expert",
      specialties: ["Hair Spa", "Scalp Treatment", "Hair Restoration"],
      experience: "9+ years",
      image: Team3,
      bio: "Kavita focuses on hair health and restoration, helping clients achieve strong, beautiful hair through specialized treatments.",
    },
  ];

  const getStylistIcon = (title: string ): string  | StaticImageData => {
    const icons: Record<string, string> = {
      "Master Hair Stylist": "✂️",
      "Senior Hair Artist": "🎨",
      "Color Specialist": "🌈",
      "Bridal Specialist": "👰",
      "Hair Treatment Expert": "💆",
      "Style Consultant": "💡"
    };
    return icons[title] || "💇";
  };

  const handleBookStylist = (stylistName: string): void => {
    // Add your booking logic here
    console.log(`Book appointment with ${stylistName}`);
  };

  const handleViewAllTeam = (): void => {
    // Add navigation to full team page
    console.log("View all team members");
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
                Meet Our Expert Stylists
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our certified professionals are passionate about creating stunning looks 
                and making you feel confident and beautiful with every visit.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stylists.map((stylist: Stylist, index: number) => (
              <AnimationWrapper key={stylist.id} delay={index * 0.15}>
                <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <div className="h-64 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 flex items-center justify-center">
                      <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={typeof stylist.image === "string" ? stylist.image : stylist.image.src} 
                          alt={stylist.name} 
                          className="w-full h-full object-cover rounded-t-2xl"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating experience badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-amber-600 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {stylist.experience}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {stylist.name}
                      </h3>
                      <p className="text-amber-600 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-lg">
                          {/* {getStylistIcon(stylist.title)} */}
                          </span>
                        {stylist.title}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {stylist.bio}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-amber-500">⭐</span>
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stylist.specialties.map((specialty: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200 hover:bg-amber-100 transition-colors duration-200"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => handleBookStylist(stylist.name)}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      Book with {stylist.name.split(" ")[0]}
                    </button>
                  </div>
                </Card>
              </AnimationWrapper>
            ))}
          </div>

          <AnimationWrapper delay={0.8}>
            <div className="text-center mt-16">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-2xl font-bold text-gray-900">Why Choose Our Team?</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  All our stylists are certified professionals who continuously train in the latest 
                  techniques and trends. We're committed to excellence and your satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button 
                    onClick={handleViewAllTeam}
                    className="bg-white border-2 border-amber-500 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 font-semibold shadow-md"
                  >
                    View All Team Members
                  </button>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">✓</span>
                      Licensed Professionals
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">✓</span>
                      Continuous Training
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  );
};

export default MeetOurStylists;