/**
 * Created by bursak on 12/6/16.
 */

export const cardFilter = ( state, action ) => {
  // console.log('red card filter');
  switch (action.type) {
    case 'FILTER_CARDS':
      return action.data;
    default:
      return state || [];
  }
};