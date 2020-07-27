import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import ReviewsList from './reviews-list';
import {REVIEWS_TEST} from '../../mocks/offers-tests';
import NameSpace from '../../reducer/name-space';
import {ActionCreator, AuthorizationStatus} from '../../reducer/user/user';

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: `NO_AUTH`,
    currentUser: null,
  },
  [NameSpace.OFFER_DATA]: {
    reviews: [],
    nearBy: [],
    currentReview: {
      reviewText: ``,
      rating: ``,
      isValid: false,
      isSubmitInProgress: false,
    }
  },
});

describe(`Render Review List component`, () => {
  it(`Render Reviews List component for authenticated user`, () => {
    store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    const tree = renderer
      .create(
          <Provider store={store}>
            <ReviewsList reviews={REVIEWS_TEST} />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Reviews List component for not authenticated user`, () => {
    store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    const tree = renderer
      .create(
          <Provider store={store}>
            <ReviewsList reviews={REVIEWS_TEST} />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
