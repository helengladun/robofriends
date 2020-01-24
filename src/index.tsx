import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

// components
import App from './App'

// styles
import "./index.css";

// utils
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App/>
  </Suspense>,
  document.getElementById('root'));
registerServiceWorker();