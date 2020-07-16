import React from 'react';
import renderer from 'react-test-renderer';

import CitiesMenuWithActive from './cities-menu-wth-active';

const CITIES = [`Minsk`, `Brest`, `Grodno`];

it(`Render Cities Menu With Active item component`, () => {
  const tree = renderer
    .create(<CitiesMenuWithActive selectedCity={CITIES[0]} cities={CITIES} onCityClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
