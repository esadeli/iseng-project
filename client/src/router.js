import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Doctor from './views/Doctor.vue'
import ListDoctor from './views/ListDoctor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Doctor,
      redirect: { name: 'doctor' }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: Doctor,
      children: [
        {
          path: '/',
          name: 'listdoctor',
          component: ListDoctor
        }
      ]
    }
  ]
})
