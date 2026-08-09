import React from 'react';
import { FiShield, FiAlertCircle } from 'react-icons/fi';

const RiskIndicator = ({ level = 'Low', location = 'Current Area' }) => {
  const getRiskStyles = () => {
    switch (level) {
      case 'High': return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: 'text-red-500', bar: 'bg-red-500', width: 'w-11/12' };
      case 'Moderate': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', icon: 'text-amber-500', bar: 'bg-amber-500', width: 'w-1/2' };
      default: return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: 'text-green-500', bar: 'bg-green-500', width: 'w-1/5' };
    }
  };

  const styles = getRiskStyles();

  return (
    <div className={`rounded-2xl p-6 border ${styles.border} ${styles.bg} shadow-sm`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-800">AI Risk Assessment: {location}</h3>
        {level === 'Low' ? <FiShield className={`text-2xl ${styles.icon}`} /> : <FiAlertCircle className={`text-2xl ${styles.icon}`} />}
      </div>
      
      <div className="mb-2 flex justify-between items-end">
        <span className={`text-3xl font-black ${styles.text}`}>{level} Risk</span>
        <span className="text-sm font-medium text-slate-500">Live API</span>
      </div>
      
      <p className="text-sm text-slate-600 mb-4">
        {level === 'Low' 
          ? "Your current area is safe. No severe weather or security alerts detected." 
          : "Exercise caution. There are active alerts in your vicinity."}
      </p>

      {/* Risk Meter Bar */}
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div className={`${styles.bar} h-2.5 rounded-full ${styles.width} transition-all duration-1000`}></div>
      </div>
    </div>
  );
};

export default RiskIndicator;