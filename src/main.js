import Vue from 'vue'
import App from './App.vue'
//引入公共样式
import '../src/assets/css/common.css';
//引入路由组件
import router from './router';
//引入淘宝无线适配
import '../src/assets/css/flexible.js';
//导入字体图标
import '../src/assets/font/iconfont.css';
Vue.config.productionTip = false
//导入Vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入axios
import axios from '@/axios/request';
//挂载到Vue原型上
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
