import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'tachyons';

// components
import App from './App'

// styles
import "./index.scss";

// utils
import registerServiceWorker from './registerServiceWorker'

// store
import {configureStore} from "./store";

const store = configureStore();

const whyDidYouRender = require('@welldone-software/why-did-you-render');
whyDidYouRender(React);

ReactDOM.render(
  <Provider store={store}>
    <div className="full-screen">
      <App />
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();