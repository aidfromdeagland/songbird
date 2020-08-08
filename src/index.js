/* eslint-disable react/jsx-filename-extension,import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import './themes-change/bootstrap.min.css';
import App from './components/app.jsx';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
