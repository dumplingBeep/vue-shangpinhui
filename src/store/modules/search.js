import { reqSearchGoodsList } from './../../api/search';

const state = {
  goodsList: [], // 商品列表
  trademarkList: [], // 品牌列表
  attrsList: [], // 属性列表
  total: 0,
};

const getters = {};

const actions = {
  async searchGoodsList({ commit }, options) {
    const data = await reqSearchGoodsList(options);
    commit('SEARCH_GOODS_LIST', data);
  },
};

const mutations = {
  SEARCH_GOODS_LIST(state, data) {
    state.total = data.total;
    state.goodsList = data.goodsList;
    state.trademarkList = data.trademarkList;
    state.attrsList = data.attrsList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
