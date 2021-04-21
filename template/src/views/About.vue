<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-02-25 16:07:58
 * @LastEditors: wenbin
 * @LastEditTime: 2021-03-26 13:47:01
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default{
  computed: {
     ...mapState({
        grafanaUrl: (state) => state
      }),
   },
  created() {
  }
}
</script>
