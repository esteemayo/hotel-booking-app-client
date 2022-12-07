import { createContext, useContext, useReducer } from 'react';

import AuthReducer from './AuthReducer';
import { getFromStorage, tokenKey } from 'utils';
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from './AuthTypes';

const user = getFromStorage(tokenKey);

const INITIAL_STATE = {
  user: user ?? null,
  loading: false,
  error: null,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const loginStart = () => {
    dispatch({
      type: LOGIN_START,
    });
  };

  const loginSuccess = (credentials) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: credentials,
    });
  };

  const loginFailure = () => {
    dispatch({
      type: LOGIN_FAILURE,
    });
  };

  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginFailure,
        loginStart,
        loginSuccess,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
