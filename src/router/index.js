import Vue from 'vue'
import Router from 'vue-router'

import top from '../pages/top'
import company from '../pages/company'
import post from '../pages/post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: top
    },
    {
      path: '/company',
      component: company
    },
    {
      path: '/post/:id',
      component: post
    }
  ]
})
