import React from 'react';
import { FiPhoneCall, FiMapPin } from 'react-icons/fi';

const NearbyServices = () => {
  const services = [
    { name: "Central Police Station", distance: "1.2 km", type: "police", phone: "100" },
    { name: "City General Hospital", distance: "2.5 km", type: "hospital", phone: "108" },
    { name: "Tourist Help Desk", distance: "3.0 km", type: "help", phone: "1363" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mt-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Nearby Emergency Services</h3>
      <div className="space-y-4">
        {services.map((service, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg text-white ${
                service.type === 'police' ? 'bg-blue-600' : 
                service.type === 'hospital' ? 'bg-red-500' : 'bg-amber-500'
              }`}>
                <FiMapPin />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">{service.name}</h4>
                <p className="text-xs text-slate-500">{service.distance} away</p>
              </div>
            </div>
            <a href={`tel:${service.phone}`} className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 hover:bg-green-200 transition rounded-lg font-medium text-sm">
              <FiPhoneCall /> {service.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyServices;