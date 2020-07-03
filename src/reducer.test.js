import {reducer, ActionType} from './reducer';

import OFFERS_TESTS from './mocks/offers-tests';

it(`Reducer with empty inputs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: ``,
    cities: [],
    filteredOffers: [],
    allOffers: []
  });
});

it(`Reducer with Change City action should change city`, () => {
  expect(reducer(void 0, {type: ActionType.CHANGE_CITY, payload: `Amsterdam`})).toEqual({
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
  {type: ActionType.LIST_OFFERS}))
  .toEqual({
    city: `Amsterdam`,
    cities: [],
    filteredOffers: OFFERS_TESTS.filter((offer) => offer.location.city === `Amsterdam`),
    allOffers: OFFERS_TESTS});
});
