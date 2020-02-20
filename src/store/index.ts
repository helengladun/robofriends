import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { IApplicationState, rootReducer } from './rootReducer';
import rootSaga from '../scenes/services/robots/saga';

export function configureStore(): Store<IApplicationState> {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
}

