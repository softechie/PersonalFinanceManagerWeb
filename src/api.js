import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/v1',
  /* other custom settings */
})

export default axiosInstance