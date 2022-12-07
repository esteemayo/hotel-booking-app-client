import { createContext, useContext, useReducer } from 'react';

import SearchReducer from './SearchReducer';
import { NEW_SEARCH, RESET_SEARCH } from './SearchTypes';

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

const SearchContext = createContext(INITIAL_STATE);

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  const newSearch = (search) => {
    dispatch({
      type: NEW_SEARCH,
      payload: search,
    });
  };

  const resetSearch = () => {
    dispatch({
      type: RESET_SEARCH,
    })
  }

  return (
    <SearchContext.Provider value={{ ...state, newSearch, resetSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useGlobalSearchContext = () => {
  return useContext(SearchContext);
};

export { SearchProvider };
