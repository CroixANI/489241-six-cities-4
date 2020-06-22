import React from 'react';
import renderer from 'react-test-renderer';

import Offer from './offer';
import OFFER_DETAILS from '../../mocks/offer-details';

it(`Render Offer Card component`, () => {
  const tree = renderer
    .create(<Offer offer={OFFER_DETAILS} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
