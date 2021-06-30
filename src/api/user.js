import request from '../utils/request';

// 发送手机验证码
export const reqSendCode = (phone) => {
  return request({
    method: 'GET',
    url: `/user/passport/sendCode/${phone}`,
  });
};

// 注册
export const reqRegister = ({ phone, password, code }) => {
  return request({
    method: 'POST',
    url: `/user/passport/register`,
    data: {
      phone,
      password,
      code,
    },
  });
};

// 登录
export const reqLogin = ({ phone, password }) => {
  return request({
    method: 'POST',
    url: `/user/passport/login`,
    data: {
      phone,
      password,
    },
  });
};

// 退出登录
export const reqLogout = () => {
  return request({
    method: 'GET',
    url: `/user/passport/logout`,
  });
};
