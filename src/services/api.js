import axios from "axios";

const API = axios.create({
  baseURL: "https://resume-analyzer-backend-74ic.onrender.com/" ,
  // baseURL:  "http://localhost:9000/api",
});

API.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;