import React from 'react';
import { FiShield, FiTwitter, FiFacebook, FiInstagram, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiShield className="text-primary-500 text-3xl" />
            <span className="font-bold text-2xl tracking-tight">SafeTour AI</span>
          </div>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Empowering tourists with AI-driven safety, real-time alerts, and seamless emergency response across India.
          </p>
          <div className="border-t border-gray-800 pt-8 flex justify-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} SafeTour AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;