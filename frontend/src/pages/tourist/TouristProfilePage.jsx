import React from 'react';
import DigitalIDCard from '../../components/profile/DigitalIDCard';
import MedicalInfo from '../../components/profile/MedicalInfo';
import EmergencyContactsList from '../../components/profile/EmergencyContactsList';
import { useAuth } from '../../context/AuthContext';

const TouristProfilePage = () => {
  const { user } = useAuth() || { user: { name: 'Traveler' } };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">Digital Identity</h1>
        <p className="text-slate-500 mt-2">Manage your verification details, medical records, and SOS contacts.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: ID Card */}
        <div className="lg:col-span-1">
          <DigitalIDCard />
        </div>

        {/* Right Column: Information & Contacts */}
        <div className="lg:col-span-2 space-y-6">
          <MedicalInfo />
          <EmergencyContactsList />
          
          {/* Account Settings / Log Out Area (Optional visual) */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-slate-800">Account Security</h4>
              <p className="text-xs text-slate-500">Password last changed 30 days ago</p>
            </div>
            <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-bold transition">
              Update Password
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TouristProfilePage;