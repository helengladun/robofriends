import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

// components
import App from './App'
import {Spinner} from './components/Spinner';

// styles
import "./index.scss";

// utils
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Spinner />,
  document.getElementById('root'));
registerServiceWorker();