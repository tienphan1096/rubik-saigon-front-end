import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
});

if (localStorage.accessToken) {
  axiosInstance.defaults.headers.common.Authorization = localStorage.accessToken;
}

export default axiosInstance;
