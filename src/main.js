/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 15:11:06
 * @LastEditTime : 2020-07-06 13:18:22
 * @LastEditors  : zhuxiaodong
 * @Description  : main.js
 * @FilePath     : /easy-mock-demo/src/main.js
 */
import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import { beforeEachCheckToken } from "@/router/before-each"
import { afterEachSetTitle } from "@/router/after-each"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/themes/index.css' //element-ui医保定制主题,如不需要注释即可
Vue.use(ElementUI);


Vue.config.productionTip = false

router.beforeEach(beforeEachCheckToken)//路由前置守卫
router.afterEach(afterEachSetTitle)//路由后置守卫

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
