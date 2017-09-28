import Vue from 'vue'
import Router from 'vue-router'

// Routes
import Home from '@/routes/Home'
import ResourceList from '@/routes/ResourceList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resources/:resource',
      name: 'Resources',
      component: ResourceList
    }
  ]
})
