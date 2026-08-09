import React from 'react';
import { FiSearch, FiAlertTriangle, FiNavigation, FiInfo } from 'react-icons/fi';

const MapSidebar = () => {
  return (
    <div className="w-full md:w-96 bg-white h-full shadow-xl flex flex-col z-10 relative border-r border-slate-200">
      <div className="p-6 bg-primary-600 text-white">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FiNavigation /> Safe Route AI
        </h2>
        <p className="text-primary-100 text-sm mt-1">Real-time risk assessment active</p>
      </div>

      <div className="p-6 flex-grow overflow-y-auto">
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Where are you heading?</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-slate-400" />
            </div>
            {/* Standard Input instead of Google Autocomplete */}
            <input
              type="text"
              placeholder="Search destination (Demo)..."
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
            <FiAlertTriangle className="text-amber-500" /> Nearby Alerts
          </h3>
          
          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="text-sm font-medium text-red-800">Flood Warning</p>
            <p className="text-xs text-red-600 mt-1">Yamuna flood plains. AI suggests avoiding Route A.</p>
          </div>

          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
            <p className="text-sm font-medium text-amber-800">High Crowd Density</p>
            <p className="text-xs text-amber-600 mt-1">Market area reported heavy footfall.</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex gap-3 items-start">
            <FiInfo className="text-primary-500 text-xl flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-600">
              Our AI automatically calculates routes that bypass reported crimes, extreme weather, and high-risk zones based on NDMA data.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-50 border-t border-slate-200">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-lg">
          <FiAlertTriangle /> SOS EMERGENCY
        </button>
      </div>
    </div>
  );
};

export default MapSidebar;