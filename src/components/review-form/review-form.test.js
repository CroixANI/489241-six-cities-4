import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import ReviewForm from './review-form.jsx';
import NameSpace from '../../reducer/name-space';

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

it(`Render Review Form component`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <ReviewForm currentOfferId={1} />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
