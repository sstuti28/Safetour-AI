import React from 'react';
import { FiActivity, FiEdit2 } from 'react-icons/fi';

const MedicalInfo = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <FiActivity className="text-red-500" /> Medical History
        </h3>
        <button className="text-slate-400 hover:text-blue-600 transition">
          <FiEdit2 />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <p className="text-xs text-slate-500 font-medium mb-1">Known Allergies</p>
          <p className="font-semibold text-slate-800">Penicillin, Peanuts</p>
        </div>
        
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <p className="text-xs text-slate-500 font-medium mb-1">Chronic Conditions</p>
          <p className="font-semibold text-slate-800">Asthma (Mild)</p>
        </div>

        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 md:col-span-2">
          <p className="text-xs text-slate-500 font-medium mb-1">Current Medications</p>
          <p className="font-semibold text-slate-800">Albuterol Inhaler (As needed)</p>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
        <p className="text-xs text-blue-700">
          <strong>Note:</strong> This information is securely encrypted and only shared with emergency responders when you trigger an SOS.
        </p>
      </div>
    </div>
  );
};

export default MedicalInfo;