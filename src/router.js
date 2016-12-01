/**
 * Created by bursak on 11/29/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Lockr from 'lockr';
import { createStore, combineReducers } from 'redux'
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import Routes from './routes';
import * as reducers from './reducers';
reducers.routing = routerReducer;

let storage = JSON.parse(Lockr.get('state') || '[]');
const store = createStore(combineReducers(reducers), { 'cards': storage }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const history = syncHistoryWithStore(browserHistory, store);

function init() {
  let state = store.getState();
  Lockr.set('state', JSON.stringify(state.cards));
  console.log(state);

  ReactDOM.render(<Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>, document.getElementById('root'));
}

init();
store.subscribe(init);
