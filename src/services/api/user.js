import axios from './axios'
export default {
    register(token){
    return axios.get('user/register', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
}