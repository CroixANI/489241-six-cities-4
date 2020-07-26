import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Offer from './offer';
import {OFFERS_TESTS} from '../../mocks/offers-tests';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: `NO_AUTH`,
    currentUser: null,
  },
});

it(`Render Offer Card component`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Offer offer={OFFERS_TESTS[0]} onOfferTitleClick={() => {}} authorizationStatus={`AUTH`} onReviewSubmit={() => {}} />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
