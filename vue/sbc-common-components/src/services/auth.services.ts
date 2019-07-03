import Axios from 'axios'
const API_URL = 'http://localhost:5000/api/v1/'
const AUTHENTICATION_RESOURCE_NAME = 'logout'

export default {
  logout (refreshToken) {
    return Axios.post(API_URL + AUTHENTICATION_RESOURCE_NAME, { refresh_token: refreshToken })
  }
}
