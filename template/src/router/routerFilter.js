/*
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-04-14 10:53:46
 * @LastEditors: wenbin
 * @LastEditTime: 2021-04-21 16:39:47
 * @FilePath: /qiankun-vue/src/router/routerFilter.js
 * Copyright (C) 2021 wenbin. All rights reserved.
 */
import router from './index'
import magusUI from '@maguscloud/maguscloud-ui'

const whiteList = ['/login', '/license', '/test'];

let catchUtils = magusUI.exportApi.catchUtil;

if (!window.__POWERED_BY_QIANKUN__) {
  router.beforeEach((to, from, next) => {
    if (catchUtils.getLocalItem('token')) {
      if (to.path === '/login') {
        next({
          path: '/'
        });
      } else {
        next();
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        next('/login');
      }
    }
  
  });
  
  router.afterEach(() => {});
}