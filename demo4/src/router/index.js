/**
 * 路由器
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news', // path最左边的斜杠是根路径
          component: News
        },
        {
          path: 'message',
          component: Message
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
