/**
 * Created by bursak on 11/25/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { filterByCardNumber, orderCardsByNumber } from '../actions/action';
import fuzzysearch from 'fuzzysearch'
import CardInList from './CardInList';

const matches = ( filter, card ) => fuzzysearch(filter, card.number);
const sortByType = ( a, b, sortType ) => {
  a = a.toString().replace(/([\s-_]+)/g, '');
  b = b.toString().replace(/([\s-_]+)/g, '');
  return ( 'ASC' == sortType ) ? a - b : b - a;
};

const orderBySMTH = ( cards, name, sortType ) => {
  return sortType ? cards.sort( (a, b) => sortByType( a[name], b[name], sortType ) ) : cards;
};
const listTypeOfSort = [ 'ASC', 'DESC', '' ];

const mapStateToProps = ({ cards, cardFilter, orderCard }) => ({
  cards: orderBySMTH( cards.filter(c => matches(cardFilter, c)), orderCard[1], orderCard[0] ),
  cardFilter,
  orderCard
});

const mapDispatchToProps = dispatch => ({
  onFilter: query => dispatch(filterByCardNumber(query)),
  onOrder: order => dispatch(orderCardsByNumber(order))
});

const Cards = data => {
  return (<tbody>
    {data.cards.map(card => <CardInList card={card} cardId={card.id} key={card.id} />)}
  </tbody>);
};

const ListCard = React.createClass({
  render() {
    let props = this.props;
    console.log(props);
    let orderCard = props.orderCard.length && props.orderCard[0].length
      ? (props.orderCard[0] == 'ASC'
        ? <span className="glyphicon glyphicon-arrow-up"></span>
        : <span className="glyphicon glyphicon-arrow-down"></span>)
      : '';
    let getNextOrderBy = ( current, allList ) => {
      return (allList.indexOf( current ) + 1 < allList.length) ? allList[allList.indexOf( current ) + 1] : allList[0];
    };
    return (<div className="jumbotron row">
      <div className="list-card">
        <div className="pull-right">
          <input
            className="search"
            type="search"
            placeholder="Filter By Number..."
            defaultValue={props.cardFilter}
            onChange={e => props.onFilter(e.target.value)} />
        </div>
        <h2>List Card</h2>
        <table className="table">
          <thead>
          <tr>
            <th> <button className="btn btn-sm" onClick={ () => props.onOrder( [ getNextOrderBy( props.orderCard[0], listTypeOfSort ), 'number' ] ) }> Number {props.orderCard[1]=='number' ? orderCard : ''} </button> </th>
            <th> Exp </th>
            <th> <button className="btn btn-sm" onClick={ () => props.onOrder( [ getNextOrderBy( props.orderCard[0], listTypeOfSort ), 'status' ] ) }> Status {props.orderCard[1]=='status' ? orderCard : ''} </button> </th>
            <th> Action </th>
          </tr>
          </thead>
          { props.cards.length === 0
            ? (<tbody><tr><td cols="4"> Nothing to find </td></tr></tbody>)
            : (<Cards cards={props.cards} />)
          }
        </table>
      </div>
    </div>);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ListCard);
