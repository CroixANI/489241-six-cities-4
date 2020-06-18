import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';
import OFFERS_TITLES from '../../mocks/offers-titles';

it(`Render Main component`, () => {
  const tree = renderer
    .create(<App titles={OFFERS_TITLES} onOfferTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
