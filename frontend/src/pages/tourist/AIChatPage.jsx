import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from '../../components/chat/ChatMessage';
import ChatInput from '../../components/chat/ChatInput';
import { FiShield } from 'react-icons/fi';

const AIChatPage = () => {
  const messagesEndRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Initial Greeting from AI
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I am your SafeTour AI Assistant. I can help you with:\n• Emergency translations\n• Locating nearby hospitals or police\n• Safety guidelines for your current location\n\nHow can I assist you today in Manali?",
      actions: ["Where is the nearest hospital?", "Translate 'I need help' to Hindi", "Is Rohtang Pass safe today?"]
    }
  ]);

  // Auto-scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text) => {
    // 1. Add user message to UI
    const newUserMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setIsLoading(true);

    // 2. Simulate AI response (Later: Replace with FastAPI/OpenAI/Gemini call)
    setTimeout(() => {
      let aiResponseText = "I'm analyzing your request...";
      let aiActions = [];

      // Simple mock logic for Hackathon demo purposes until backend is ready
      const lowerText = text.toLowerCase();
      if (lowerText.includes('hospital') || lowerText.includes('medical')) {
        aiResponseText = "The nearest hospital is **Manali Civil Hospital**, located 2.4 km away from your current location.\n\nPhone: +91 1902 252 378\nDirections: Head south on Mall Road.";
        aiActions = ["Open in Maps", "Call Hospital", "Trigger Medical SOS"];
      } else if (lowerText.includes('translate')) {
        aiResponseText = "Here are some helpful translations in Hindi:\n\n• I need help -> 'Mujhe madad chahiye' (मुझे मदद चाहिए)\n• Call the police -> 'Police ko bulao' (पुलिस को बुलाओ)\n• Where is the hospital? -> 'Hospital kahan hai?' (अस्पताल कहाँ है?)";
        aiActions = ["Play Audio", "Translate more phrases"];
      } else if (lowerText.includes('rohtang') || lowerText.includes('safe')) {
        aiResponseText = "According to NDMA and local weather data, Rohtang Pass is currently experiencing light rainfall. The route is **open but requires caution**. Risk level is Moderate.\n\nI recommend delaying travel if rain gets heavier.";
        aiActions = ["View Live Map", "Check Detailed Weather"];
      } else {
        aiResponseText = "I understand. As an AI, I am recording this query. If you feel unsafe at any moment, please do not hesitate to use the large red SOS button on your dashboard.";
        aiActions = ["Contact Tourist Helpdesk"];
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiResponseText,
        actions: aiActions
      }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      
      {/* Header */}
      <div className="bg-slate-900 px-6 py-4 flex items-center justify-between z-10 shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <FiShield className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight">AI Emergency Assistant</h1>
            <p className="text-blue-300 text-xs">Multilingual Support • Always Active</p>
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50/50 scroll-smooth">
        <div className="divide-y divide-slate-100">
          {messages.map(msg => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="p-4 bg-blue-50/50 flex gap-4">
               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                 <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                 </div>
               </div>
               <div className="flex-1 text-sm text-slate-500 py-1.5">SafeTour AI is thinking...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />

    </div>
  );
};

export default AIChatPage;