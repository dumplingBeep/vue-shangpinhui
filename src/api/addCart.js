import request from '../utils/request';

export const reqAddCart = (skuId, skuNum) => {
  request({
    method: 'POST',
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};
