import { combineReducers } from 'redux'

import {IRobotsState, reducer as robotsReducer} from "../modules/robots/store/reducers";
import {ISearchState, reducer as SearchReducer} from "../modules/search/store/reducers";

export interface ApplicationState {
  robots: IRobotsState,
  search: ISearchState
}

export const rootReducer = combineReducers<ApplicationState>({robots: robotsReducer, search: SearchReducer});
