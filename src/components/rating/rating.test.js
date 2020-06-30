import React from 'react';
import renderer from 'react-test-renderer';

import Rating from './rating';

it(`Render Rating component`, () => {
  const tree = renderer
    .create(<Rating rating={4.25} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
