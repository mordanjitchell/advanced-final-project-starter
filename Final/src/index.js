import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import AppContainer from './containers/AppContainer';
import './index.css';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, promise),
));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
