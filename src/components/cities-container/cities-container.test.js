import React from 'react';
import renderer from 'react-test-renderer';

import CitiesContainer from './cities-container';

const CITIES = [`Minsk`, `Brest`, `Grodno`];

it(`Render Map component`, () => {
  const tree = renderer
    .create(<CitiesContainer activeItem={CITIES[0]} items={CITIES} onItemSelected={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
