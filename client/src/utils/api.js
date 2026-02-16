import axios from "axios";

const getBaseURL = () => {
  const envURL = import.meta.env.VITE_API_URL;
  if (!envURL) return "http://localhost:5000/api/v1";
  // Ensure it ends with /api/v1 if it's pointing to the live domain
  if (envURL.includes("onrender.com") && !envURL.endsWith("/api/v1")) {
    return `${envURL.replace(/\/$/, "")}/api/v1`;
  }
  return envURL;
};

const API = axios.create({
  baseURL: getBaseURL(),
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
