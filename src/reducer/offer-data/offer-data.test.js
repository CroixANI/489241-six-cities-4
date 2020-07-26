import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionCreator, ActionType, OperationCreator} from './offer-data';

import {OFFERS_TESTS, REVIEWS_TEST} from '../../mocks/offers-tests';

const api = createAPI(() => {});

describe(`Reducer should work correctly`, () => {
  it(`Reducer with no incoming parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      reviews: [],
      nearBy: [],
      isActionInProgress: false,
    });
  });

  it(`Reducer should load reviews`, () => {
    expect(reducer(void 0, ActionCreator.loadReviews(REVIEWS_TEST)))
    .toEqual({
      reviews: REVIEWS_TEST,
      nearBy: [],
      isActionInProgress: false,
    });
  });

  it(`Reducer should load near by offers`, () => {
    expect(reducer(void 0, ActionCreator.loadNearBy(OFFERS_TESTS)))
    .toEqual({
      reviews: [],
      nearBy: OFFERS_TESTS,
      isActionInProgress: false,
    });
  });

  it(`Reducer should change 'is action in progress' flag`, () => {
    expect(reducer(void 0, ActionCreator.setInProgress(false)))
    .toEqual({
      reviews: [],
      nearBy: [],
      isActionInProgress: false,
    });

    expect(reducer(void 0, ActionCreator.setInProgress(true)))
    .toEqual({
      reviews: [],
      nearBy: [],
      isActionInProgress: true,
    });
  });
});

describe(`Action creators should work correctly`, () => {
  it(`Action creator for load reviews should create correct action`, () => {
    expect(ActionCreator.loadReviews(REVIEWS_TEST)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: REVIEWS_TEST
    });
  });

  it(`Action creator for load near by offers should create correct action`, () => {
    expect(ActionCreator.loadNearBy(OFFERS_TESTS)).toEqual({
      type: ActionType.LOAD_NEAR_BY,
      payload: OFFERS_TESTS
    });
  });

  it(`Action creator for setting 'is action in progress' flag should create correct action`, () => {
    expect(ActionCreator.setInProgress(false)).toEqual({
      type: ActionType.SET_IN_PROGRESS,
      payload: false
    });

    expect(ActionCreator.setInProgress(true)).toEqual({
      type: ActionType.SET_IN_PROGRESS,
      payload: true
    });
  });
});

describe(`Operations work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();

  it(`Should make correct API call to /comments/:hotel_id`, () => {
    const offerId = 1;
    const loadReviews = OperationCreator.loadReviews(offerId);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, {fake: true});

    loadReviews(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}]
        });
      });
  });

  it(`Should make correct API call to /hotels/:hotel_id/nearby`, () => {
    const offerId = 1;
    const loadNearBy = OperationCreator.loadNearBy(offerId);

    apiMock
      .onGet(`/hotels/1/nearby`)
      .reply(200, {fake: true});

    loadNearBy(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEAR_BY,
          payload: [{fake: true}]
        });
      });
  });
});
