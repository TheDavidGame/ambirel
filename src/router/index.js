import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Calculate from '@/components/Calculate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/calculate',
      component: Calculate
    }
  ]
})
