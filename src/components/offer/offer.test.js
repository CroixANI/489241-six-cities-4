import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import history from '../../history';
import Offer from './offer';
import {OFFERS_TESTS, CITIES_TESTS, REVIEWS_TEST} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';
import NameSpace from '../../reducer/name-space';
import {createAPI} from '../../api';
import {createOfferReviewDto} from '../../data/offer-review';
import {createOfferDto} from '../../data/offer';

const match = {
  params: {
    id: `1`,
  },
};

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);
apiMock
      .onGet(`/comments/${OFFERS_TESTS[0].id}`)
      .reply(200, REVIEWS_TEST.map((x) => createOfferReviewDto(x)));
apiMock
      .onGet(`/hotels/${OFFERS_TESTS[0].id}/nearby`)
      .reply(200, OFFERS_TESTS.map((x) => createOfferDto(x)));

const mockStore = configureStore([thunk.withExtraArgument(api)]);

const store = mockStore({
  [NameSpace.APP]: {
    city: CITIES_TESTS[0],
    sortType: SORT_TYPE.POPULAR,
  },
  [NameSpace.DATA]: {
    cities: CITIES_TESTS,
    offers: OFFERS_TESTS,
    isDataLoaded: true
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
          <Router history={history}>
            <Offer match={match} />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
