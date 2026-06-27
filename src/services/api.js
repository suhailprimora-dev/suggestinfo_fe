import axios from 'axios';

// Create axios instance with base URL strictly from environment configuration for security
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Submit inquiry form data to backend api endpoint.
 * Payload maps:
 * - name
 * - email
 * - phone
 * - city
 * - company_name
 * - service_interested
 */
export const submitInquiry = async (inquiryData) => {
  const response = await api.post('/api/contacts/inquire/', inquiryData);
  return response.data;
};

export default api;
