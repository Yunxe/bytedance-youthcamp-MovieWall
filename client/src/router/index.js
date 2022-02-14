import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
import Home1 from '../views/Home1'
Vue.use(Router)

export default new Router({
  mode: 'history',
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        roles: ['admin', 'user']
      }
    },
    {
      // 注册页
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        roles: ['admin', 'user']
      }
    },
    {
      // 首页
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          // 图片首页
          path: '/home1',
          name: 'Home1',
          component: Home1
        }
      ]
    }
  ]
})
