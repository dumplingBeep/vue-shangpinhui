import requesMock from '../utils/requesMock';

// 导航栏轮播图
export const reqGetBanners = () => {
  return requesMock({
    method: 'GET',
    url: '/banners',
  });
};

// floor楼层数据
export const reqGetFloors = () => {
  return requesMock({
    method: 'GET',
    url: '/floors',
  });
};
