import React from 'react';
import renderer from 'react-test-renderer';

import CitiesMenu from './cities-menu.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const CITIES = [`Minsk`, `Brest`, `Grodno`];

it(`Render Cities Menu With Active item component`, () => {
  const CitiesMenuWithActive = withActiveItem(CitiesMenu);

  const tree = renderer
    .create(<CitiesMenuWithActive activeItem={CITIES[0]} items={CITIES} onItemSelected={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
