import React from 'react';
import { FiUser, FiCpu } from 'react-icons/fi';

const ChatMessage = ({ message }) => {
  const isAI = message.sender === 'ai';

  return (
    <div className={`flex gap-4 p-4 ${isAI ? 'bg-blue-50/50' : 'bg-white'}`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white ${isAI ? 'bg-blue-600' : 'bg-slate-800'}`}>
        {isAI ? <FiCpu size={16} /> : <FiUser size={16} />}
      </div>

      {/* Message Content */}
      <div className="flex-1 space-y-2">
        <p className="text-sm font-semibold text-slate-800">
          {isAI ? 'SafeTour AI Assistant' : 'You'}
        </p>
        <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">
          {message.text}
        </div>
        
        {/* Quick Action Buttons (If AI provides them) */}
        {isAI && message.actions && (
          <div className="flex flex-wrap gap-2 mt-3">
            {message.actions.map((action, idx) => (
              <button 
                key={idx}
                className="px-3 py-1.5 bg-white border border-blue-200 text-blue-700 text-xs font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
              >
                {action}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;