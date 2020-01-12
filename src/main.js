import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// REM适配：动态设置html标签字体大小
import 'amfe-flexible'
// 加载注册 vant 组件模块才可以使用
import './utils/register-vant'
// 加载全局样式
// 注意一定要在第三方组件库后面加入我们的全局样式
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
