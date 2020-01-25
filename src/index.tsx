import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

// components
import App from './App'

// styles
import "./index.scss";

// utils
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <div className="full-screen"><App /></div>,
  document.getElementById('root'));
registerServiceWorker();