/**
 * Created by bursak on 11/28/16.
 */

export const autoAddCard = () => ({ type: 'AUTO_ADD_CARD' });

export const addCard = card => ({ type: 'ADD_CARD', data: card });
export const editCard = card => ({ type: 'EDIT_CARD', data: card });
export const deleteCard = cardId => ({ type: 'DELETE_CARD', data: cardId });

export const filterByCardNumber = query => ({ type: 'FILTER_CARDS', data: query });

export const orderCardsByNumber = orderBy => ({ type: 'ORDER_CARDS_BY_SMTH', data: orderBy });