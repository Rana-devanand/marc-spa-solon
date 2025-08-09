import React, { useState } from 'react';
import Layout from "@/components/layouts/Layout";
import AnimationWrapper from "@/components/Animations/animations";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";

const ReviewsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showWriteReview, setShowWriteReview] = useState(false);

  const filters = [
    { id: 'all', name: 'All Reviews', count: 24 },
    { id: '5', name: '5 Stars', count: 18 },
    { id: '4', name: '4 Stars', count: 5 },
    { id: '3', name: '3 Stars', count: 1 },
    { id: 'recent', name: 'Most Recent', count: 24 }
  ];

  const reviews = [
    {
      id: 1,
      name: "Jennifer Martinez",
      avatar: "👩‍💼",
      rating: 5,
      date: "2024-08-05",
      treatment: "HydraFacial & Botox",
      title: "Absolutely Amazing Results!",
      text: "I've been coming to Marc Med Spa for over a year now and the results have been absolutely incredible. My skin has never looked better, and the staff makes me feel so comfortable and welcomed every visit. Dr. Chen is a true artist with injectables - my Botox looks completely natural. The HydraFacial left my skin glowing for weeks. I get compliments constantly and people can't figure out what's different about me. The facility is luxurious and clean, and the entire team is professional yet warm. I wouldn't trust my face to anyone else!",
      helpful: 15,
      verified: true
    },
    {
      id: 2,
      name: "Michael Thompson",
      avatar: "👨‍💼",
      rating: 5,
      date: "2024-08-03",
      treatment: "Laser Hair Removal",
      title: "Life-Changing Treatment",
      text: "As a busy professional, I needed a solution that worked with my schedule. The laser hair removal treatments have been life-changing - no more daily shaving! The process was much more comfortable than I expected, and the results are incredible. After 6 sessions, I'm virtually hair-free in the treated areas. The team is knowledgeable and made me feel at ease throughout the entire process. The facility is modern and clean. Worth every penny!",
      helpful: 12,
      verified: true
    },
    {
      id: 3,
      name: "Sarah Chen",
      avatar: "👩‍🎓",
      rating: 5,
      date: "2024-07-30",
      treatment: "Chemical Peel Series",
      title: "My Acne Scars Are Gone!",
      text: "After struggling with acne scars for years, the chemical peel series has completely transformed my skin. I can't believe the difference! The consultation was thorough and they created a perfect treatment plan for my specific needs. Sarah Johnson is incredibly knowledgeable and made sure I was comfortable throughout each session. My skin texture has improved dramatically, and my confidence has soared. I'm so grateful I found this place!",
      helpful: 9,
      verified: true
    },
    {
      id: 4,
      name: "Robert Johnson",
      avatar: "👨‍🏫",
      rating: 5,
      date: "2024-07-25",
      treatment: "CoolSculpting",
      title: "Better Than Expected Results",
      text: "I was skeptical about CoolSculpting at first, but the results exceeded my expectations. The team explained everything clearly and made sure I understood the process. The treatment itself was comfortable - I actually read a book during the session! After 3 months, I can see a significant difference in my problem areas. The staff followed up regularly to check on my progress. Professional service all around.",
      helpful: 8,
      verified: true
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      avatar: "👩‍🎨",
      rating: 5,
      date: "2024-07-20",
      treatment: "Dermal Fillers",
      title: "Natural, Beautiful Enhancement",
      text: "The lip enhancement and cheek fillers look so natural! Dr. Chen has an amazing artistic eye and really listened to what I wanted. I get compliments constantly and people can't figure out what's different - they just say I look refreshed and radiant. The procedure was virtually painless, and the results were immediate. The team provided excellent aftercare instructions and followed up to ensure I was healing well. I'm thrilled with my new look!",
      helpful: 11,
      verified: true
    },
    {
      id: 6,
      name: "David Park",
      avatar: "👨‍⚕️",
      rating: 5,
      date: "2024-07-15",
      treatment: "Skin Tightening",
      title: "Amazing Non-Invasive Results",
      text: "The non-invasive skin tightening treatment was exactly what I needed. No downtime, amazing results, and the staff made the whole experience comfortable and professional. I noticed improvements after just one session, and after the full series, my skin looks years younger. The technology is impressive and the team really knows what they're doing. Highly recommend for anyone looking to tighten loose skin without surgery.",
      helpful: 7,
      verified: true
    },
    {
      id: 7,
      name: "Lisa Wang",
      avatar: "👩‍💻",
      rating: 5,
      date: "2024-07-10",
      treatment: "Microneedling",
      title: "Skin Texture Completely Transformed",
      text: "After three microneedling sessions, my skin texture is completely transformed. The fine lines around my eyes are barely visible, and my overall complexion is so much smoother and brighter. Emily was fantastic - she explained every step and made sure I was comfortable throughout. The downtime was minimal, and the results keep improving. Best investment I've made in my skin!",
      helpful: 6,
      verified: true
    },
    {
      id: 8,
      name: "James Miller",
      avatar: "👨‍💼",
      rating: 4,
      date: "2024-07-05",
      treatment: "IPL Photofacial",
      title: "Good Results, Professional Service",
      text: "Had a great experience with the IPL photofacial. The treatment helped with my sun damage and uneven skin tone. Results were gradual but noticeable after a few weeks. The staff was professional and knowledgeable. Only minor complaint is that parking can be challenging, but the treatment quality makes up for it. Would recommend and will likely return for maintenance sessions.",
      helpful: 4,
      verified: true
    }
  ];

  const filteredReviews = selectedFilter === 'all' 
    ? reviews 
    : selectedFilter === 'recent'
    ? [...reviews].sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : reviews.filter(review => review.rating.toString() === selectedFilter);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(review => review.rating === rating).length;
    const percentage = (count / totalReviews) * 100;
    return { rating, count, percentage };
  });

  const renderStars = (rating: number) => {
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
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Client Reviews
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Read what our satisfied clients have to say about their transformative 
                experiences at Marc Med Spa.
              </p>
            </div>
          </AnimationWrapper>

          {/* Rating Overview */}
          <AnimationWrapper delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Overall Rating */}
              <Card className="text-center" variant="gradient">
                <div className="text-6xl font-bold text-rose-600 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(averageRating))}
                </div>
                <div className="text-gray-600">
                  Based on {totalReviews} reviews
                </div>
              </Card>

              {/* Rating Distribution */}
              <Card className="col-span-2">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Rating Breakdown</h3>
                <div className="space-y-3">
                  {ratingDistribution.map((item) => (
                    <div key={item.rating} className="flex items-center">
                      <div className="flex items-center w-20">
                        <span className="text-sm font-medium text-gray-700 mr-2">
                          {item.rating}
                        </span>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-700 w-12">
                        {item.count}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </AnimationWrapper>

          {/* Filters */}
          <AnimationWrapper delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-500 border border-gray-200 shadow-sm'
                  }`}
                >
                  {filter.name}
                  <span className="ml-2 text-sm opacity-75">({filter.count})</span>
                </button>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredReviews.map((review, index) => (
              <AnimationWrapper key={review.id} delay={index * 0.1}>
                <Card className="p-8" hover>
                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className="text-4xl">{review.avatar}</div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-gray-900 flex items-center">
                            {review.name}
                            {review.verified && (
                              <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Verified
                              </span>
                            )}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            Treatment: {review.treatment} • {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                      </div>

                      {/* Review Title */}
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {review.title}
                      </h4>

                      {/* Review Text */}
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {review.text}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <button className="flex items-center text-gray-500 hover:text-rose-500 transition-colors">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          Helpful ({review.helpful})
                        </button>
                        
                        <div className="text-sm text-gray-500">
                          {Math.floor(Math.random() * 30) + 1} days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimationWrapper>
            ))}
          </div>

          {/* Load More */}
          <AnimationWrapper delay={0.8}>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Reviews
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Share Your Experience
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Had a great experience at Marc Med Spa? We'd love to hear about it! 
              Your review helps others discover the quality care we provide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setShowWriteReview(!showWriteReview)}
              >
                Write a Review
              </Button>
              <Button variant="outline" size="lg">
                Book Your Experience
              </Button>
            </div>
          </AnimationWrapper>

          {/* Simple Review Form */}
          {showWriteReview && (
            <AnimationWrapper delay={0.2}>
              <Card className="mt-12 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Write Your Review</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Treatment Received
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500">
                        <option>Select treatment</option>
                        <option>HydraFacial</option>
                        <option>Botox</option>
                        <option>Dermal Fillers</option>
                        <option>Chemical Peel</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Rating
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} className="text-2xl text-gray-300 hover:text-yellow-400 transition-colors">
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Review Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="Summarize your experience"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Review
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                      placeholder="Tell us about your experience at Marc Med Spa..."
                    />
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowWriteReview(false)}
                    >
                      Cancel
                    </Button>
                    <Button>
                      Submit Review
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimationWrapper>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ReviewsPage;