/**
 * Created by bursak on 11/25/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { autoAddCard } from '../action';

import CardInList from './CardInList';

const mapStateToProps = ({ cards }) => ({
  cards
});

const mapDispatchToProps = dispatch => ({
  autoAddCard: () => dispatch(autoAddCard()),
});

const Cards = data => {
  return (<tbody>
    {data.cards.map(card => <CardInList card={card} key={card.id} />)}
  </tbody>);
};

const ListCard = ({ cards, autoAddCard }) => {
  return (<div className="jumbotron">
      <div className="list-card">
        <button className="btn btn-primary pull-right" onClick={autoAddCard}> Auto generate Card </button>
        <h2>List Card</h2>
        <table className="table">
          <thead>
            <tr>
              <th> Number </th>
              <th> Exp </th>
              <th> Status </th>
              <th> Action </th>
            </tr>
          </thead>
          { cards.length === 0
            ? (<tbody><tr><td cols="4"> Nothing to find </td></tr></tbody>)
            : (<Cards cards={cards} />)
          }
        </table>
      </div>
    </div>);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCard);
