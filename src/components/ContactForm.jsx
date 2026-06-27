import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, User, Briefcase, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const contactSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email address'),
  phone: yup.string().required('Phone number is required').min(5, 'Phone number must be at least 5 characters long'),
  city: yup.string().required('City is required'),
  company: yup.string().optional(),
  service: yup.string().optional(),
});

export function ContactForm() {
  const { loading, submitContactInquiry } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    company: '',
    service: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    
    if (!recaptchaChecked) {
      toast.warning("Please check the reCAPTCHA box.");
      return;
    }
    
    try {
      await contactSchema.validate(formData, { abortEarly: false });
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        city: formData.city || '',
        company_name: formData.company || '',
        service_interested: formData.service || ''
      };
      
      await submitContactInquiry(payload);
      toast.success("Your inquiry has been submitted successfully!");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setRecaptchaChecked(false);
        setFormData({ name: '', email: '', phone: '', city: '', company: '', service: '' });
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
        toast.error(err.message || "Failed to submit inquiry. Please try again.");
        console.error("Failed to submit inquiry:", err);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gradient-to-br from-white via-white to-[#f0faf8] rounded-[32px] p-8 md:p-12 shadow-[0_45px_100px_-15px_rgba(10,46,44,0.18)] border border-[#d0ede6] hover:border-[#3cc994]/45 relative overflow-hidden transition-all duration-500 w-full">

      {/* Decorative vector waves inside form box for custom designer touch */}
      <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none w-1/2 h-1/2">
        <svg className="w-full h-full fill-[#3cc994]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C30,40 70,70 100,0 L100,100 Z" />
        </svg>
      </div>
      <div className="absolute left-0 top-0 opacity-15 pointer-events-none w-1/2 h-1/2 rotate-180">
        <svg className="w-full h-full fill-[#00b4d8]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C30,40 70,70 100,0 L100,100 Z" />
        </svg>
      </div>

      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b4d8]/10 rounded-full blur-3xl pointer-events-none -mr-24 -mt-24" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3cc994]/15 rounded-full blur-3xl pointer-events-none -ml-24 -mb-24" />

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center relative z-10"
        >
          <CheckCircle className="text-[#3cc994] w-16 h-16 mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-500 max-w-md">
            Thank you for dropping us a line. We will get back to you shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
          <div>
            <h3 className="text-3xl font-bold text-[#0a2e2c] mb-6 relative inline-block">
              Drop Us a Line
              <span className="absolute bottom-[-8px] left-0 w-16 h-1 bg-gradient-to-r from-[#3cc994] to-[#00b4d8] rounded-full"></span>
            </h3>
          </div>



          {/* 2x3 Form Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-[#3cc994]/70" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className={`w-full bg-white border ${formErrors.name ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-[#e2e0f0] focus:border-[#3cc994]'} rounded-xl pl-11 pr-5 py-3.5 text-[14px] text-[#0a2e2c] placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#3cc994]/15 hover:border-slate-300 transition-all duration-200 shadow-sm`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1.5 ml-2 font-medium">{formErrors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-[#3cc994]/70" />
              </div>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`w-full bg-white border ${formErrors.email ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-[#e2e0f0] focus:border-[#3cc994]'} rounded-xl pl-11 pr-8 py-3.5 text-[14px] text-[#0a2e2c] placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#3cc994]/15 hover:border-slate-300 transition-all duration-200 shadow-sm`}
              />
              <span className="absolute right-4 top-[18px] text-red-500 font-bold text-[16px] pointer-events-none">*</span>
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1.5 ml-2 font-medium">{formErrors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Phone className="w-5 h-5 text-[#3cc994]/70" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className={`w-full bg-white border ${formErrors.phone ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-[#e2e0f0] focus:border-[#3cc994]'} rounded-xl pl-11 pr-5 py-3.5 text-[14px] text-[#0a2e2c] placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#3cc994]/15 hover:border-slate-300 transition-all duration-200 shadow-sm`}
              />
              {formErrors.phone && (
                <p className="text-red-500 text-xs mt-1.5 ml-2 font-medium">{formErrors.phone}</p>
              )}
            </div>

            {/* City */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPin className="w-5 h-5 text-[#3cc994]/70" />
              </div>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className={`w-full bg-white border ${formErrors.city ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-[#e2e0f0] focus:border-[#3cc994]'} rounded-xl pl-11 pr-5 py-3.5 text-[14px] text-[#0a2e2c] placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#3cc994]/15 hover:border-slate-300 transition-all duration-200 shadow-sm`}
              />
              {formErrors.city && (
                <p className="text-red-500 text-xs mt-1.5 ml-2 font-medium">{formErrors.city}</p>
              )}
            </div>

            {/* Company Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Briefcase className="w-5 h-5 text-[#3cc994]/70" />
              </div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="w-full bg-white border border-[#e2e0f0] rounded-xl pl-11 pr-5 py-3.5 text-[14px] text-[#0a2e2c] placeholder-slate-400 focus:outline-none focus:border-[#3cc994] focus:ring-4 focus:ring-[#3cc994]/15 hover:border-slate-300 transition-all duration-200 shadow-sm"
              />
            </div>

            {/* Service Interested? */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MessageSquare className="w-5 h-5 text-[#3cc994]/70" />
              </div>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                placeholder="Service Interested?"
                className="w-full bg-white border border-[#e2e0f0] rounded-xl pl-11 pr-5 py-3.5 text-[14px] text-[#0a2e2c] placeholder-slate-400 focus:outline-none focus:border-[#3cc994] focus:ring-4 focus:ring-[#3cc994]/15 hover:border-slate-300 transition-all duration-200 shadow-sm"
              />
            </div>

          </div>

          {/* Mock ReCAPTCHA */}
          <div className="mt-2">
            <span className="text-slate-700 font-bold text-[14px] mb-2 block">Recaptcha</span>
            <div className="flex items-center justify-between border border-[#e2e0f0] bg-white p-3 rounded-lg max-w-[300px] shadow-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="recaptcha-check"
                  checked={recaptchaChecked}
                  onChange={(e) => setRecaptchaChecked(e.target.checked)}
                  className="w-5 h-5 border border-slate-300 rounded cursor-pointer bg-white mr-3 accent-[#3cc994] focus:ring-2 focus:ring-[#3cc994]/30"
                />
                <label htmlFor="recaptcha-check" className="text-slate-600 text-[13px] font-medium cursor-pointer select-none">
                  I&apos;m not a robot
                </label>
              </div>

              {/* Recaptcha Brand */}
              <div className="flex flex-col items-center justify-center pl-4 text-center border-l border-slate-100 flex-shrink-0">
                <svg className="w-6 h-6 text-blue-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
                </svg>
                <span className="text-[9px] font-bold text-gray-400 mt-0.5 tracking-tight">reCAPTCHA</span>
                <span className="text-[7px] text-gray-400 tracking-tighter leading-none">Privacy - Terms</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              style={{ background: 'linear-gradient(135deg, #3cc994 0%, #00b4d8 100%)' }}
              className={`text-white font-bold px-12 py-4 rounded-xl text-[14px] tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-[0_15px_30px_rgba(60,201,148,0.25)] uppercase cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Submitting...' : 'SUBMIT MESSAGE'}
            </button>
          </div>
        </form>
      )}

    </div>
  );
}
