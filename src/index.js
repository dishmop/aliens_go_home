import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import Game from './containers/Game'
import reducer from './reducers';
import reportWebVitals from './reportWebVitals';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, /* proloadedState */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
