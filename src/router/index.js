import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Card from '@/components/Card'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    }]
})
