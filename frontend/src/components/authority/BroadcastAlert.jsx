import React from 'react';
import { FiRadio, FiSend } from 'react-icons/fi';

const BroadcastAlert = () => {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6 text-white">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-4">
        <FiRadio className="text-blue-400 text-xl" />
        <h3 className="font-bold text-lg">Broadcast Warning</h3>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Target Zone</label>
          <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
            <option>All Active Tourists (National)</option>
            <option>Delhi NCR Region</option>
            <option>Northern Himalayas (HP, UK)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Alert Type & Severity</label>
          <div className="flex gap-2">
            <select className="w-1/2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Weather/Disaster</option>
              <option>Security/Crime</option>
              <option>Health/Medical</option>
            </select>
            <select className="w-1/2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-amber-500 font-bold focus:ring-blue-500 focus:border-blue-500">
              <option value="high">High (Red)</option>
              <option value="moderate">Moderate (Amber)</option>
              <option value="low">Info (Blue)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
          <textarea 
            rows="3" 
            placeholder="Type the emergency broadcast message here..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 placeholder-slate-600"
          ></textarea>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50">
          <FiSend /> Push to Tourist Devices
        </button>
      </form>
    </div>
  );
};

export default BroadcastAlert;