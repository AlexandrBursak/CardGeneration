/**
 * Created by bursak on 12/6/16.
 */

export const orderCard = ( state, action ) => {
  // console.log(action);
  // console.log('red order card');
  switch (action.type) {
    case 'ORDER_CARDS_BY_SMTH':
      return action.data;
    default:
      return state || [ '', '' ];
  }
};
