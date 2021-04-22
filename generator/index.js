/*
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-04-21 14:34:29
 * @LastEditors: wenbin
 * @LastEditTime: 2021-04-22 10:57:19
 * @FilePath: /magus-son-template/generator/index.js
 * Copyright (C) 2021 wenbin. All rights reserved.
 */
const fs = require('fs');
const tool = (api) => {
  return {
    deleteFile(path) {
      const file = api.resolve(path);
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    },
    deleteDir(path) {
      const dir = api.resolve(path);
      if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach((o) => {
          const file = dir + '\\' + o;
          if (fs.statSync(file).isDirectory()) {
            fs.readdirSync(dir).forEach((p) => {
              fs.unlinkSync(dir + '\\' + o + '\\' + p);
            });
          } else {
            fs.unlinkSync(file);
          }
        });
        fs.rmdirSync(dir);
      }
    }
  };
};
module.exports = (api, options, rootOptions) => {
  const utils = tool(api);
  // 安装一些基础公共库
  api.extendPackage({
    dependencies: {
      "@ice/stark-data": "^0.1.2",
      "axios": "^0.21.1",
      "core-js": "^3.6.5",
      "element-ui": "^2.15.1",
      "nprogress": "^0.2.0",
      "qiankun": "^2.4.0",
      "vue": "^2.6.11",
      "vue-router": "^3.2.0",
      "vuex": "^3.4.0"
    },
    devDependencies: {
      "@maguscloud/maguscloud-ui": "^0.1.6",
      "@vue/cli-plugin-babel": "~4.5.0",
      "@vue/cli-plugin-eslint": "~4.5.0",
      "@vue/cli-plugin-router": "~4.5.0",
      "@vue/cli-plugin-vuex": "~4.5.0",
      "@vue/cli-service": "~4.5.0",
      "babel-eslint": "^10.1.0",
      "babel-polyfill": "^6.26.0",
      "compression-webpack-plugin": "^5.0.1",
      "eslint": "^6.7.2",
      "eslint-plugin-vue": "^6.2.2",
      "image-webpack-loader": "^7.0.1",
      "node-sass": "^4.0.0",
      "sass-loader": "^9.0.0",
      "vue-i18n": "^8.24.2",
      "vue-template-compiler": "^2.6.11"
    },
    scripts: {
      "start": "npm run serve",
      "serve": "vue-cli-service serve --open",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
  });
  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
    console.log(Object.keys(files))
  })
  api.render('../template');
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true;
  });
};