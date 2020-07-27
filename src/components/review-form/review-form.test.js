import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import ReviewForm from './review-form.jsx';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.APP]: {
    currentOfferId: 1,
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

it(`Render Review Form component`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <ReviewForm />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
