import { createContext, useContext, useState } from 'react';
import { submitInquiry } from '../services/api';

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitContactInquiry = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await submitInquiry(formData);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      // Parse backend or fallback error message
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        Object.values(err.response?.data || {}).flat().join(', ') ||
        err.message ||
        'Something went wrong. Please try again.';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return (
    <ContactContext.Provider value={{ loading, error, setError, submitContactInquiry }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}
