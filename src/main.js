import { createApp } from 'vue'
import App from './App.vue'
// 初始化css
import 'normalize.css'
import './assets/css/index.less'

// vue-router导入
import router from './router'
// vuex导入
import store from './store'

// element-plus组件的按需导入
import { registerApp } from './global'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
registerApp(app)

app.mount('#app')
