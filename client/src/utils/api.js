import axios from "axios";

const getBaseURL = () => {
  let envURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";
  
  // Auto-fix Render URLs missing the api/v1 suffix
  if (envURL.includes("onrender.com") && !envURL.includes("/api/v1")) {
    envURL = `${envURL.replace(/\/$/, "")}/api/v1`;
  }

  // CRITICAL: Ensure it ends with a slash for proper Axios path concatenation
  return envURL.endsWith("/") ? envURL : `${envURL}/`;
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
