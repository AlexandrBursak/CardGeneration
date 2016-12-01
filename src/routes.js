/**
 * Created by bursak on 11/29/16.
 */
import React from 'react';
import { IndexRoute, Route } from 'react-router';

import CardApp from './app';
import NewCard from './components/NewCard';
import DetailCard from './components/DetailCard';
import ListCard from './components/ListCard';
import EditCard from './components/EditCard';

export default (<Route path='/' component={CardApp}>
  <Route path='card'>
    <IndexRoute component={ListCard}/>
    <Route path='new' component={NewCard}></Route>
    <Route path=':cardId'>
      <IndexRoute component={DetailCard}/>
      <Route path='edit' component={EditCard}></Route>
    </Route>
  </Route>
</Route>);
