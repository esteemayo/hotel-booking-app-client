import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from './AuthTypes';

const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: payload,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  };
};

export default AuthReducer;
