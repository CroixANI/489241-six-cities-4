import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionCreator, ActionType, OperationCreator} from './data';

import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';

const api = createAPI(() => {});

describe(`Reducer should work correctly`, () => {
  it(`Reducer with no incoming parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      cities: [],
      offers: [],
    });
  });

  it(`Reducer should load data`, () => {
    expect(reducer(void 0, ActionCreator.loadData(OFFERS_TESTS)))
    .toEqual({
      cities: CITIES_TESTS,
      offers: OFFERS_TESTS
    });
  });
});

describe(`Action creators should work correctly`, () => {
  it(`Action creator for load data should create correct action`, () => {
    expect(ActionCreator.loadData(OFFERS_TESTS)).toEqual({
      type: ActionType.LOAD_DATA,
      payload: OFFERS_TESTS
    });
  });
});

describe(`Operations work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();

  it(`Should make correct API call to /hotels`, () => {
    const loadHotels = OperationCreator.loadHotels();

    apiMock
      .onGet(`/hotels`)
      .reply(200, {fake: true});

    loadHotels(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_DATA,
          payload: [{fake: true}]
        });
      });
  });
});
