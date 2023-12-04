import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from "./Store/Store"

import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

