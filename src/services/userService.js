import http from './httpService';

const apiEndpoint = '/users';

export const register = (credentials) =>
  http.post(`${apiEndpoint}/register`, credentials);
