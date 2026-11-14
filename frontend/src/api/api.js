import axios from "axios";

// Use local backend during development
const API_BASE_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to add auth token if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    // Ensure headers exist
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`; // ✅ fixed string interpolation
  }
  return config;
});

// Handle API errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// Reservation API endpoints
export const reservationAPI = {
  createReservation: (data) => api.post("/reservations/", data),
};
