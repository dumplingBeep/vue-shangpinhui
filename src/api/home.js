import axios from 'axios';

export const reqSendBaseCategory = () => {
  return axios({
    method: 'GET',
    url: 'http://39.98.123.211/api/product/getBaseCategoryList',
  });
};
