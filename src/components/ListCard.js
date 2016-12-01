/**
 * Created by bursak on 11/25/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { filterByCardNumber } from '../action';
import fuzzysearch from 'fuzzysearch'
import CardInList from './CardInList';

const matches = ( filter, card ) => fuzzysearch(filter, card.number);

const mapStateToProps = ({ cards, cardFilter }) => ({
  cards: cards.filter(c => matches(cardFilter, c))
});

const mapDispatchToProps = dispatch => ({
  onFilter: query => dispatch(filterByCardNumber(query))
});

const Cards = data => {
  return (<tbody>
    {data.cards.map(card => <CardInList card={card} key={card.id} />)}
  </tbody>);
};

const ListCard = ({ cards, onFilter }) => {
  return (<div className="jumbotron row">
      <div className="list-card">
        <div className=" pull-right">
          <input className="search" type="search" placeholder="Filter By Number..." onChange={e => onFilter(e.target.value)} />
        </div>
        <h2>List Card</h2>
        <table className="table">
          <thead>
            <tr>
              <th> <button className="btn btn-primary"> Number </button> </th>
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
