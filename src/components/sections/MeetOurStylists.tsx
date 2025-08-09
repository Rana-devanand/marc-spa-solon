import React from "react";
import AnimationWrapper from "../Animations/animations";
import Card from "../UI/Card";

const MeetOurStylists = () => {
  const stylists = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Master Aesthetician",
      specialties: [
        "Anti-aging treatments",
        "Chemical peels",
        "Microdermabrasion",
      ],
      experience: "8+ years",
      image: "/images/stylists/sarah.jpg",
      bio: "Sarah specializes in advanced skincare treatments and has helped thousands of clients achieve their skin goals.",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Medical Director",
      specialties: ["Botox", "Dermal fillers", "Laser treatments"],
      experience: "12+ years",
      image: "/images/stylists/michael.jpg",
      bio: "Dr. Chen brings extensive medical expertise to provide safe and effective cosmetic treatments.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Senior Aesthetician",
      specialties: ["Facials", "Skin analysis", "Wellness coaching"],
      experience: "6+ years",
      image: "/images/stylists/emily.jpg",
      bio: "Emily focuses on holistic skincare approaches and personalized treatment plans for optimal results.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals are dedicated to helping you achieve
              your aesthetic goals with the highest standards of care and
              expertise.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map((stylist, index) => (
            <AnimationWrapper key={stylist.id} delay={index * 0.2}>
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-rose-100 to-pink-100">
                    <div className="flex items-center justify-center text-6xl text-rose-300">
                      👩‍⚕️
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {stylist.name}
                    </h3>
                    <p className="text-rose-600 font-semibold mb-2">
                      {stylist.title}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {stylist.experience} experience
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {stylist.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {stylist.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-rose-50 text-rose-700 text-xs rounded-full border border-rose-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 font-semibold">
                    Book with {stylist.name.split(" ")[0]}
                  </button>
                </div>
              </Card>
            </AnimationWrapper>
          ))}
        </div>

        <AnimationWrapper delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              All our professionals are licensed and continuously trained in the
              latest techniques
            </p>
            <button className="bg-white border-2 border-rose-500 text-rose-500 px-8 py-3 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 font-semibold">
              View All Team Members
            </button>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default MeetOurStylists;
