import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import FavoritesEmpty from './favorites-empty.jsx';

it(`Render Favorites Empty component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FavoritesEmpty />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
