import React from 'react';
import renderer from 'react-test-renderer';

import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Offers List component`, () => {
  const tree = renderer
    .create(<OffersCardsContainer offers={OFFERS_TESTS} onOfferTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
