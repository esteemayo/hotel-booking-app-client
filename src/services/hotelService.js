import http from './httpService';

const apiEndpoint = '/hotels';

export const getHotelCountByCity = () =>
  http.get(`${apiEndpoint}/count-by-city?cities=madrid,barcelona,london`);
