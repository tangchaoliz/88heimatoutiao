import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout' // 如果文件夹下的命名是index.vue可以不用写
import Login from '../views/login'

// @ 是 VueCLI 中提供了一种特殊的路径规则 它直接指向 src 目录路径
// 注意: 在 VueCLI 创建的项目中 无论你在哪里使用 @ 符号,他永远指向 src 目录
import Home from '@/views/home'
import Article from '@/views/article'
import Publish from '@/views/publish'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },

  // 一级路由主页,它是最外面的那个壳子
  {
    path: '/',
    component: Layout,
    // 首页
    children: [
      {
        path: '', // 默认子路由 只能有一个
        component: Home
      },
      { // 文章列表
        path: '/article',
        component: Article
      },
      { // 发布文章
        path: '/publish',
        component: Publish
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
