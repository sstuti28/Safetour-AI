import React from 'react';
import { FiUserPlus, FiPhone, FiTrash2 } from 'react-icons/fi';

const EmergencyContactsList = () => {
  const contacts = [
    { id: 1, name: 'Anjali Sharma', relation: 'Spouse', phone: '+91 98765 43210' },
    { id: 2, name: 'Rajesh Kumar', relation: 'Brother', phone: '+91 87654 32109' }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-slate-800">Emergency Contacts</h3>
          <p className="text-xs text-slate-500 mt-1">These people receive live tracking links during an SOS.</p>
        </div>
        <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition">
          <FiUserPlus /> Add New
        </button>
      </div>

      <div className="space-y-3">
        {contacts.map(contact => (
          <div key={contact.id} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-blue-200 transition">
            <div>
              <p className="font-bold text-slate-800">{contact.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-bold uppercase bg-slate-200 text-slate-600 px-2 py-0.5 rounded">{contact.relation}</span>
                <span className="text-xs text-slate-500 flex items-center gap-1"><FiPhone className="text-[10px]" /> {contact.phone}</span>
              </div>
            </div>
            <button className="text-slate-400 hover:text-red-500 p-2 transition">
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>

      {contacts.length < 3 && (
        <p className="text-xs text-amber-600 mt-4 font-medium text-center">
          You can add {3 - contacts.length} more contact(s).
        </p>
      )}
    </div>
  );
};

export default EmergencyContactsList;