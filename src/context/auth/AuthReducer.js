import * as actions from './AuthTypes';

const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.LOGIN_START:
      return {
        ...state,
        user: null,
        success: false,
        loading: true,
        error: null,
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        success: true,
        error: null,
      };

    case actions.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        success: false,
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

    case actions.RESET:
      return {
        ...state,
        user: null,
        success: false,
        loading: false,
        error: null,
      };

    default:
      return state;
  };
};

export default AuthReducer;
