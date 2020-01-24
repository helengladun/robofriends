import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

// components
import App from './App'

// styles
import "./index.css";

// utils
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();