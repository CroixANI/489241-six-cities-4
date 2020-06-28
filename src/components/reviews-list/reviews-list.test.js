import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsList from './reviews-list';
import OFFERS_TESTS from '../../mocks/offers-tests';

it(`Render Review component`, () => {
  const tree = renderer
    .create(<ReviewsList reviews={OFFERS_TESTS[0].reviews} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
