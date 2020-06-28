import React from 'react';
import renderer from 'react-test-renderer';

import Offer from './offer';
import OFFERS from '../../mocks/offers';

it(`Render Offer Card component`, () => {
  const tree = renderer
    .create(<Offer offer={OFFERS[0]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
