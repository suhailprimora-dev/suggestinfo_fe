import React from 'react';
import { X } from 'lucide-react';

export function ConsultationFormPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-sm max-w-[800px] w-full p-8 relative shadow-2xl">
        {/* Close button with circular background positioned slightly outside the modal */}
        <button 
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-[#4a6b8c] text-white rounded-full p-1 hover:bg-[#344f66] transition-colors shadow-md"
        >
          <X size={20} />
        </button>

        <h2 className="text-[#4a6b8c] text-3xl md:text-[32px] font-light mb-8 max-w-[90%] leading-tight">
          Fill Up the Form to Get Free SEO Audit and Consultation for Your Website!
        </h2>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              required
              className="w-full bg-[#f8f9fa] border border-gray-200 p-3.5 text-gray-700 placeholder-gray-500 rounded-sm focus:outline-none focus:border-[#4a6b8c] transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email" 
              required
              className="w-full bg-[#f8f9fa] border border-gray-200 p-3.5 text-gray-700 placeholder-gray-500 rounded-sm focus:outline-none focus:border-[#4a6b8c] transition-colors"
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              required
              className="w-full bg-[#f8f9fa] border border-gray-200 p-3.5 text-gray-700 placeholder-gray-500 rounded-sm focus:outline-none focus:border-[#4a6b8c] transition-colors"
            />
            <input 
              type="text" 
              placeholder="City" 
              required
              className="w-full bg-[#f8f9fa] border border-gray-200 p-3.5 text-gray-700 placeholder-gray-500 rounded-sm focus:outline-none focus:border-[#4a6b8c] transition-colors"
            />
            <input 
              type="text" 
              placeholder="Company Name" 
              className="w-full bg-[#f8f9fa] border border-gray-200 p-3.5 text-gray-700 placeholder-gray-500 rounded-sm focus:outline-none focus:border-[#4a6b8c] transition-colors md:col-span-1"
            />
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="bg-[#333333] text-white px-8 py-3.5 text-[15px] rounded-sm font-semibold tracking-wide hover:bg-black transition-colors"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
