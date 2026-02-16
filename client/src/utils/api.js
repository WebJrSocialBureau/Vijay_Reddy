import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1", // Updated to match backend v1 routes
});

// Add interceptor for JWT token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
