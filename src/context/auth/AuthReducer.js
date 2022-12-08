import * as actions from './AuthTypes';

const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.LOGIN_START:
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };

    case actions.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: payload,
      };

    case actions.LOGOUT:
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
