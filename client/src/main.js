// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// eslint-disable-next-line no-unused-vars
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import Vuex from 'vuex'

// 挂在axios
import {Axios} from './utils/axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.config.productionTip = false

const whiteList = ['/login', '/register', '/home'] // 不重定向白名单

// 路由跳转前
router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin')

  // 注销
  if (to.path === '/logout') {
    sessionStorage.clear()
    next({path: '/login'})
  } else if (to.path === '/login') {
    if (isLogin != null) {
      next({path: '/main'})
    }
  } else if (isLogin == null) {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else { next({path: '/login'}) }
  }

  next()
})

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
