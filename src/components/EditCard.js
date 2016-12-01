/**
 * Created by bursak on 11/28/16.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import ListStatus from './ListStatus';
import { browserHistory } from 'react-router';
import { editCard } from '../action';
import _ from 'lodash';


const mapStateToProps = ({ cards }) => ({
  cards
});

const mapDispatchToProps = dispatch => ({
  editCard: card => dispatch(editCard(card))
});

const EditCard = React.createClass({
  componentDidUpdate() {
    let el = ReactDOM.findDOMNode(this.refs.number);
    if (el) el.focus();
  },
  render( ) {
    let props = this.props;
    console.log(props.card.id);
    return (<div className="content col-xs-9">
      <h2> Edit Card </h2>
      <form>
        <div className="form-group col-xs-12">
          <input className="form-control" ref="number" placeholder="Number Card *" name="number" />
        </div>
        <div className="form-group">
          <div className="col-xs-5">
            <input className="form-control" ref="exp_1" placeholder="Expiry month*" name="exp_1" />
          </div>
          <div className="col-xs-2">
            /
          </div>
          <div className="col-xs-5">
            <input className="form-control" ref="exp_2" placeholder="Expiry year*" name="exp_2" />
          </div>
        </div>
        <div className="form-group col-xs-12">
          <select className="form-control" ref="status" name='status'>
            {ListStatus.map((card) => <option value={card[0]} key={_.uniqueId('card-')}>{card[1]}</option>)}
          </select>
        </div>
        <div className="col-xs-12">
          <button className="btn" onClick={this.editCard}> Add Card </button>
        </div>
      </form>
    </div>);
  },
  editCard(ev) {
    ev.preventDefault();
    let data = {
      'number': ReactDOM.findDOMNode(this.refs.number).value,
      'exp_1': ReactDOM.findDOMNode(this.refs.exp_1).value,
      'exp_2': ReactDOM.findDOMNode(this.refs.exp_2).value,
      'status': ReactDOM.findDOMNode(this.refs.status).value,
      // 'id':
    };
    this.props.editCard(data);
    browserHistory.push(`/card`);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCard);