import React, { useState } from 'react';
import SOSButton from '../../components/emergency/SOSButton';
import EmergencyStatus from '../../components/emergency/EmergencyStatus';
import NearbyServices from '../../components/emergency/NearbyServices';
import { FiInfo } from 'react-icons/fi';

const EmergencyPage = () => {
  const [isSOSActive, setIsSOSActive] = useState(false);

  const handleTriggerSOS = () => {
    // In production, this will:
    // 1. Get navigator.geolocation
    // 2. Make an Axios POST request to our FastAPI backend
    // 3. Emit a WebSocket event to the Government/Admin Dashboard
    console.log("CRITICAL: SOS Triggered!");
    setIsSOSActive(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">Emergency Hub</h1>
        <p className="text-slate-500 mt-2">Trigger an SOS to alert local authorities and your emergency contacts instantly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: SOS Action */}
        <div>
          <div className="bg-red-50 rounded-2xl border border-red-100 p-6 text-center shadow-inner">
            <SOSButton onTriggerSOS={handleTriggerSOS} />
            
            {!isSOSActive && (
              <div className="mt-4 flex items-start gap-2 text-left bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                <FiInfo className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600">
                  Pressing SOS will broadcast your live location, medical history, and profile to the nearest Police Control Room and notify your 3 emergency contacts.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Status & Services */}
        <div>
          <NearbyServices />
          <EmergencyStatus isActive={isSOSActive} />
        </div>

      </div>
    </div>
  );
};

export default EmergencyPage;