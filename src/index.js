/* eslint-disable react/jsx-filename-extension,import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app.jsx';
import store from './redux/store';
import './themes-change/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
