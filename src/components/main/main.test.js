import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';
import OFFERS_TESTS from '../../mocks/offers-tests';

it(`Render Main component`, () => {
  const tree = renderer
    .create(<Main offers={OFFERS_TESTS} onOfferTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
