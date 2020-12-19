import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moduleAuth from './auth/moduleAuth.js';

const userInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || null;

const getUserInfo = () => {
  return userInfoLocalStorage;
};

export default new Vuex.Store({
  state: {
    AppActiveUser: getUserInfo() || {},
    accesToken: '', // necessary to verify a valid user
    total_tasks: 0,
  },
  mutations: {
    /**  
     * Updates user info in state and localstorage 
     */
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
    UPDATE_USER_ACCESS_TOKEN(state, payload) {
      state.accesToken = payload;
      // JUST IN CASE: Access token parameter for valid requests
      // axios.defaults.headers.common["Authorization"] = "Bearer " + state.accessToken;
    },
    /** 
     * Update total tasks 
     */
    UPDATE_TOTAL_TASKS(state, payload) {
      state.total_tasks = payload;
    },
  },
  actions: {
    setTotalTasks({ commit }, payload) {
      commit('UPDATE_TOTAL_TASKS', payload);
    },
  },
  getters: {
    getEmail: (state) => {
      return state.AppActiveUser.email;
    },
  },
  modules: {
    auth: moduleAuth,
  },
});
