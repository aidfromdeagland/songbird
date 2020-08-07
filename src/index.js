/* eslint-disable react/jsx-filename-extension,import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import './themes-change/bootstrap.min.css';
import HeroesService from './services/heroesService';
import { HeroesServiceProvider } from './heroesServiceContext/heroesServiceContext';
import App from './components/app.jsx';

import store from './store';

const heroesService = new HeroesService();

ReactDOM.render(
  <Provider store={store}>
    <HeroesServiceProvider value={heroesService}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HeroesServiceProvider>
  </Provider>,
  document.getElementById('root'),
);
