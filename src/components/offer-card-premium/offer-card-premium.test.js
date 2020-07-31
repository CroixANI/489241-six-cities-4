import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import OfferCardPremium from './offer-card-premium';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Offer Card Premium component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <OfferCardPremium offer={OFFERS_TESTS[0]} onHover={() => {}} onFavoriteToggle={() => {}} />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
