import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Story from '@/components/Story'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello/',
      component: Hello
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Story',
      component: Story
    },
    {
      path: '/history/',
      name: 'History',
      component: History
    }
  ]
})
