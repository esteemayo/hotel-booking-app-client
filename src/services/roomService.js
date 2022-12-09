import http from './httpService';

const apiEndpoint = '/rooms';

export const updateRoomAvailaibility = (roomId, dates) =>
  http.patch(`${apiEndpoint}/availability/${roomId}`, dates);
