import {NAME_TOKEN} from '@/config'
import axios from 'axios/index'

export default {
  login (state, {user, token}) {
    localStorage.setItem(NAME_TOKEN, token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    state.token = token
    state.user = user
    state.authenticated = true
  },
  logout (state) {
    localStorage.removeItem(NAME_TOKEN)
    state.authenticated = false
    state.token = null
    state.user = {
      id: null,
      nome: null,
      email: null,
      isMaster: false
    }
  },
  setToken (state, token) {
    localStorage.setItem(NAME_TOKEN, token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    state.token = token
  },
  setUser (state, user) {
    state.user = user
  },
  setAuthenticated (state, status) {
    state.authenticated = status
  }
}
