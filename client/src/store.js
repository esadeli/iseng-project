import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: '',
    namelengkap: '',
    userid: '',
    error: ''
  },
  mutations: {
    gettoken (state, payload) {
      state.token = payload
    },
    getname (state, payload) {
      state.namelengkap = payload
    },
    getuserid (state, payload) {
      state.userid = payload
    },
    geterror (state, payload) {
      state.error = payload
    }
  },
  actions: {
    registerobj (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3001/users/register',
        data: payload
      })
        .then(user => {
          console.log('USER--->', user.data)
        })
        .catch(error => {
          console.log('ERROR: ', error)
        })
    },
    loginobj (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3001/users/login',
        data: payload
      })
        .then(user => {
          console.log('USER LOGIN-->', user.data)

          // send to actions
          context.commit('gettoken', user.data.token)
          context.commit('getname', user.data.name)
          context.commit('getuserid', user.data.userid)
          // context.commit('gettoken')
        })
        .catch(error => {
          console.log('ERROR: ', error)
          context.commit('geterror', error)
        })
    }
  }
})
