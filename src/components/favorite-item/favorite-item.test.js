import React from 'react';
import renderer from 'react-test-renderer';

import FavoriteItem from './favorite-item.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

it(`Render Favorite Item component`, () => {
  const tree = renderer
    .create(<FavoriteItem offer={OFFERS_TESTS[0]} onFavoriteToggle={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
