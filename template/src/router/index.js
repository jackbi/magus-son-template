/*
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-04-21 15:20:00
 * @LastEditors: wenbin
 * @LastEditTime: 2021-04-21 16:33:31
 * @FilePath: /qiankun-vue/src/router/index.js
 * Copyright (C) 2021 wenbin. All rights reserved.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@views/Home.vue'),
    meta: {
      isNeedLayout: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '@views/About.vue'),
    meta: {
      isNeedLayout: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '@views/login/index.vue'),
    meta: {
      isNeedLayout: false,
      title: '登陆',
    }
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import( /* webpackChunkName: "error" */ '@views/error/index.vue'),
    meta: {
      isNeedLayout: false,
      title: '404',
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import( /* webpackChunkName: "error" */ '@views/test/index.vue'),
    meta: {
      isNeedLayout: true,
      title: '测试',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? '/qiankunVue/' : '/',
  routes
})

export default router
