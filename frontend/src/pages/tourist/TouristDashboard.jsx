import React from 'react';
import { FiCloudRain, FiMapPin, FiActivity, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // <-- Added this
import { useAuth } from '../../context/AuthContext';
import StatCard from '../../components/dashboard/StatCard';
import RiskIndicator from '../../components/dashboard/RiskIndicator';

const TouristDashboard = () => {
  // Fallback to "Traveler" if AuthContext isn't fully ready yet
  const { user } = useAuth() || { user: { name: 'Traveler' } };

  return (
    <div className="space-y-6 max-w-7xl mx-auto py-6 px-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.name?.split(' ')[0] || 'Traveler'}! 👋</h1>
        <p className="text-gray-600 mt-1">Here is your safety overview and trip status.</p>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Current Location" value="Manali, HP" subtitle="GPS Active" icon={<FiMapPin />} color="text-blue-600" delay={0.1} />
        <StatCard title="Weather Forecast" value="18°C" subtitle="Light Rain" icon={<FiCloudRain />} color="text-cyan-600" delay={0.2} />
        <StatCard title="Heart Rate" value="72 bpm" subtitle="Wearable Synced" icon={<FiActivity />} color="text-green-600" delay={0.3} />
        <StatCard title="Emergency Contacts" value="3 Active" subtitle="Family & Police" icon={<FiPhoneCall />} color="text-orange-600" delay={0.4} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <RiskIndicator level="Moderate" location="Rohtang Pass Route" />
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Emergency Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Linked to Emergency Page */}
              <Link to="/dashboard/emergency" className="flex flex-col items-center justify-center p-6 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl transition-colors group">
                <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform shadow-sm">
                  SOS
                </div>
                <span className="font-bold text-red-700">Trigger Emergency</span>
                <span className="text-xs text-red-500 mt-1 text-center">Alert Police & Contacts</span>
              </Link>
              
              {/* Linked to Map Page */}
              <Link to="/dashboard/map" className="flex flex-col items-center justify-center p-6 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors group">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform shadow-sm">
                  <FiMapPin />
                </div>
                <span className="font-bold text-blue-700">Safe Route Map</span>
                <span className="text-xs text-blue-500 mt-1 text-center">View Danger Zones</span>
              </Link>

            </div>
          </div>
        </div>

        {/* Right Column (Alerts) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Govt Alerts (NDMA)</h3>
            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full animate-pulse">Live</span>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r-lg pr-2">
              <p className="text-sm font-bold text-gray-900">Heavy Rainfall Warning</p>
              <p className="text-xs text-gray-600 mt-1">Expected in Kullu region for next 24hrs.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg pr-2">
              <p className="text-sm font-bold text-gray-900">Landslide Alert</p>
              <p className="text-xs text-gray-600 mt-1">Route 3 blocked due to minor landslide.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TouristDashboard;