import axios from "axios";

export default axios.create({
  baseURL: 'http://192.168.63.137:4000/api',
  withCredentials: true
})