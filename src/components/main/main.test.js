import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';
import OFFERS_TITLES from '../../mocks/offers-titles';

it(`Render Main component`, () => {
  const tree = renderer
    .create(<Main titles={OFFERS_TITLES} onOfferTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
