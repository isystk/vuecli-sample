import Vue from 'vue'
import Router from 'vue-router'

import top from '../pages/top'
import company from '../pages/company'
import post from '../pages/post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/company',
      name: 'company',
      component: company
    },
    {
      path: '/post/:id',
      name: 'post',
      component: post
    }
  ]
})
