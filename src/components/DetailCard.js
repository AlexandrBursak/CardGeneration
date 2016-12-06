/**
 * Created by bursak on 11/28/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import ListStatus from '../constants/ListStatus';
import { Link } from 'react-router';


const mapStateToProps = ({ cards }, { params: { cardId } }) => ({
  card: cards.filter(card => {
    return card.id === parseInt(cardId);
  })[0]
});

const DetailCard = ({ card }) => {
  return ((<div className="jumbotron row">
      <h2> Card Info </h2>
      <form>
        <div className="form-group">
          Number: {card.number}
        </div>
        <div className="form-group">
          Expiry date: {card.exp_date}
        </div>
        <div className="form-group">
          Status: {ListStatus[card.status][1]}
        </div>
        <div>
          <Link to={`/card/`}> Back </Link>
        </div>
    </form>
  </div>));
};

export default connect(mapStateToProps)(DetailCard);