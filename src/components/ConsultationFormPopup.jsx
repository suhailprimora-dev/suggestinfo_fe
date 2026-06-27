import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContact } from '../context/ContactContext';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const auditSchema = yup.object().shape({
  name: yup.string().required('Full Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email address'),
  phone: yup.string().required('Phone number is required').min(5, 'Phone number must be at least 5 characters long'),
  city: yup.string().required('City is required'),
  company_name: yup.string().optional(),
});

export function ConsultationFormPopup({ isOpen, onClose }) {
  const { loading, submitContactInquiry } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    company_name: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormErrors({});
    setFormData({ name: '', email: '', phone: '', city: '', company_name: '' });
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    try {
      await auditSchema.validate(formData, { abortEarly: false });
      
      const payload = {
        ...formData,
        service_interested: 'Free Audit / Consultation'
      };
      await submitContactInquiry(payload);
      toast.success("SEO Audit request submitted successfully!");
      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 4000);
    } catch (err) {
      if (err.name === 'ValidationError') {
        const errors = {};
        err.inner.forEach((validationError) => {
          errors[validationError.path] = validationError.message;
        });
        setFormErrors(errors);
        toast.error("Please fill in all required fields correctly.");
      } else {
        toast.error(err.message || "Failed to submit request.");
        console.error("Failed to submit audit request:", err);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
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
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-all z-10"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 px-8 text-center"
              >
                <CheckCircle className="text-[#3cc994] w-16 h-16 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted!</h3>
                <p className="text-slate-500 max-w-md">
                  Thank you for your request. We will get back to you with your free SEO audit and consultation shortly.
                </p>
              </motion.div>
            ) : (
              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="text-[32px] md:text-[38px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3">
                    Let's Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3cc994] to-[#179b9b]">Traffic</span>
                  </h2>
                  <p className="text-slate-500 text-[17px] max-w-[90%] leading-relaxed font-medium">
                    Fill up the form to get a free SEO audit and expert consultation for your website.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-[14px] font-bold text-slate-700 ml-1 tracking-wide uppercase">Full Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        disabled={loading}
                        className={`w-full bg-[#f8fafc] border ${formErrors.name ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-slate-200 focus:bg-white focus:border-[#3cc994] focus:ring-[#3cc994]/20'} p-3.5 text-[15px] font-medium text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-4 transition-all disabled:opacity-50`}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-[14px] font-bold text-slate-700 ml-1 tracking-wide uppercase">Email Address <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com" 
                        disabled={loading}
                        className={`w-full bg-[#f8fafc] border ${formErrors.email ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-slate-200 focus:bg-white focus:border-[#3cc994] focus:ring-[#3cc994]/20'} p-3.5 text-[15px] font-medium text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-4 transition-all disabled:opacity-50`}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-[14px] font-bold text-slate-700 ml-1 tracking-wide uppercase">Phone Number <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000" 
                        disabled={loading}
                        className={`w-full bg-[#f8fafc] border ${formErrors.phone ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-slate-200 focus:bg-white focus:border-[#3cc994] focus:ring-[#3cc994]/20'} p-3.5 text-[15px] font-medium text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-4 transition-all disabled:opacity-50`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* City */}
                    <div className="space-y-1.5">
                      <label className="text-[14px] font-bold text-slate-700 ml-1 tracking-wide uppercase">City <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Dubai" 
                        disabled={loading}
                        className={`w-full bg-[#f8fafc] border ${formErrors.city ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-slate-200 focus:bg-white focus:border-[#3cc994] focus:ring-[#3cc994]/20'} p-3.5 text-[15px] font-medium text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-4 transition-all disabled:opacity-50`}
                      />
                      {formErrors.city && (
                        <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{formErrors.city}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-[14px] font-bold text-slate-700 ml-1 tracking-wide uppercase">Company Name</label>
                      <input 
                        type="text" 
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleInputChange}
                        placeholder="Your Company LLC" 
                        disabled={loading}
                        className="w-full bg-[#f8fafc] border border-slate-200 p-3.5 text-[15px] font-medium text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3cc994]/20 focus:border-[#3cc994] transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#3cc994] to-[#179b9b] hover:from-[#35b584] hover:to-[#148989] text-white px-8 py-4.5 rounded-xl font-extrabold text-[17px] tracking-wide shadow-lg shadow-[#3cc994]/30 hover:shadow-xl hover:shadow-[#3cc994]/40 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Submitting...' : 'Get My Free Audit'}
                    </button>
                    <p className="text-center text-[13px] font-medium text-slate-500 mt-5 flex items-center justify-center gap-1.5">
                      <CheckCircle size={15} className="text-[#3cc994]" /> We respect your privacy. No spam.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
