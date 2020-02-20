import * as actions from '../actions';
import { SearchTypes } from '../types';

describe('search actions', () => {
  it('setSearchField', () => {
    const text = 'lea';
    const expectedAction = {
      type: SearchTypes.CHANGE_SEARCH_FIELD,
      payload: {
        text
      }
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});
