import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import {OffersCardsList} from './offers-cards-list.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';

it(`Render Offers List component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <OffersCardsList sortType={SORT_TYPE.POPULAR} items={OFFERS_TESTS} onSort={() => {}} onItemSelected={() => {}} onFavoriteToggle={() => {}} />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render empty Offers List component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <OffersCardsList sortType={SORT_TYPE.POPULAR} items={[]} onSort={() => {}} onItemSelected={() => {}} onFavoriteToggle={() => {}} />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
