import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import OfferLoading from './offer-loading.jsx';

it(`Render Offer Loading component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <OfferLoading />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
