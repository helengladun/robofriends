import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import 'tachyons';

// components
import App from './App'

// styles
import "./index.scss";

// utils
import registerServiceWorker from './registerServiceWorker'

// store
import {searchRobots} from "./store/reducers";

const store = createStore(searchRobots);

ReactDOM.render(
  <Provider store={store}>
    <div className="full-screen">
      <App />
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();