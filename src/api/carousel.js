import request from '../utils/request';

export const reqGetBaseCategory = () => {
  return request({
    method: 'GET',
    url: '/product/getBaseCategoryList',
  });
};