import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import About from './views/about/About.vue'
import Them from './views/them/Them.vue'
import Login from './views/login/Login.vue'
import Registered from './views/registered/Registered.vue'
import Recording from './views/recording/Recording.vue'
import Print from './views/print/Print.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/them',
      name: 'them',
      component: Them
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered
    },
    {
      path: '/recording',
      name: 'recording',
      component: Recording
    },
    {
      path: '/print',
      name: 'print',
      component: Print
    }
  ]
})
