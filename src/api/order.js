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
