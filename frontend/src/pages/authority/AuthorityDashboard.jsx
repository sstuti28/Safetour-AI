import React from 'react';
import TouristHeatmap from '../../components/authority/TouristHeatmap';
import SOSAlertsList from '../../components/authority/SOSAlertsList';
import BroadcastAlert from '../../components/authority/BroadcastAlert';
import { FiUsers, FiActivity, FiCheckCircle } from 'react-icons/fi';

const AuthorityDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Command Center</h1>
        <p className="text-slate-500 text-sm">NDMA & Police Centralized Monitoring System</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><FiUsers className="text-xl" /></div>
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Tourists</p>
            <h3 className="text-2xl font-black text-slate-800">12,450</h3>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-red-100 text-red-600 rounded-lg animate-pulse"><FiActivity className="text-xl" /></div>
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active SOS</p>
            <h3 className="text-2xl font-black text-slate-800">02</h3>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-green-100 text-green-600 rounded-lg"><FiCheckCircle className="text-xl" /></div>
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Resolved Today</p>
            <h3 className="text-2xl font-black text-slate-800">47</h3>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Map & Broadcast (Left & Center) */}
        <div className="lg:col-span-2 space-y-6">
          <TouristHeatmap />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BroadcastAlert />
            
            {/* System Logs / Analytics */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
               <h3 className="font-bold text-slate-800 mb-4">System Analytics</h3>
               <div className="space-y-4">
                 <div>
                   <div className="flex justify-between text-xs mb-1">
                     <span className="text-slate-500">Network Stability</span>
                     <span className="font-bold text-green-600">99.8%</span>
                   </div>
                   <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full w-[99.8%]"></div></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-xs mb-1">
                     <span className="text-slate-500">AI Prediction Accuracy</span>
                     <span className="font-bold text-blue-600">94.2%</span>
                   </div>
                   <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full w-[94.2%]"></div></div>
                 </div>
                 <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-700">
                    <strong className="block mb-1">AI Insight:</strong>
                    Anomaly detected in crowd density near Red Fort. Suggest deploying local patrols.
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar (SOS Queue) */}
        <div>
          <SOSAlertsList />
        </div>

      </div>
    </div>
  );
};

export default AuthorityDashboard;