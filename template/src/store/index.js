import Vue from 'vue';
import Vuex from 'vuex';
//import modules
import platform from '@store/modules/platform';
//持久化vuex
// import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })
const store = new Vuex.Store({
  modules: {
    platform
  }
  // plugins: [vuexLocal.plugin]
});

export default store;