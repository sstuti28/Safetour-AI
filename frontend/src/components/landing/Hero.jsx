import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMapPin, FiAlertCircle } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="relative bg-primary-50 overflow-hidden pt-20 pb-28 md:pt-32 md:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary-700 font-medium text-sm mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-600"></span>
            </span>
            Real-time SIH25002 Solution
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight"
          >
            Smart Tourist Safety & <br className="hidden md:block" />
            <span className="text-primary-600">Early Warning System</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            AI-powered platform predicting risks, monitoring tourist safety, and providing real-time alerts before, during, and after emergencies across India.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <FiMapPin /> Start Safe Journey
            </Link>
            <Link to="/sos-demo" className="w-full sm:w-auto px-8 py-4 bg-red-50 text-red-600 border border-red-200 rounded-lg font-semibold text-lg hover:bg-red-100 transition flex items-center justify-center gap-2">
              <FiAlertCircle /> Emergency SOS
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-300 opacity-20 blur-3xl"></div>
    </div>
  );
};

export default Hero;