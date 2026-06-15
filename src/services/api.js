import axios from "axios";

const API = axios.create({
  baseURL: "https://resume-analyzer-backend-74ic.onrender.com",
});

export default API;