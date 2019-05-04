import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL | 'https://localhost:8443/v1',
  // baseURL: 'https://pfm-api.cfapps.io/v1',
  /* other custom settings */
})

export default axiosInstance