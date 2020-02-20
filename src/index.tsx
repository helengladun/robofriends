import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'tachyons';
import whyDidYouRender from '@welldone-software/why-did-you-render';

// components
import App from './App';

// styles
import './index.scss';

// utils
import registerServiceWorker from './registerServiceWorker';

// store
import { configureStore } from './store';

const store = configureStore();

whyDidYouRender(React);

ReactDOM.render(
  <Provider store={store}>
    <div className="full-screen">
      <App/>
    </div>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();