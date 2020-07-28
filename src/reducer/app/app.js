import {SORT_TYPE} from '../../data/constants';

const initialState = {
  city: ``,
  currentOfferId: null,
  sortType: SORT_TYPE.POPULAR,
  errorMessage: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_CURRENT_OFFER: `CHANGE_CURRENT_OFFER`,
  SET_ERROR_MESSAGE: `SET_ERROR_MESSAGE`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  changeCurrentOffer: (offerId) => ({
    type: ActionType.CHANGE_CURRENT_OFFER,
    payload: offerId
  }),
  setErrorMessage: (errorMessage) => ({
    type: ActionType.SET_ERROR_MESSAGE,
    payload: errorMessage
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT_TYPE:
      return Object.assign({}, state, {
        sortType: action.payload
      });
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    case ActionType.CHANGE_CURRENT_OFFER:
      return Object.assign({}, state, {
        currentOfferId: action.payload
      });
    case ActionType.SET_ERROR_MESSAGE:
      return Object.assign({}, state, {
        errorMessage: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
