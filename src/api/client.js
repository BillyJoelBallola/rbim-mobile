import axios from "axios";

export default axios.create({
  baseURL: 'http://192.168.100.238:4000/api',
  withCredentials: true
})