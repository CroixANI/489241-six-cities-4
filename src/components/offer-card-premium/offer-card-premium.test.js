import React from 'react';
import renderer from 'react-test-renderer';

import OfferCardPremium from './offer-card-premium';
import OFFERS from '../../mocks/offers';

it(`Render Offer Card Premium component`, () => {
  const tree = renderer
    .create(<OfferCardPremium offer={OFFERS[0]} onHover={() => {}} onTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
