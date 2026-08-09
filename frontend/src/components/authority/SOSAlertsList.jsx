import React from 'react';
import { FiAlertTriangle, FiMapPin, FiPhone } from 'react-icons/fi';

const SOSAlertsList = () => {
  const activeSOS = [
    { id: 'SOS-992', name: 'Rahul Sharma', location: 'Connaught Place', time: '2 mins ago', type: 'Medical', distance: '1.2 km' },
    { id: 'SOS-993', name: 'Priya Patel', location: 'Red Fort Entry', time: '5 mins ago', type: 'Security', distance: '3.4 km' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <FiAlertTriangle className="text-red-500" /> Active Emergencies
        </h3>
        <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full animate-pulse">2 Active</span>
      </div>

      <div className="space-y-4">
        {activeSOS.map((sos) => (
          <div key={sos.id} className="border border-red-200 bg-red-50 p-4 rounded-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-md mr-2">{sos.id}</span>
                <span className="text-xs font-semibold text-slate-500">{sos.time}</span>
              </div>
              <span className="text-xs font-bold text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">{sos.type}</span>
            </div>

            <h4 className="font-bold text-slate-900 text-lg">{sos.name}</h4>
            
            <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
              <span className="flex items-center gap-1"><FiMapPin /> {sos.location}</span>
              <span className="font-semibold text-blue-600">{sos.distance} away</span>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 rounded-lg transition">
                Dispatch Unit
              </button>
              <button className="px-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg transition">
                <FiPhone />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SOSAlertsList;