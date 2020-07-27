import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Offer from './offer';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.APP]: {
    city: CITIES_TESTS[0],
    currentOfferId: OFFERS_TESTS[0].id,
    sortType: SORT_TYPE.POPULAR,
  },
  [NameSpace.DATA]: {
    cities: CITIES_TESTS,
    offers: OFFERS_TESTS,
  },
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

it(`Render Offer component`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Offer onOfferTitleClick={() => {}} />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
