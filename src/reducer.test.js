import {reducer, ActionCreator} from './reducer';

import {OFFERS_TESTS, CITIES_TESTS} from './mocks/offers-tests';

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
    allOffers: OFFERS_TESTS
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
