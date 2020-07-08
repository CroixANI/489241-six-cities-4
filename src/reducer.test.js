import {reducer, ActionCreator, ActionType} from './reducer';

import {OFFERS_TESTS, CITIES_TESTS} from './mocks/offers-tests';
import {SORT_TYPE} from './data/constants';

describe(`Reducer should work correctly`, () => {
  it(`Reducer with no incoming parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: ``,
      cities: [],
      filteredOffers: [],
      allOffers: []
    });
  });

  it(`Reducer should load data`, () => {
    const filteredOffers = OFFERS_TESTS.filter((offer) => offer.location.city === `Amsterdam`);
    expect(reducer(void 0, ActionCreator.loadData(OFFERS_TESTS))).toEqual({
      city: CITIES_TESTS[0],
      cities: CITIES_TESTS,
      filteredOffers,
      allOffers: OFFERS_TESTS,
      sortType: SORT_TYPE.POPULAR
    });
  });

  it(`Reducer with Change City action should change city`, () => {
    expect(reducer({
      city: ``,
      cities: [],
      filteredOffers: [],
      allOffers: []}, ActionCreator.changeCity(`Amsterdam`)))
    .toEqual({
      city: `Amsterdam`,
      cities: [],
      filteredOffers: [],
      allOffers: []
    });
  });

  it(`Reducer with List Offers action should filter offers by city`, () => {
    expect(reducer({
      city: `Amsterdam`,
      cities: [],
      filteredOffers: [],
      allOffers: OFFERS_TESTS},
    ActionCreator.listOffers()))
    .toEqual({
      city: `Amsterdam`,
      cities: [],
      filteredOffers: OFFERS_TESTS.filter((offer) => offer.location.city === `Amsterdam`),
      allOffers: OFFERS_TESTS});
  });
});

describe(`Action creators should work correctly`, () => {
  it(`Action creator for load data should create correct action`, () => {
    expect(ActionCreator.loadData(OFFERS_TESTS)).toEqual({
      type: ActionType.LOAD_DATA,
      payload: OFFERS_TESTS
    });
  });

  it(`Action creator for list offers should create correct action`, () => {
    expect(ActionCreator.listOffers()).toEqual({
      type: ActionType.LIST_OFFERS
    });
  });

  it(`Action creator for change city should create correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    });
  });
});
