import React from 'react';
import {Route, IndexRoute} from 'react-router';
import AppContainer from './containers/AppContainer';

const Greeting = () => {
  return <div> hey there </div>
}
export default (
  <Route path="/" component={AppContainer} >


);
