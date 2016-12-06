/**
 * Created by bursak on 11/25/16.
 */
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const CardApp = ({ children }) => {
  return (<div className="container">
    <Header />
    <div className="row">
      <Sidebar />
      {children}
    </div>
  </div>);
};

export default CardApp;