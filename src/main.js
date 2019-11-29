import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less'
import axios from 'axios'
// 加载 nprogress 中的指定的样式文件
// 注意: 加载第三方包中的具体文件不需要写具体路径, 直接写包名即可
// 总结就是 包名/具体文件路径
import 'nprogress/nprogress.css'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 设置axios 的常态地址
Vue.prototype.$axios = axios // 将axios共享给所有实例使用

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
