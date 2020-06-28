import React from 'react';
import renderer from 'react-test-renderer';

import Offer from './offer';
import OFFERS_TESTS from '../../mocks/offers-tests';

it(`Render Offer Card component`, () => {
  const tree = renderer
    .create(<Offer offer={OFFERS_TESTS[0]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
