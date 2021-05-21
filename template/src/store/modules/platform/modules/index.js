/*
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-03-31 15:22:50
 * @LastEditors: wenbin
 * @LastEditTime: 2021-05-21 11:17:32
 * @FilePath: /magus-son-template/template/src/store/modules/platform/modules/index.js
 * Copyright (C) 2021 wenbin. All rights reserved.
 */
import * as types from '../../../mutation-types'

export default {
  state: {
    menu: []
  },
  getters: {
    menu: (state) => {
      return state.menu || window.localStorage.getItem('menu')
    }
  },
  mutations: {
    [types.SET_MENU_LIST](state, datas) {
      state.menu = datas
    },
  },
  actions: {
    [types.GET_MENU_LIST]({
      commit
    }, magusUI) {
      return new Promise((resolve, reject) => {
        magusUI.apiConfig.get('/magustest/menu')
          .then(res => {
            magusUI.catchUtil.setLocalItem('menu', JSON.stringify(res.data))
            commit('SET_MENU_LIST', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
      
    },
  }
};