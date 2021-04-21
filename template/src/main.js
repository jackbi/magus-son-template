/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-02-25 16:07:58
 * @LastEditors: wenbin
 * @LastEditTime: 2021-04-21 16:58:21
 */
import './public-path'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import actions from "@/shared/actions";
import i18n from './middleware/index';

Vue.config.productionTip = false
// let router = null
let instance = null

function render(props = {}) {
  if (props) {
    // 注入 actions 实例
    actions.setActions(props);
  }
  const {
    container
  } = props;

  if (container) {
    container.className = 'sonApp'
  }

  instance = new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#qiankun-vue') : '#qiankun-vue')
}

// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}


// 生命周期
export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  console.log('[vue] props from main framework', props)
  // storeTest(props);
  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}