import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import FavoriteItem from './favorite-item.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Favorite Item component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FavoriteItem offer={OFFERS_TESTS[0]} onFavoriteToggle={() => {}} />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
