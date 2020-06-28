import React from 'react';
import renderer from 'react-test-renderer';

import OfferCardRating from './offer-card-rating';

it(`Render Offer Card Rating component`, () => {
  const tree = renderer
    .create(<OfferCardRating rating={4.25} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
