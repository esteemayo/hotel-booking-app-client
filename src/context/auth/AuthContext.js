import { createContext, useContext, useEffect, useReducer } from 'react';

import * as actions from './AuthTypes';
import AuthReducer from './AuthReducer';
import { getJWT } from 'services/authService';
import {
  getFromStorage,
  removeFromStorage,
  setToStorage,
  tokenKey,
} from 'utils';

const user = getFromStorage(tokenKey);

const INITIAL_STATE = {
  user: user ?? null,
  loading: false,
  error: null,
};

const token = getJWT();

const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const loginStart = () => {
    dispatch({
      type: actions.LOGIN_START,
    });
  };

  const loginSuccess = (credentials) => {
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: credentials,
    });
  };

  const loginFailure = (error) => {
    dispatch({
      type: actions.LOGIN_FAILURE,
      payload: error,
    });
  };

  const logout = () => {
    removeFromStorage();
    dispatch({
      type: actions.LOGOUT,
    });
  };

  useEffect(() => {
    setToStorage(tokenKey, state.user);
  }, [state.user]);

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
