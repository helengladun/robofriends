import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import 'tachyons';

// components
import App from './App'

// styles
import "./index.scss";

// utils
import registerServiceWorker from './registerServiceWorker'

// store
import {IRobotsState, reducer as robotosReducer} from "./modules/robots/store/reducers";
import {reducer as SearchReducer, ISearchState} from './store/reducers';
import rootSaga from "./modules/robots/store/saga";

export interface ApplicationState {
  search: ISearchState,
  robots: IRobotsState,
}

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers<ApplicationState>({robots: robotosReducer, search: SearchReducer});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <div className="full-screen">
      <App />
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();