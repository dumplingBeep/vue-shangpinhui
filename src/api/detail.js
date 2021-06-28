import request from './../utils/request';

// 获取商品信息
export const reqGetGoodsInfo = (skuId) => {
  return request({
    method: 'GET',
    url: `/item/${skuId}`,
  });
};
