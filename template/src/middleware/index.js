/*
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-04-21 15:09:22
 * @LastEditors: wenbin
 * @LastEditTime: 2021-05-21 11:18:40
 * @FilePath: /magus-son-template/template/src/middleware/index.js
 * Copyright (C) 2021 wenbin. All rights reserved.
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import magusUI from '@maguscloud/maguscloud-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import enElement from 'element-ui/lib/locale/lang/en';
import zhCNElement from 'element-ui/lib/locale/lang/zh-CN';
import localEn from '../common/lang/en';
import localZhCN from '../common/lang/zhCN';
import '@maguscloud/maguscloud-ui/lib/maguscloud-ui.css';
import ElementLocale from 'element-ui/lib/locale'
import '@/router/routerFilter'
import '../mock/index'

Vue.prototype.magusCloudApi = magusUI.exportApi;

let catchUtils = magusUI.exportApi.catchUtil;

if (!catchUtils.getLocalItem('language')) {
   catchUtils.setLocalItem('language', 'zh')
}
Vue.use(ElementUI);
Vue.use(magusUI);
Vue.use(VueI18n);


// 国际化
const i18n = new VueI18n({
   locale: catchUtils.getLocalItem('language') || 'zh', // 语言标识, 通过切换locale的值来实现语言切换,this.i18n.locale
   messages: {
       zh: {
         ...zhCNElement,
         ...magusUI.exportApi.lang.zhCN,
         ...localZhCN
       }, // 中文语言包
       en: {
         ...enElement,
         ...magusUI.exportApi.lang.en,
         ...localEn
       }, // 英文语言包
    },
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n;