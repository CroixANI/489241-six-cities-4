import React from 'react';
import renderer from 'react-test-renderer';

import OfferCard from './offer-card';
import OFFERS from '../../mocks/offers';

it(`Render Offer Card component`, () => {
  const tree = renderer
    .create(<OfferCard offer={OFFERS[0]} onHover={() => {}} onTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
