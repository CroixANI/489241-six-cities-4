import React from 'react';
import renderer from 'react-test-renderer';

import ReviewRating from './review-rating';

it(`Render Review Rating component`, () => {
  const tree = renderer
    .create(<ReviewRating rating={4.25} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
