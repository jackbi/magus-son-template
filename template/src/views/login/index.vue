<!--
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-04-13 11:23:15
 * @LastEditors: wenbin
 * @LastEditTime: 2021-04-13 11:25:43
 * @FilePath: /maguscloud-platform-web/src/views/login/index.vue
 * Copyright (C) 2021 wenbin. All rights reserved.
-->
<template>
  <div class='login'>
    <magus-login :imgUrl="imgUrl" @submit="submit"></magus-login>
  </div>
</template>

<script>
  export default {
   components: {},
   data() {
    return {
      imgUrl: require('../../assets/images/bg.png')
    };
   },
   computed: {},
   watch: {},
   methods: {
     submit(datas) {
       console.log(datas);
     }
   },
   created() {

   },
   mounted() {

   },
   beforeCreate() {},
   beforeMount() {},
   beforeUpdate() {},
   updated() {},
   beforeDestroy() {},
   destroyed() {},
   activated() {},
  }
</script>
<style lang='scss' scoped>
</style>