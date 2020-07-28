import Vue from 'vue';
import Vuex from 'vuex';
import http from '../axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedInUser: localStorage.getItem('loggedInUser'),
  },
  mutations: {
    logIn(state, username) {
      state.loggedInUser = username;
    },
  },
  actions: {
    logIn({ commit }, { username, password }) {
      const clientAuth = btoa(`${process.env.VUE_APP_CLIENT_APP}:${process.env.VUE_APP_CLIENT_SECRET}`);

      const params = new URLSearchParams();
      params.append('grant_type', 'password');
      params.append('username', username);
      params.append('password', password);
      return http.post(
        '/login',
        params,
        {
          headers: {
            Authorization: `Basic ${clientAuth}`,
          },
        },
      ).then((res) => {
        commit('logIn', res.data.user.username);
        localStorage.loggedInUser = res.data.user.username;
        localStorage.accessToken = `Bearer ${res.data.accessToken}`;
        return res;
      });
    },
  },
  modules: {
  },
});
