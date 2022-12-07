import http from './httpService';
import { getFromStorage, tokenKey } from 'utils';

const apiEndpoint = '/auth';

export const login = (credentials) => http.post(`${apiEndpoint}/login`, credentials);

export const getJWT = () => getFromStorage(tokenKey)?.token;
