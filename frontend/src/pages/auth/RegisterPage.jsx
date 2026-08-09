import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiPhone, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const [role, setRole] = useState('tourist');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate Registration Success
    alert('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl"
      >
        <div className="text-center">
          <FiShield className="mx-auto h-12 w-12 text-primary-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create an Account</h2>
          <p className="mt-2 text-sm text-gray-600">Join SafeTour AI for a safer journey</p>
        </div>

        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setRole('tourist')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'tourist' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Tourist
          </button>
          <button
            onClick={() => setRole('authority')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'authority' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Authority
          </button>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input type="text" required className="block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-lg border bg-gray-50 focus:ring-primary-500 focus:border-primary-500" placeholder="John Doe" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input type="email" required className="block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-lg border bg-gray-50 focus:ring-primary-500 focus:border-primary-500" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiPhone className="text-gray-400" />
              </div>
              <input type="tel" required className="block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-lg border bg-gray-50 focus:ring-primary-500 focus:border-primary-500" placeholder="+91 9876543210" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-400" />
              </div>
              <input type="password" required className="block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-lg border bg-gray-50 focus:ring-primary-500 focus:border-primary-500" placeholder="••••••••" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors mt-6"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
            Log in here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;