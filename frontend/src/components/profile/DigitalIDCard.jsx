import React from 'react';
import { FiShield, FiDownload } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

const DigitalIDCard = () => {
  const { user } = useAuth() || { user: { name: 'Rahul Sharma' } };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800">Digital Tourist ID</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1">
          <FiDownload /> Download
        </button>
      </div>

      {/* The ID Card */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-1 shadow-xl relative overflow-hidden">
        {/* Hologram Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-xl"></div>
        
        <div className="border border-white/20 rounded-lg p-5 h-full relative z-10 backdrop-blur-sm">
          
          {/* Card Header */}
          <div className="flex justify-between items-start mb-6 border-b border-white/20 pb-4">
            <div className="flex items-center gap-2">
              <FiShield className="text-blue-400 text-2xl" />
              <div>
                <h4 className="text-white font-bold tracking-widest text-sm">SAFETOUR INDIA</h4>
                <p className="text-blue-300 text-[10px] uppercase tracking-wider">Verified Tourist Pass</p>
              </div>
            </div>
            {/* Mock QR Code space */}
            <div className="w-12 h-12 bg-white rounded p-1">
               <div className="w-full h-full border-4 border-slate-900 border-dashed"></div>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex gap-4 items-center">
            {/* User Photo Placeholder */}
            <div className="w-20 h-24 bg-slate-200 rounded-md border-2 border-white/50 flex items-center justify-center overflow-hidden">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'Rahul'}`} alt="Avatar" className="w-full h-full object-cover bg-blue-100" />
            </div>
            
            {/* Details */}
            <div className="text-white space-y-2 flex-1">
              <div>
                <p className="text-blue-300 text-[10px] uppercase tracking-wider">Full Name</p>
                <p className="font-bold text-lg">{user?.name || 'Rahul Sharma'}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-blue-300 text-[10px] uppercase tracking-wider">ID Number</p>
                  <p className="font-mono text-sm">IND-8472-X9</p>
                </div>
                <div>
                  <p className="text-blue-300 text-[10px] uppercase tracking-wider">Blood Group</p>
                  <p className="font-bold text-red-400 text-sm">O+ (Positive)</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <p className="text-xs text-slate-500 mt-4 text-center">
        This ID is linked to NDMA and local Police. Displaying this QR code gives authorities instant access to your emergency data.
      </p>
    </div>
  );
};

export default DigitalIDCard;