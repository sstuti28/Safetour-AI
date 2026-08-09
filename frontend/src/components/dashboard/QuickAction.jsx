import React from 'react';
import { Link } from 'react-router-dom';
import { FiMap, FiAlertTriangle, FiMessageSquare, FiFileText } from 'react-icons/fi';

const QuickActions = () => {
  const actions = [
    { name: 'Safe Route Map', icon: FiMap, link: '/dashboard/map', color: 'bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white' },
    { name: 'Emergency SOS', icon: FiAlertTriangle, link: '/dashboard/emergency', color: 'bg-red-100 text-red-600 hover:bg-red-600 hover:text-white' },
    { name: 'AI Assistant', icon: FiMessageSquare, link: '/dashboard/ai-chat', color: 'bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white' },
    { name: 'Digital ID', icon: FiFileText, link: '/dashboard/profile', color: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-600 hover:text-white' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, idx) => (
          <Link 
            key={idx} 
            to={action.link}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 group ${action.color}`}
          >
            <action.icon className="text-3xl mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-center">{action.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;