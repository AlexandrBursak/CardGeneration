/**
 * Created by bursak on 11/25/16.
 */
import React from 'react'
import { connect } from 'react-redux';
import { autoAddCard } from '../actions/action';
import { Link } from 'react-router'

const mapDispatchToProps = dispatch => ({
  onCreate: () => dispatch(autoAddCard()),
});

const Sidebar = ({ onCreate }) => {
  return (<div className="sidebar">
    <button className="btn btn-sm btn-primary pull-right" onClick={onCreate}> Auto generate Card </button>
    <Link className="btn btn-sm" to={`/card/new`}> Add new Card </Link>
    <Link className="btn btn-sm" to={`/card`}> List Card </Link>
  </div>);
};

export default connect(null, mapDispatchToProps)(Sidebar);
