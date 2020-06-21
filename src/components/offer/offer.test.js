import React from 'react';
import renderer from 'react-test-renderer';

import Offer from './offer';

it(`Render Offer Card component`, () => {
  const tree = renderer
    .create(<Offer />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
