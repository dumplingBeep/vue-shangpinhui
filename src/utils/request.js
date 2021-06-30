import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import getUid from './uid';
import store from './../store';

NProgress.configure({ showSpinner: false });

const request = axios.create({
  baseURL: '/api',
  timeout: 1000, // 请求超时时间，中断请求
});

const messages = {
  401: '亲,未授权',
  403: '亲,禁止访问',
  404: '亲,资源未找到',
  500: '亲,服务器内部错误',
};

request.interceptors.request.use((config) => {
  NProgress.start();
  config.headers.userTempId = getUid();

  const token = store.state.user.token;
  if (token) {
    config.headers.token = store.state.user.token;
  }

  // 请求成功
  return config;
});

request.interceptors.response.use(
  (response) => {
    // 响应成功
    NProgress.done();

    if (response.data.code === 200) {
      // 功能成功
      return response.data.data;
    } else {
      // 功能失败
      return Promise.reject(response.data.message || '亲,未知错误,请联系客服大大');
    }
  },
  (error) => {
    // 响应失败
    NProgress.done();
    let message = '亲,未知错误,请联系客服大大';

    if (error.response) {
      // 响应回来了
      message = messages[error.response.status];
    } else {
      // 未响应
      if (error.message.indexOf('timeout') > -1) {
        message = '亲,网络超时';
      } else if (error.message.indexOf('Network') > -1) {
        message = '亲,无网络连接';
      }
    }

    return Promise.reject(message);
  }
);

export default request;
