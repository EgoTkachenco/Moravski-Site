import Axios from 'axios'

const axios = Axios.create({
  baseURL: (process.env.API_URL || '') + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
