import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';

import OffersCardsListEmpty from './offers-cards-list-empty.jsx';

it(`Render Offers List Empty component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <OffersCardsListEmpty />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
