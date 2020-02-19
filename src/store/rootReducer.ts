import { combineReducers } from 'redux'

import {IRobotsState, reducer as robotsReducer} from "../scenes/services/robots/reducers";
import {ISearchState, reducer as SearchReducer} from "../scenes/services/search/reducers";

export interface ApplicationState {
  robots: IRobotsState,
  search: ISearchState
}

export const rootReducer = combineReducers<ApplicationState>({robots: robotsReducer, search: SearchReducer});
