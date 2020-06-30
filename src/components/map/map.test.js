import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map';

const LOCATIONS = [
  {latitude: 52.3909553943508, longitude: 4.85309666406198},
  {latitude: 52.369553943508, longitude: 4.85309666406198},
  {latitude: 52.3909553943508, longitude: 4.929309666406198},
  {latitude: 52.3809553943508, longitude: 4.939309666406198},
];

it(`Render Map component`, () => {
  const tree = renderer
    .create(<Map locations={LOCATIONS} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
