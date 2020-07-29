import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import {CitiesMenu} from './cities-menu.jsx';

const CITIES = [`Minsk`, `Brest`, `Grodno`];

const match = {
  params: {
  },
};

it(`Render Cities Menu component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <CitiesMenu selectedCity={CITIES[0]} cities={CITIES} match={match} changeCity={() => {}} />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
