import React from 'react';
import renderer from 'react-test-renderer';

import OfferRating from './offer-rating';

it(`Render Offer Rating component`, () => {
  const tree = renderer
    .create(<OfferRating rating={4.25} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
