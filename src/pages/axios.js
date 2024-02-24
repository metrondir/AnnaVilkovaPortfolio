import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL_BACK,
});

export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_API_URL_BACK,
  withCredentials: true,
});
