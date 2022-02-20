import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
import Home1 from '../views/Home1'
import Home2 from '../views/Home2'
import Des from '../views/Des'
import test from '../views/test'
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
        path: '/',
        name: 'Login',
        component: Login
      },
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
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          // 图片首页
          path: '/home1',
          name: 'Home1',
          component: Home1,
          //添加路由
          children:[
            {
              path:"/dbID/:dbID(\\d+)", // 如果是在 url 后面带参数 就是 加上 :参数名称(\\d+)  如果是使用 push 方式 就不需要带参数了 因为直接 push方法里面 params 指明即可
              name:'dbID',// dom定位
              component:Des
            }
          ]
        },
        {
          // 个人页面
          path: '/home2',
          name: 'Home2',
          component: Home2
        },
        {
          // 测试
          path: '/test',
          name: 'test',
          component: test
        }
      ]
    },
    {
      // 详情页
      path: '/des',
      name: 'Des',
      component: Des
    },
  ]
})
