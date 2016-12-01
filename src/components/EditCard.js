/**
 * Created by bursak on 11/28/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { editCard } from '../action';
import CardForm from './CardForm';

const mapStateToProps = ({ cards }, { params: { cardId } }) => ({
  card: cards.filter(card => {
    return card.id === parseInt(cardId)
  })[0]
});

const mapDispatchToProps = dispatch => ({
  editCard: card => dispatch(editCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);