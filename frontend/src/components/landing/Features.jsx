import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiMap, FiAlertTriangle, FiCloudRain, FiShield, FiUsers } from 'react-icons/fi';

const features = [
  { icon: <FiCpu />, title: 'AI Risk Prediction', desc: 'Analyzes weather, crime, and terrain data to predict potential dangers before they occur.' },
  { icon: <FiMap />, title: 'Safe Route Suggestion', desc: 'AI-driven dynamic routing avoiding disaster zones, protests, or crime hotspots.' },
  { icon: <FiAlertTriangle />, title: 'One-Click SOS', desc: 'Instant emergency alerts with live GPS tracking sent to nearby police, hospitals, and contacts.' },
  { icon: <FiCloudRain />, title: 'Real-time Disaster Alerts', desc: 'Integration with NDMA for instant warnings regarding floods, landslides, and extreme weather.' },
  { icon: <FiShield />, title: 'Digital Tourist ID', desc: 'Centralized authentication for quick identification and streamlined rescue coordination.' },
  { icon: <FiUsers />, title: 'Authority Dashboard', desc: 'Heatmaps, crowd monitoring, and centralized incident management for rescue teams.' },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Comprehensive Safety Infrastructure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our platform bridges the gap between tourists and local authorities using cutting-edge AI and geospatial technologies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;