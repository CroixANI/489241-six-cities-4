import React from 'react';
import renderer from 'react-test-renderer';

import {OffersCardsList} from './offers-cards-list';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Offers List component`, () => {
  const tree = renderer
    .create(<OffersCardsList offers={OFFERS_TESTS} onOfferTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render empty Offers List component`, () => {
  const tree = renderer
    .create(<OffersCardsList offers={[]} onOfferTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
