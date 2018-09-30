import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Doctor from './views/Doctor.vue'
import ListDoctor from './views/ListDoctor.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Doctor,
      redirect: { name: 'listdoctor' }
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
        },
        {
          path: ':id',
          name: 'id',
          component: Detail,
          props: true
        }
      ]
    }
  ]
})
