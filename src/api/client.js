import axios from "axios";

export default axios.create({
  baseURL: 'http://192.168.1.33:4000/api',
  withCredentials: true
})