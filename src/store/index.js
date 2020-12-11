import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moduleAuth from "./auth/moduleAuth.js";

const userInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || {};

const getUserInfo = () => {
  return userInfoLocalStorage;
};

export default new Vuex.Store({
  state: {
    AppActiveUser: getUserInfo(),
  },
  mutations: {
    // Updates user info in state and localstorage
    UPDATE_USER_INFO(state, payload) {
      // Get Data localStorage
      let userInfo =
        JSON.parse(localStorage.getItem('userInfo')) || state.AppActiveUser;

      for (const property of Object.keys(payload)) {
        if (payload[property] != null) {
          // If some of user property is null - user default property defined in state.AppActiveUser
          state.AppActiveUser[property] = payload[property];
          // Update key in localStorage
          userInfo[property] = payload[property];
        }
      }

      // Store data in localStorage
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },
  },
  actions: {},
  modules: {
    auth: moduleAuth,
  },
});
