/*
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-03-31 15:22:50
 * @LastEditors: wenbin
 * @LastEditTime: 2021-03-31 15:36:42
 * @FilePath: /maguscloud-platform-web/src/store/modules/platform/modules/test.js
 * Copyright (C) 2021 wenbin. All rights reserved.
 */
import * as types from '../../../mutation-types'

export default {
  state: {},
  getters: {},
  mutations: {
    [types.SET_TESTINFO](state) {
      console.log(state);
    },
  },
  actions: {
    [types.GET_TESTINFO]({
      commit
    }) {
      commit('SET_TESTINFO', {})
    },
  }
};