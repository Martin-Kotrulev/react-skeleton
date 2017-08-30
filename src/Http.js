import axios from 'axios'
import Auth from './Auth'

const BASE_URL = 'http://localhost:5000'

class Http {
  static get (url, secured = false) {
    let axiosOptions = { headers: {} }

    if (secured) {
      axiosOptions.headers['Authorization'] = `bearer ${Auth.getToken}`
    }

    return axios.get(`${BASE_URL}${url}`, axiosOptions)
      .then(res => res.data)
  }

  static post (url, data, secured = false) {
    let axiosOptions = { headers: {} }

    if (secured) {
      axiosOptions.headers['Authorization'] = `bearer ${Auth.getToken}`
    }

    return axios.post(`${BASE_URL}${url}`, data, axiosOptions)
      .then(res => res.data)
  }
}

export default Http
