<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-02-25 16:07:58
 * @LastEditors: wenbin
 * @LastEditTime: 2021-04-21 16:38:11
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ $route.meta }}
  </div>
</template>

<script>
// @ is an alias to /src
import { store } from "@ice/stark-data";
// import actions from "@/shared/actions";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    showLang(lang) {
      console.log(`current language is ${lang}`);
    },
    getUserInfo(userInfo) {
      console.log(userInfo);
    },
  },
  mounted() {
    // console.log(userInfo);
    // console.log(store.get('users'));
    console.log(this.$magusApi);
    console.log(new Date().format("yyyy-MM-dd"));
    store.on("language", this.showLang, true);
    store.off("language", this.showLang);
    store.on("users", this.getUserInfo, true);
    store.off("users", this.getUserInfo);
    // actions.onGlobalStateChange(state => {
    //   const { token } = state;
    //   console.log(state);
    //   // 未登录 - 返回主页
    //   if (!token) {
    //     // this.$message.error("未检测到登录信息！");
    //     alert('未检测到登录信息！')
    //   }
    // }, true);
    console.log(this.$route);
  },
};
</script>

<style></style>
