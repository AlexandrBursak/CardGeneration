/**
 * Created by bursak on 11/28/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import CardForm from './CardForm';
import { addCard } from '../actions/action';

const mapDispatchToProps = dispatch => ({
  addCard: card => dispatch(addCard(card))
});

export default connect(null, mapDispatchToProps)(CardForm);