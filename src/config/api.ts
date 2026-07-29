/**
 * Central API base URL.
 * In development: falls back to http://localhost:5000
 * In production (Render): set VITE_API_URL in Render environment variables
 *   e.g. VITE_API_URL=https://gabbys-gadget-api.onrender.com
 */
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default API_URL;
