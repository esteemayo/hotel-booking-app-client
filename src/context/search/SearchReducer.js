import { NEW_SEARCH, RESET_SEARCH } from './SearchTypes';

const SearchReducer = (state, { type, payload }) => {
  switch (type) {
    case NEW_SEARCH:
      return {
        ...state,
        city: payload.destination,
        dates: [...payload.dates],
        options: payload.options,
      };

    case RESET_SEARCH:
      return {
        ...state,
        city: null,
        dates: [],
        options: {
          adult: null,
          children: null,
          room: null,
        },
      };

    default:
      return state;
  };
};

export default SearchReducer;
