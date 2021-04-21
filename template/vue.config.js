/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-02-25 16:19:35
 * @LastEditors: wenbin
 * @LastEditTime: 2021-04-21 15:05:53
 */
const path = require('path');
const {
  name
} = require('./package');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

const port = 10000; // dev port
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  lintOnSave: !IS_PROD, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  // publicPath: '/qiankunVue',
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    // 跨域
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
        '@components': resolve('src/components'),
        '@views': resolve('src/views'),
        '@store': resolve('src/store')
      },
    },
    output: {
      // 把子应用打包成 umd 库格式(必须)
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    }
  }
};