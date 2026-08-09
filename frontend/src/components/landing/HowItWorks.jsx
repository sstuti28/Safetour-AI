import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Register & Plan', desc: 'Tourists register generating a Digital ID. AI analyzes their planned itinerary against current risk databases.' },
  { num: '02', title: 'Active Monitoring', desc: 'During the trip, GPS and weather APIs continuously monitor surroundings. If a risk is detected, preemptive warnings are sent.' },
  { num: '03', title: 'Emergency Response', desc: 'In case of danger, the SOS module activates instantly, sharing coordinates with the nearest authorities and offline caching.' },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">How SafeTour AI Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From trip planning to emergency extraction, we protect you at every step.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center text-2xl font-bold text-primary-600 shadow-md mb-6">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;