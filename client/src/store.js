import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: '',
    namelengkap: '',
    userid: '',
    error: '',
    listdoctor: []
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
    },
    getlistdoctor (state, payload) {
      state.listdoctor = payload
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
          localStorage.setItem('token', user.data.token)
          context.commit('gettoken', user.data.token)
          context.commit('getname', user.data.name)
          context.commit('getuserid', user.data.userid)
          context.commit('geterror', '') //
        })
        .catch(err => {
          context.commit('geterror', err) // how to catch the error message ?
          context.commit('gettoken', '')
          context.commit('getname', '')
          context.commit('getuserid', '')
        })
    },
    loginobj (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3001/users/login',
        data: payload
      })
        .then(user => {
          // send to actions
          localStorage.setItem('token', user.data.token)
          context.commit('gettoken', user.data.token)
          context.commit('getname', user.data.name)
          context.commit('getuserid', user.data.userid)
          context.commit('geterror', '')
        })
        .catch(err => {
          context.commit('geterror', err)
          context.commit('gettoken', '')
          context.commit('getname', '')
          context.commit('getuserid', '')
        })
    },
    logoutobj (context, payload) {
      context.commit('geterror', '')
      context.commit('gettoken', '')
      context.commit('getname', '')
      context.commit('getuserid', '')
    },
    getlistdoctor (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3001/doctors/lists'
      })
        .then(doctors => {
          context.commit('getlistdoctor', doctors.data.data)
        })
        .catch(error => {
          context.commit('geterror', error)
        })
    }
  }
})
