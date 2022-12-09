import http from './httpService';

const apiEndpoint = '/rooms';

export const updateRoomAvailaibility = (roomId) =>
  http.patch(`${apiEndpoint}/availability/${roomId}`);
