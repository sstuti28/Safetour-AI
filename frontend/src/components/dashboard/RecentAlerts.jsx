import React from 'react';
import { FiRadio, FiBell } from 'react-icons/fi';

const RecentAlerts = () => {
  const alerts = [
    { id: 1, type: 'Weather', message: 'Heavy rainfall predicted in your area in the next 4 hours. Avoid travel if possible.', time: '10 mins ago', severity: 'amber' },
    { id: 2, type: 'Safety', message: 'Road closure reported on NH-44 due to maintenance.', time: '2 hours ago', severity: 'blue' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <FiRadio className="text-primary-600" /> Government Alerts
        </h3>
        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">2 New</span>
      </div>
      
      <div className="divide-y divide-slate-100">
        {alerts.length === 0 ? (
          <div className="p-6 text-center text-slate-500">No active alerts in your area.</div>
        ) : (
          alerts.map((alert) => (
            <div key={alert.id} className="p-4 hover:bg-slate-50 transition flex gap-4 items-start">
              <div className={`mt-1 p-2 rounded-full ${
                alert.severity === 'amber' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
              }`}>
                <FiBell className="text-sm" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{alert.type} Alert</p>
                <p className="text-sm text-slate-600 mt-1">{alert.message}</p>
                <p className="text-xs text-slate-400 mt-2">{alert.time}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentAlerts;