import axios from "axios";

console.log(
  "API BASE URL:",
  "https://resume-analyzer-backend-74ic.onrender.com/api"
);

const API = axios.create({
  baseURL: "https://resume-analyzer-backend-74ic.onrender.com/api",
});

export default API;