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

let { cards, cardFilter, orderCard } = JSON.parse(Lockr.get('save') || '[]');
const store = createStore(combineReducers(reducers), { cards, cardFilter, orderCard }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const history = syncHistoryWithStore(browserHistory, store);

function init() {
  let state = store.getState();
  console.log(state);
  Lockr.set('save', JSON.stringify( { cards: state.cards, cardFilter: state.cardFilter, orderCard: state.orderCard } ));
  ReactDOM.render(<Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>, document.getElementById('root'));
}

init();
store.subscribe(init);
