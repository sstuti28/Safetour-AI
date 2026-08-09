import React from 'react';

const StatCard = ({ title, value, subtitle, icon, color, delay }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <h3 className="text-2xl font-black text-slate-800">{value}</h3>
        </div>
        <div className={`p-3 rounded-xl bg-slate-50 ${color} text-xl`}>
          {icon}
        </div>
      </div>
      <div className="text-xs font-medium text-slate-400 bg-slate-50 inline-block px-2 py-1 rounded-md">
        {subtitle}
      </div>
    </div>
  );
};

export default StatCard;