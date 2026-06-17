import React from 'react';
import { Phone } from 'lucide-react';

export function ContactButton({ className = '' }) {
  return (
    <a 
      href="/contact"
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#34c6b3] to-[#b1d953] text-black px-8 py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      <Phone size={18} className="fill-black text-black" />
      <span className="text-[16px]">Contact Us</span>
    </a>
  );
}
