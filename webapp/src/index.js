import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.js';
import {createStore} from "redux";
import reducers from "./Store/Reducers/index.js";
import {Provider} from 'react-redux';
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render( 
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

