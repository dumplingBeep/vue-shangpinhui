import { reqGetGoodsInfo } from './../../api/detail';

const state = {
  goodsInfo: {
    categoryView: {},
    skuInfo: {},
    spuSaleAttrList: [],
  },
};

const getters = {};

const actions = {
  async getGoodsInfo({ commit }, skuId) {
    const data = await reqGetGoodsInfo(skuId);
    commit('GET_GOODS_INFO', data);
  },
};

const mutations = {
  GET_GOODS_INFO(state, goodsInfo) {
    state.goodsInfo = goodsInfo;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
