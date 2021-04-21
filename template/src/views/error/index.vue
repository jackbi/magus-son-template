<!--
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-04-13 13:38:20
 * @LastEditors: wenbin
 * @LastEditTime: 2021-04-14 10:53:12
 * @FilePath: /maguscloud-platform-web/src/views/error/index.vue
 * Copyright (C) 2021 wenbin. All rights reserved.
-->
<template>
  <div class='error'>
    <magus-error @back="back" :imgUrl="imgUrl"></magus-error>
  </div>
</template>

<script>
  export default {
   components: {},
   data() {
    return {
      imgUrl: require('../../assets/images/404.png')
    };
   },
   computed: {},
   watch: {},
   methods: {
     back () {
       this.$router.push({path: '/'})
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