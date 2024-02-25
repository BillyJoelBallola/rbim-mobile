import axios from "axios";

export default axios.create({
  baseURL: 'https://rbim-server.onrender.com/api',
  withCredentials: true
})