import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://inventix-backend.onrender.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
