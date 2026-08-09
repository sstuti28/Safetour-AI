import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-700 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary-500 rounded-full opacity-50 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Safer Travel?</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Whether you are a tourist exploring new destinations or an authority ensuring public safety, join our platform today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register?role=tourist" className="px-8 py-4 bg-white text-primary-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                I am a Tourist
              </Link>
              <Link to="/register?role=authority" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition shadow-lg">
                Authority Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;