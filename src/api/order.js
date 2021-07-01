import request from './../utils/request';

// 获取订单交易页信息
export const reqGetOrderInfo = () => {
  return request({
    method: 'GET',
    url: '/order/auth/trade',
  });
};

// 提交订单
export const reqSubmitOrder = ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  orderComment,
  orderDetailList,
}) => {
  return request({
    method: 'POST',
    url: '/order/auth/submitOrder',
    params: {
      tradeNo,
    },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay: 'ONLINE',
      orderComment,
      orderDetailList,
    },
  });
};

// 获取支付二维码
export const reqGetCode = (orderId) => {
  return request({
    method: 'GET',
    url: `/payment/weixin/createNative/${orderId}`,
  });
};

// 查询支付订单状态
export const reqGetOrderStatus = (orderId) => {
  return request({
    method: 'GET',
    url: `/payment/weixin/queryPayStatus/${orderId}`,
  });
};
