import { createContext, useContext, useEffect, useReducer } from 'react';

import AuthReducer from './AuthReducer';
import { getFromStorage, setToStorage, tokenKey } from 'utils';
import * as actions from './AuthTypes';

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
      type: actions.LOGIN_START,
    });
  };

  const loginSuccess = (credentials) => {
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: credentials,
    });
  };

  const loginFailure = () => {
    dispatch({
      type: actions.LOGIN_FAILURE,
    });
  };

  const logout = () => {
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
