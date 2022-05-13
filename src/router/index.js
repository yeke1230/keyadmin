import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import demo from '@/components/demo'
import convert from '@/components/convert'

import layout from '../layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/layout',
      name: 'Layout',
      component: layout,
      children: [
        {
          path: '/helloword',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/demo',
          name: 'demo',
          component: demo
        }
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/convert',
      name: 'convert',
      component: convert
    }
  ]
})
