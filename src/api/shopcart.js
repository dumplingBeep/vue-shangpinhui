import request from '../utils/request';

// 加入购物车 / 更新购物车商品数量
export const reqAddCart = (skuId, skuNum) => {
  return request({
    method: 'POST',
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};

// 查询购物车
export const reqGetShopCartList = () => {
  return request({
    method: 'GET',
    url: '/cart/cartList',
  });
};

// 更新购物车商品checked状态
export const reqSetGoodsChecked = (skuID, isChecked) => {
  return request({
    method: 'GET',
    url: `/cart/checkCart/${skuID}/${isChecked}`,
  });
};

// 更新购物车商品checked状态
export const reqDeleteGoods = (skuId) => {
  return request({
    method: 'DELETE',
    url: `/cart/deleteCart/${skuId}`,
  });
};
