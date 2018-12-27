import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import About from './views/about/About.vue'
import Them from './views/them/Them.vue'
import Login from './views/login/Login.vue'
import Registered from './views/registered/Registered.vue'
import Recording from './views/recording/Recording.vue'
import Print from './views/print/Print.vue'
import Share from './views/share/Share.vue'
import Record from './views/record/Record.vue'
import Choose from './views/choose/Choose.vue'
import Forget from './views/forget/Forget.vue'
import Forgetn from './views/forget/Forgetn.vue'
import Forgets from './views/forget/Forgets.vue'
import Setpassword from './views/setpassword/Setpassword.vue'
import Skill from './views/skill/Skill.vue'
import Regsuccess from './views/registered/Regsuccess.vue'
import Regsucc from './views/registered/Regsucc.vue'

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
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    },
    {
      path: '/record',
      name: 'record',
      component: Record
    },
    {
      path: '/choose',
      name: 'choose',
      component: Choose
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/forgetn',
      name: 'forgetn',
      component: Forgetn
    },
    {
      path: '/forgets',
      name: 'forgets',
      component: Forgets
    },
    {
      path: '/setpassword',
      name: 'setpassword',
      component: Setpassword
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    },
    {
      path: '/regsuccess',
      name: 'regsuccess',
      component: Regsuccess
    },
    {
      path: '/regsucc',
      name: 'regsucc',
      component: Regsucc
    }
  ]
})
