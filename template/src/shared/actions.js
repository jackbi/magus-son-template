/*
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-03-19 13:42:46
 * @LastEditors: wenbin
 * @LastEditTime: 2021-03-19 13:43:43
 * @FilePath: /qiankun-vue/src/shared/actions.js
 * Copyright (C) 2021 wenbin. All rights reserved.
 */
function emptyAction() {
  // 警告：提示当前使用的是空 Action
  console.warn("Current execute action is empty!");
}

class Actions {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  };

  /**
   * 设置 actions
   */
  setActions(actions) {
    this.actions = actions;
  }

  /**
   * 映射
   */
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }

  /**
   * 映射
   */
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();
export default actions;