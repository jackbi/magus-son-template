<!--
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-03-31 11:33:17
 * @LastEditors: wenbin
 * @LastEditTime: 2021-05-17 14:28:09
 * @FilePath: /maguscloud-driver-ui/src/App.vue
 * Copyright (C) 2021 wenbin. All rights reserved.
-->
<template>
  <div id="app" style="height: 100%; width: 100%">
    <magus-layout
      :headerInfo="headerInfo"
      v-if="$route.meta.isNeedLayout && !this.poweredByQiankun"
    >
      <router-view />
    </magus-layout>
    <div style="height: 100%; width: 100%" v-else>
      <router-view />
      <!-- <div style="width: 100%; height: 100%;" id="qiankun-vue"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      poweredByQiankun: false,
      headerInfo: {
        imgUrl: require("./assets/images/logo.png"),
        // 没有图片显示文字
        logoText: "MagusCloud",
        // logo详细描述
        logoDetail: "上海麦杰科技股份有限公司",
        // 一级菜单
        menuList: [],
      },
    };
  },
  mounted() {
    this.poweredByQiankun = window.__POWERED_BY_QIANKUN__;
    if (!window.__POWERED_BY_QIANKUN__) {
      this.getMenu();
    }
  },
  methods: {
    getMenu() {
      this.$store
        .dispatch("platform/GET_MENU_LIST", this.$magusCloudApi)
        .then((res) => {
          this.headerInfo.menuList = res.data;
        });
    },
  },
};
</script>

<style>
.sonApp {
  width: 100%;
  height: 100%;
}
</style>
