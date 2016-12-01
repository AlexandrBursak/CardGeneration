/**
 * Created by bursak on 11/24/16.
 */

export const cards = ( state, action ) => {
  let newCard = {};
  let max = Math.pow( 10, 16 );
  let min = Math.pow( 10, 15 );
  let number = Math.floor( Math.random() * (max - min) ) + min;

  switch (action.type) {
    case 'AUTO_ADD_CARD':
      newCard = Object.assign({}, action.data, {
        number: number.toString().replace(/([\s-_]+)/g, '').replace(/(\d{4})/g, '$1 ').trim(),
        exp_date: ( Math.floor( Math.random() * (12 - 1) ) + 1 ) + '/' + ( Math.floor( Math.random() * (50 - 16) ) + 16 ),
        status: Math.round( Math.random() ),
        id: +new Date
      });
      return state.concat([newCard]);
    case 'ADD_CARD':
      console.log(action);
      newCard = {
        number: action.data.number.toString().replace(/([\s-_]+)/g, '').replace(/(\d{4})/g, '$1 ').trim(),
        exp_date: action.data.exp_1 + '/' + action.data.exp_2,
        status: action.data.status,
        id: +new Date
      };
      return state.concat([newCard]);
    case 'DELETE_CARD':
      return state.filter(card => card.id !== action.data);
    default:
      return state || [];
  }
};
