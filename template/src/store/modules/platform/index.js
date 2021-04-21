/*
 * @Description: 批量导入模块
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-03-31 15:22:04
 * @LastEditors: wenbin
 * @LastEditTime: 2021-03-31 15:22:05
 * @FilePath: /maguscloud-platform-web/src/store/modules/platform/index.js
 * Copyright (C) 2021 wenbin. All rights reserved.
 */

const files = require.context('./modules', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default {
  namespaced: true,
  modules
};