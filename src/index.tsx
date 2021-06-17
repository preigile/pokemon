import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './configureStore';

import './index.css';

const store = configureStore({});

window.addEventListener('load', () => {
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
});
