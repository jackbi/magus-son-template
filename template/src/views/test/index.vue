<!--
 * @Description: 前期测试
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-04-19 14:04:49
 * @LastEditors: wenbin
 * @LastEditTime: 2021-04-19 14:08:14
 * @FilePath: /maguscloud-platform-web/src/views/test/index.vue
 * Copyright (C) 2021 wenbin. All rights reserved.
-->
<template>
  <div class="home">
    <magus-main-layout>
      <template slot="layoutSearch">
        <magus-search>
          <template slot="form">
            <el-form-item label="测试">
              <el-input v-model="query.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini">查询</el-button>
            </el-form-item>
          </template>
        </magus-search>
      </template>
      <template slot="mainButton">
        <el-button type="primary" size="mini">新增</el-button>
        <el-button type="primary" size="mini">新增</el-button>
      </template>
      <template slot="mainPagebar">
        <magus-paging
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="query.pageNum"
          :page-sizes="[1, 10, 20, 30, 40]"
          :page-size="query.pageSize"
          layout="sizes, prev, pager, next, jumper"
          :total="query.count"
        ></magus-paging>
      </template>
    </magus-main-layout>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      query: {
        name: "",
        pageNum: 1,
        pageSize: 20,
        count: 0,
      },
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
