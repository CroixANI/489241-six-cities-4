import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';

it(`Render Main component`, () => {
  const tree = renderer
    .create(<Main offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} onOfferTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
