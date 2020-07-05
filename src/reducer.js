const initialState = {
  city: ``,
  cities: [],
  filteredOffers: [],
  allOffers: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LIST_OFFERS: `LIST_OFFERS`,
  LOAD_DATA: `LOAD_DATA`
};

const ActionCreator = {
  loadData: (offers) => ({
    type: ActionType.LOAD_DATA,
    payload: offers
  }),
  listOffers: () => ({
    type: ActionType.LIST_OFFERS
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  })
};

const filterOffersByCity = (offers, city) =>
  offers.filter((offer) => offer.location.city === city);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    case ActionType.LIST_OFFERS:
      return Object.assign({}, state, {
        filteredOffers: filterOffersByCity(state.allOffers, state.city)
      });
    case ActionType.LOAD_DATA:
      const filteredCities = action.payload
          .map((offer) => offer.location.city)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort();
      const city = filteredCities.length > 0 ? filteredCities[0] : ``;
      const filteredOffers = city.length > 0 ? filterOffersByCity(action.payload, city) : [];

      return Object.assign({}, state, {
        city,
        cities: filteredCities,
        allOffers: action.payload,
        filteredOffers
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
