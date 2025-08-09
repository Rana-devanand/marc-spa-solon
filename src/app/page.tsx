import React from 'react';
import Layout from '../components/layouts/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import FeaturedServices from '../components/sections/FeaturedServices';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import MeetOurStylists from '../components/sections/MeetOurStylists';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import BookNow from '../components/sections/BookNow';

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Featured Services Section */}
      <FeaturedServices />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Meet Our Stylists Section */}
      <MeetOurStylists />
      
      {/* Gallery Section */}
      <Gallery />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Book Now Section */}
      <BookNow />
    </Layout>
  );
};

export default HomePage;