/**
 * Created by bursak on 11/25/16.
 */
import React from 'react';
import { Link } from 'react-router'

const Sidebar = () => {
  return (<div className="sidebar">
    <Link className="btn btn-sm" to={`/card/new`}> Add new Card </Link>
    <Link className="btn btn-sm" to={`/card`}> List Card </Link>
  </div>);
};

export default Sidebar;
