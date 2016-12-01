/**
 * Created by bursak on 12/1/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';
import ListStatus from './ListStatus';
import _ from 'lodash';

const FormCard = React.createClass({
  componentDidUpdate() {
    let el = ReactDOM.findDOMNode(this.refs.number);
    if (el) el.focus();
  },
  render() {
    let { card, addCard, editCard } = this.props;
    if ( card ) {
      var [ exp_1, exp_2 ] = card.exp_date.split('/');
    }
    card = card || [];
    return (<div className="jumbotron row">
        <h2>{ editCard ? 'Edit Card' : 'New Card' } </h2>
        <form>
          <div className="form-group col-xs-12">
            <input className="form-control" ref="number" placeholder="Number Card *" defaultValue={card.number} />
          </div>
          <div className="form-group">
            <div className="col-xs-5">
              <input className="form-control" ref="exp_1" placeholder="Expiry month*" defaultValue={exp_1} />
            </div>
            <div className="col-xs-2">
              /
            </div>
            <div className="col-xs-5">
              <input className="form-control" ref="exp_2" placeholder="Expiry year*" defaultValue={exp_2} />
            </div>
          </div>
          <div className="form-group col-xs-12">
            <select className="form-control" ref="status" name='status' defaultValue={card.status}>
              {ListStatus.map(list => <option value={list[0]} key={_.uniqueId('list-')}>{list[1]}</option>)}
            </select>
          </div>
          <div className="col-xs-12">
            <Link to={`/card/`}> Cancel </Link>
            { addCard
              ? <button className="btn" onClick={this.addCard}> Add Card</button>
              : <button className="btn" onClick={this.editCard}> Update Card</button>
            }
          </div>
        </form>
      </div>);
  },
  addCard(ev) {
    ev.preventDefault();
    this.props.addCard(Object.assign({}, this.props.card, {
      number: ReactDOM.findDOMNode(this.refs.number).value,
      exp_1: ReactDOM.findDOMNode(this.refs.exp_1).value,
      exp_2: ReactDOM.findDOMNode(this.refs.exp_2).value,
      status: ReactDOM.findDOMNode(this.refs.status).value,
    }));
    browserHistory.push(`/card`);
  },
  editCard(ev) {
    ev.preventDefault();
    this.props.editCard(Object.assign({}, this.props.card, {
      number: ReactDOM.findDOMNode(this.refs.number).value,
      exp_1: ReactDOM.findDOMNode(this.refs.exp_1).value,
      exp_2: ReactDOM.findDOMNode(this.refs.exp_2).value,
      status: ReactDOM.findDOMNode(this.refs.status).value,
      id: this.props.card.id
    }));
    browserHistory.push(`/card`);
  }
});

export default FormCard;