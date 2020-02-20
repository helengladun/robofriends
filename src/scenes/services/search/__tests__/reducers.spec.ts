import { reducer as searchReducer } from '../reducers';
import { SearchTypes } from '../types';

describe('searchReducer', () => {
  const initialStateSearch = {
    searchField: ''
  };

  it('should return the initial state', () => {
    const action = { type: 'INITIAL_STATE' };
    expect(searchReducer(undefined, action)).toEqual({
      ...initialStateSearch
    });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    const action = { type: SearchTypes.CHANGE_SEARCH_FIELD, payload: {
        text: 'lea'
      } };

    expect(searchReducer(initialStateSearch, action)).toEqual({
      searchField: 'lea'
    });
  });

});
