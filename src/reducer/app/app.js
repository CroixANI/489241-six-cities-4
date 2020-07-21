const initialState = {
  city: ``,
  currentOfferId: null,
  filteredOffers: [],
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LIST_OFFERS: `LIST_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_CURRENT_OFFER: `CHANGE_CURRENT_OFFER`,
};

const ActionCreator = {
  listOffers: () => ({
    type: ActionType.LIST_OFFERS
  }),
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
};

const filterOffersByCity = (offers, city) =>
  offers.filter((offer) => offer.location.city.name === city);

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
    case ActionType.LIST_OFFERS:
      return Object.assign({}, state, {
        filteredOffers: filterOffersByCity(state.allOffers, state.city)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
