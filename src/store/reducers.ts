import { AnyAction, Reducer } from "redux";

// types
import { SearchTypes } from "./types";

export interface ISearchState {
  searchField: string
}

const initialState: ISearchState = {
  searchField: ''
};

export const searchRobots: Reducer<ISearchState> = (state: ISearchState = initialState, action: AnyAction) => {
  switch(action.type) {
    case SearchTypes.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload.text
      };
    default:
      return state;
  }

};