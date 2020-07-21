import {reducer, ActionCreator, ActionType} from './app';

import {OFFERS_TESTS} from '../../mocks/offers-tests';

describe(`Reducer should work correctly`, () => {
  it(`Reducer with no incoming parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: ``,
      currentOfferId: null,
      filteredOffers: [],
    });
  });

  it(`Reducer with Change City action should change city`, () => {
    expect(reducer({
      city: ``,
      currentOfferId: null,
      filteredOffers: []}, ActionCreator.changeCity(`Amsterdam`)))
    .toEqual({
      city: `Amsterdam`,
      currentOfferId: null,
      filteredOffers: []});
  });

  it(`Reducer with List Offers action should filter offers by city`, () => {
    expect(reducer({
      city: `Amsterdam`,
      currentOfferId: null,
      filteredOffers: []},
    ActionCreator.listOffers()))
    .toEqual({
      city: `Amsterdam`,
      currentOfferId: null,
      filteredOffers: OFFERS_TESTS.filter((offer) => offer.location.city.name === `Amsterdam`)});
  });

  it(`Reducer with Change Current Offer action should change current offer id`, () => {
    expect(reducer({
      city: ``,
      currentOfferId: null,
      filteredOffers: []}, ActionCreator.changeCurrentOffer(1)))
    .toEqual({
      city: ``,
      currentOfferId: 1,
      filteredOffers: []});
  });
});

describe(`Action creators should work correctly`, () => {
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

  it(`Action creator for change sort type should create correct action`, () => {
    expect(ActionCreator.changeSortType(`Popular`)).toEqual({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `Popular`
    });
  });

  it(`Action creator for change current offer should create correct action`, () => {
    expect(ActionCreator.changeCurrentOffer(42)).toEqual({
      type: ActionType.CHANGE_CURRENT_OFFER,
      payload: 42
    });
  });
});
