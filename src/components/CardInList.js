/**
 * Created by bursak on 11/28/16.
 */
import React from 'react';
import { Link } from 'react-router';
import ListStatus from '../constants/ListStatus';
import { connect } from 'react-redux';
import { deleteCard } from '../actions/action';

import Dialog from 'react-bootstrap-dialog'

const mapDispatchToProps = dispatch => ({
  deleteCard: cardId => dispatch(deleteCard(cardId)),
});

const CardInList = React.createClass({
  render() {
    let props = this.props;
    console.log(props);
    let status = props.card.status < 2 ? props.card.status : 0;
    return (<tr>
      <td className="number"><Link to={`/card/${props.card.id}`}> {this.formatNumberCard(props.card.number)} </Link></td>
      <td className="exp"> {props.card.exp_date} </td>
      <td className="status">
        {ListStatus[status][1]}
      </td>
      <td>
        <Link className="btn btn-default btn-xs" to={`/card/${props.card.id}/edit`}> Edit </Link>
        <button className="btn btn-danger btn-xs" ref="delete" onClick={this.DeleteCard}> Delete </button>
        <Dialog ref="dialog" />
      </td>
    </tr>);
  },
  DeleteCard(ev) {
    let props = this.props;
    this.refs.dialog.show({
      title: 'Remove Card?',
      body: 'Are you sure that you would like to remove the Card: ' + this.formatNumberCard(props.card.number),
      actions: [
        Dialog.CancelAction(() => {
          console.log('Cancel was clicked!');
        }),
        Dialog.OKAction(() => {
          console.log('OK was clicked!');
          props.deleteCard(props.cardId);
        })
      ],
      bsSize: 'small',
      primaryClassName: 'btn-success'
    });
  },
  formatNumberCard( number ) {
    return number.toString().replace(/(\d{4})/g, '$1 ').trim();
  }
});

export default connect(null, mapDispatchToProps)(CardInList);