import React from 'react';
import { FiSun, FiWind, FiDroplet } from 'react-icons/fi';

const WeatherWidget = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-primary-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
      
      <div className="flex justify-between items-start z-10 relative">
        <div>
          <p className="text-blue-100 font-medium mb-1">Current Location</p>
          <h3 className="text-2xl font-bold">New Delhi, India</h3>
          <p className="text-4xl font-black mt-4">32°C</p>
          <p className="text-blue-100 mt-1 capitalize">Sunny & Clear</p>
        </div>
        <FiSun className="text-6xl text-yellow-300 drop-shadow-md" />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 border-t border-blue-400/30 pt-4 z-10 relative">
        <div className="flex items-center gap-2">
          <FiWind className="text-blue-200" />
          <span className="text-sm font-medium">12 km/h Wind</span>
        </div>
        <div className="flex items-center gap-2">
          <FiDroplet className="text-blue-200" />
          <span className="text-sm font-medium">45% Humidity</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;