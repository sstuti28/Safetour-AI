import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShield } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '#features' },
    { name: 'How It Works', path: '#how-it-works' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <FiShield className="text-primary-600 text-3xl" />
            <span className="font-bold text-xl text-primary-900 tracking-tight">SafeTour AI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <Link to="/login" className="text-primary-600 font-medium hover:text-primary-700">Login</Link>
              <Link to="/register" className="bg-primary-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary-600 focus:outline-none text-2xl">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md">
                  {link.name}
                </a>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-4 px-3">
                <Link to="/login" className="text-center bg-gray-100 text-gray-800 px-4 py-2 rounded-md font-medium">Login</Link>
                <Link to="/register" className="text-center bg-primary-600 text-white px-4 py-2 rounded-md font-medium">Sign Up</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;