import React from 'react';
import { FiCheckCircle, FiClock, FiShield } from 'react-icons/fi';

const EmergencyStatus = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mt-6">
      <h3 className="text-lg font-bold text-slate-800 mb-6">Rescue Status</h3>
      
      <div className="relative border-l-2 border-slate-200 ml-3 space-y-8">
        
        <div className="relative pl-8">
          <div className="absolute -left-[17px] bg-green-500 text-white rounded-full p-1 border-4 border-white">
            <FiCheckCircle className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-slate-800">SOS Signal Sent</h4>
          <p className="text-sm text-slate-500">Live GPS location and Digital ID transmitted.</p>
        </div>

        <div className="relative pl-8">
          <div className="absolute -left-[17px] bg-green-500 text-white rounded-full p-1 border-4 border-white">
            <FiCheckCircle className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-slate-800">Local Authorities Notified</h4>
          <p className="text-sm text-slate-500">Nearest police station (Central Station) alerted.</p>
        </div>

        <div className="relative pl-8">
          <div className="absolute -left-[17px] bg-amber-500 text-white rounded-full p-1 border-4 border-white animate-pulse">
            <FiClock className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-slate-800">Dispatching Help</h4>
          <p className="text-sm text-slate-500">Awaiting officer assignment and ETA...</p>
        </div>

        <div className="relative pl-8 opacity-50">
          <div className="absolute -left-[17px] bg-slate-300 text-white rounded-full p-1 border-4 border-white">
            <FiShield className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-slate-800">Help Arrived</h4>
          <p className="text-sm text-slate-500">Rescue team has reached your location.</p>
        </div>

      </div>
    </div>
  );
};

export default EmergencyStatus;