import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise  from 'redux-promise';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
