import React from 'react';
import renderer from 'react-test-renderer';

import Review from './review';
import {REVIEWS_TEST} from '../../mocks/offers-tests';

it(`Render Review component`, () => {
  const tree = renderer
    .create(<Review review={REVIEWS_TEST[0]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
