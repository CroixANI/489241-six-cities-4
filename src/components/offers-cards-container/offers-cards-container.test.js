import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Offers Container component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <OffersCardsContainer offers={OFFERS_TESTS} onOfferHover={() => {}} onFavoriteToggle={() => {}} />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
