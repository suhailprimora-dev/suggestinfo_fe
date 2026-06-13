import React from 'react';
import { MessageSquare } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function ContactSection({ title, subtitle }) {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 relative">
          {/* Massive green drop shadow */}
          <div className="absolute -inset-10 bg-[#4ade80]/15 blur-[100px] rounded-[60px] z-0"></div>

          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>

        {/* Right Side: Text & Contact */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <MessageSquare className="text-[#c7c6d3] w-12 h-12 mb-6" strokeWidth={1} />
          <h2 className="text-[36px] md:text-[45px] font-black leading-[1.15] mb-6 bg-gradient-to-r from-[#3cc994] to-[#86c95e] text-transparent bg-clip-text">
            {title}
          </h2>

          {subtitle && (
            <p className="text-[#6b6c8a] text-[18px] mb-12 font-medium">
              {subtitle}
            </p>
          )}

          <div className="flex flex-col gap-6">
            <a href="tel:+971582767237" className="text-[28px] md:text-[32px] font-black text-black hover:text-[#44c391] transition-colors tracking-wide">
              +971 58 276 7237
            </a>
            <a href="tel:+971524828215" className="text-[28px] md:text-[32px] font-black text-black hover:text-[#44c391] transition-colors tracking-wide">
              +971 52 482 8215
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
