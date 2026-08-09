import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '60%', label: 'Faster Response Time' },
  { value: '24/7', label: 'AI Monitoring' },
  { value: 'Offline', label: 'PWA Support' },
  { value: '10+', label: 'Multilingual Support' }
];

const Statistics = () => {
  return (
    <section className="py-16 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-white/20">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-primary-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;