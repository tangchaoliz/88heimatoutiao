import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout' // 如果文件夹下的命名是index.vue可以不用写
import Login from '../views/login'

// @ 是 VueCLI 中提供了一种特殊的路径规则 它直接指向 src 目录路径
// 注意: 在 VueCLI 创建的项目中 无论你在哪里使用 @ 符号,他永远指向 src 目录
import Home from '@/views/home'
import Article from '@/views/article'
import Publish from '@/views/publish'
// 加载 nprogress
import NProgress from 'nprogress'

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
// 路由拦截器
router.beforeEach((to, from, next) => {
  // 开启路由进度导航条
  NProgress.start()

  // 1 如果访问的是登陆页面直接让其通过
  if (to.path === '/login') {
    next()
    // 停止代码往后执行
    return
  }

  // 2 非登录页面 校验登录状态
  // 2.1 获取用户token
  const token = window.localStorage.getItem('user-token')

  // 2.2 判断是否有 token 有就通过
  if (token) {
    next()
  } else {
    next('/login')
  }
})

router.afterEach((to, from) => {
  // 进度条结束
  NProgress.done()
})
export default router
