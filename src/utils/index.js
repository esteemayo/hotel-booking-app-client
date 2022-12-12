export const tokenKey = 'jwt_token';

export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setToStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromStorage = () => {
  return localStorage.clear();
};

export const excerpts = (str, count) => {
  if (str.length > count) {
    str = str.split(' ').splice(0, count).join(' ') + ' ...';
  }
  return str;
};
