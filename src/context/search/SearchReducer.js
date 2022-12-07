import { NEW_SEARCH, RESET_SEARCH } from './SearchTypes';

const SearchReducer = (state, { type, payload }) => {
  switch (type) {
    case NEW_SEARCH:
      return {
        ...state,
        payload
      };

    case RESET_SEARCH:
      return {
        ...state,
      }

    default:
      return state;
  }
};

export default SearchReducer;
