import React from 'react';
import renderer from 'react-test-renderer';

import OfferCard from './offer-card';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Offer Card component`, () => {
  const tree = renderer
    .create(<OfferCard offer={OFFERS_TESTS[0]} onHover={() => {}} onTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
