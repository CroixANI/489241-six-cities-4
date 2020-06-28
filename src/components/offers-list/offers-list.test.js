import React from 'react';
import renderer from 'react-test-renderer';

import OffersList from './offers-list';
import OFFERS_TESTS from '../../mocks/offers-tests';

it(`Render Offers List component`, () => {
  const tree = renderer
    .create(<OffersList offers={OFFERS_TESTS} onOfferTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
