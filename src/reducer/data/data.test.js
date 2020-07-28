import MockAdapter from 'axios-mock-adapter';

import {createAPI} from '../../api';
import {reducer, ActionCreator, ActionType, OperationCreator} from './data';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {createOfferDto} from '../../data/offer';
import NameSpace from '../name-space';

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

describe(`Data operations work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();

  it(`Should make correct API call to /hotels`, () => {
    const loadHotels = OperationCreator.loadHotels();
    const offersDto = OFFERS_TESTS.map((x) => createOfferDto(x));
    apiMock
      .onGet(`/hotels`)
      .reply(200, offersDto);

    loadHotels(dispatch, () => ({
      [NameSpace.DATA]: {
        cities: CITIES_TESTS,
        offers: OFFERS_TESTS,
      }
    }), api)
      .then(() => {
        // 1 - dispatch to load offers
        // 2 - dispatch to change city
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_DATA,
          payload: OFFERS_TESTS
        });
      });
  });
});
