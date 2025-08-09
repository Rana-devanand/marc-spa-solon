"use client"
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from '../UI/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Experience luxury and rejuvenation at Marc Medi Spa. We provide world-class 
              treatments in a serene, professional environment.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="text-gray-400 hover:text-rose-400 cursor-pointer transition-colors" />
              <FaInstagram className="text-gray-400 hover:text-rose-400 cursor-pointer transition-colors" />
              <FaTwitter className="text-gray-400 hover:text-rose-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-rose-400 mr-3" />
                <span className="text-gray-400">
                  123 Wellness Street<br />
                  Beverly Hills, CA 90210
                </span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-rose-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-rose-400 mr-3" />
                <span className="text-gray-400">info@marcmedispa.com</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Marc Medi Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;