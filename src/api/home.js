import requesMock from '../utils/requesMock';

export const reqGetBanners = () => {
  return requesMock({
    method: 'GET',
    url: '/banners',
  });
};
