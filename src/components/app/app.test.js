import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';

it(`Render Main component`, () => {
  const tree = renderer
    .create(<App offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
