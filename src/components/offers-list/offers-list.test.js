import React from 'react';
import renderer from 'react-test-renderer';

import OffersList from './offers-list';
import OFFERS from '../../mocks/offers';

it(`Render Offers List component`, () => {
  const tree = renderer
    .create(<OffersList offers={OFFERS} onOfferTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
