import React from 'react';
import renderer from 'react-test-renderer';

import OfferCardPremium from './offer-card-premium';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Offer Card Premium component`, () => {
  const tree = renderer
    .create(<OfferCardPremium offer={OFFERS_TESTS[0]} onHover={() => {}} onTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
