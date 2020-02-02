import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga'

import {ApplicationState, rootReducer} from './rootReducer';
import {createLogger} from "redux-logger";
import rootSaga from "../modules/robots/store/saga";



export function configureStore(): Store<ApplicationState> {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

  sagaMiddleware.run(rootSaga);

  return store;
}

