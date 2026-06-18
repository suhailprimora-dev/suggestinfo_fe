import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ConsultationFormPopup({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-[4px]"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="relative w-full max-w-[650px] bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col z-10 border border-slate-100"
          >
            {/* Top decorative gradient bar */}
            <div className="h-2 w-full bg-gradient-to-r from-[#3cc994] via-[#179b9b] to-[#0a2e2c]" />

            {/* Close Button Inside */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-all z-10"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <div className="mb-10">
                <h2 className="text-[32px] md:text-[38px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3">
                  Let's Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3cc994] to-[#179b9b]">Traffic</span>
                </h2>
                <p className="text-slate-500 text-[17px] max-w-[90%] leading-relaxed font-medium">
                  Fill up the form to get a free SEO audit and expert consultation for your website.
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-bold text-slate-700 ml-1 tracking-wide uppercase">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      required
                      className="w-full bg-[#f8fafc] border border-slate-200 p-3.5 text-[15px] font-medium text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3cc994]/20 focus:border-[#3cc994] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-bold text-slate-700 ml-1 tracking-wide uppercase">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      required
                      className="w-full bg-[#f8fafc] border border-slate-200 p-3.5 text-[15px] font-medium text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3cc994]/20 focus:border-[#3cc994] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-bold text-slate-700 ml-1 tracking-wide uppercase">Phone Number <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      required
                      className="w-full bg-[#f8fafc] border border-slate-200 p-3.5 text-[15px] font-medium text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3cc994]/20 focus:border-[#3cc994] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-bold text-slate-700 ml-1 tracking-wide uppercase">City <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Dubai" 
                      required
                      className="w-full bg-[#f8fafc] border border-slate-200 p-3.5 text-[15px] font-medium text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3cc994]/20 focus:border-[#3cc994] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[14px] font-bold text-slate-700 ml-1 tracking-wide uppercase">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Company LLC" 
                      className="w-full bg-[#f8fafc] border border-slate-200 p-3.5 text-[15px] font-medium text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3cc994]/20 focus:border-[#3cc994] transition-all"
                    />
                  </div>
                </div>
                
                <div className="pt-8">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#3cc994] to-[#179b9b] hover:from-[#35b584] hover:to-[#148989] text-white px-8 py-4.5 rounded-xl font-extrabold text-[17px] tracking-wide shadow-lg shadow-[#3cc994]/30 hover:shadow-xl hover:shadow-[#3cc994]/40 transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Get My Free Audit
                  </button>
                  <p className="text-center text-[13px] font-medium text-slate-500 mt-5 flex items-center justify-center gap-1.5">
                    <CheckCircle size={15} className="text-[#3cc994]" /> We respect your privacy. No spam.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
