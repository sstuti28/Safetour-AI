import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FiAlertTriangle, FiX } from 'react-icons/fi';

const SOSButton = ({ onTriggerSOS }) => {
  const [status, setStatus] = useState('idle'); // idle, countdown, active
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    let interval;
    if (status === 'countdown' && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (status === 'countdown' && timer === 0) {
      setStatus('active');
      onTriggerSOS(); // Call the parent function to execute the SOS API
    }
    return () => clearInterval(interval);
  }, [status, timer, onTriggerSOS]);

  const handlePress = () => {
    setStatus('countdown');
    setTimer(5);
  };

  const handleCancel = () => {
    setStatus('idle');
    setTimer(5);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <m.button
            key="idle"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePress}
            className="relative w-64 h-64 rounded-full bg-red-600 shadow-[0_0_50px_rgba(220,38,38,0.5)] flex flex-col items-center justify-center text-white border-8 border-red-200 hover:bg-red-700 transition-colors"
          >
            {/* Pulsing background effect */}
            <span className="absolute w-full h-full rounded-full bg-red-500 animate-ping opacity-20"></span>
            
            <FiAlertTriangle className="text-6xl mb-2" />
            <span className="text-4xl font-black tracking-widest">SOS</span>
            <span className="text-sm font-medium mt-2 opacity-80 uppercase tracking-widest">Tap for Help</span>
          </m.button>
        )}

        {status === 'countdown' && (
          <m.div
            key="countdown"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="w-64 h-64 rounded-full bg-amber-500 shadow-2xl flex flex-col items-center justify-center text-white border-8 border-amber-200"
          >
            <span className="text-6xl font-black mb-2">{timer}</span>
            <span className="text-sm font-bold uppercase text-amber-900 mb-4">Sending SOS...</span>
            <button 
              onClick={handleCancel}
              className="px-6 py-2 bg-white text-amber-600 rounded-full font-bold shadow-md hover:bg-slate-50 flex items-center gap-2"
            >
              <FiX /> Cancel
            </button>
          </m.div>
        )}

        {status === 'active' && (
          <m.div
            key="active"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-64 h-64 rounded-full bg-slate-900 shadow-[0_0_50px_rgba(15,23,42,0.5)] flex flex-col items-center justify-center text-white border-8 border-slate-700"
          >
            <span className="absolute w-full h-full rounded-full border-4 border-red-500 animate-ping opacity-50"></span>
            <FiAlertTriangle className="text-5xl text-red-500 mb-2 animate-pulse" />
            <span className="text-2xl font-black text-red-500">SOS ACTIVE</span>
            <span className="text-xs text-slate-400 mt-2 text-center px-4">Authorities have been notified</span>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SOSButton;