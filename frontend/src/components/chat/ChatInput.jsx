import React, { useState } from 'react';
import { FiSend, FiMic } from 'react-icons/fi';

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="bg-white border-t border-slate-200 p-4">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto relative flex items-center gap-2">
        
        {/* Mic Button for Hackathon Voice-to-Text demo later */}
        <button 
          type="button"
          className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
          title="Voice Input"
        >
          <FiMic size={20} />
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for medical help, safe routes, or translation..."
          className="flex-1 bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3 shadow-inner"
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className={`p-3 rounded-full flex items-center justify-center transition-colors ${
            input.trim() && !isLoading 
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          <FiSend size={18} className="ml-1" />
        </button>
      </form>
      <div className="text-center mt-2">
        <span className="text-[10px] text-slate-400">AI can make mistakes. In severe emergencies, please use the SOS button immediately.</span>
      </div>
    </div>
  );
};

export default ChatInput;