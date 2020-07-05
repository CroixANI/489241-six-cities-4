import React from 'react';
import renderer from 'react-test-renderer';

import Review from './review';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Review component`, () => {
  const tree = renderer
    .create(<Review review={OFFERS_TESTS[0].reviews[0]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
