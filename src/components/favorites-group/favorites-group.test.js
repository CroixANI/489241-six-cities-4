import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import FavoritesGroup from './favorites-group.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Favorites Group component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FavoritesGroup offers={OFFERS_TESTS} city={`Amsterdam`} onFavoriteToggle={() => {}} />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
