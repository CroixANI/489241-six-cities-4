import React from 'react';
import renderer from 'react-test-renderer';

import FavoritesGroup from './favorites-group.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Favorites Group component`, () => {
  const tree = renderer
    .create(<FavoritesGroup offers={OFFERS_TESTS} city={`Amsterdam`} onFavoriteToggle={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
