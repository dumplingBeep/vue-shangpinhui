import { reqLogin } from './../../api/user';

const state = JSON.parse(localStorage.getItem('user')) ||
  JSON.parse(sessionStorage.getItem('user')) || {
    name: '',
    nickName: '',
    token: '',
  };

const getters = {};

const actions = {
  async getLoginInfo({ commit }, user) {
    try {
      const res = await reqLogin(user);
      commit('GET_LOGIN_INFO', res);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  GET_LOGIN_INFO(state, res) {
    state.name = res.name;
    state.nickName = res.nickName;
    state.token = res.token;
  },

  logout(state) {
    state.name = '';
    state.nickName = '';
    state.token = '';
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
