import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import OfferCard from './offer-card';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Offer Card component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <OfferCard offer={OFFERS_TESTS[0]} onHover={() => {}} onFavoriteToggle={() => {}} />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
