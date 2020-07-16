import React from 'react';
import renderer from 'react-test-renderer';

import CitiesMenu from './cities-menu.jsx';

const CITIES = [`Minsk`, `Brest`, `Grodno`];

it(`Render Cities Menu component`, () => {
  const tree = renderer
    .create(<CitiesMenu activeItem={CITIES[0]} items={CITIES} onItemSelected={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
