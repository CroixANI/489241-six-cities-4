import React from 'react';
import renderer from 'react-test-renderer';

import CitiesContainer from './cities-container';

const CITIES = [`Minsk`, `Brest`, `Grodno`];

it(`Render Map component`, () => {
  const tree = renderer
    .create(<CitiesContainer activeOption={CITIES[0]} options={CITIES} onOptionSelected={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
