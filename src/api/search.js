import request from './../utils/request';

export const reqSearchGoodsList = (data) => {
  return request({
    method: 'POST',
    url: '/list',
    data,
  });
};
