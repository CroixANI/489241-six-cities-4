import React from 'react';
import renderer from 'react-test-renderer';

import {OffersCardsList} from './offers-cards-list.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';

it(`Render Offers List component`, () => {
  const tree = renderer
    .create(<OffersCardsList sortType={SORT_TYPE.POPULAR} items={OFFERS_TESTS} onOfferTitleClick={() => {}} onSort={() => {}} onItemSelected={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render empty Offers List component`, () => {
  const tree = renderer
    .create(<OffersCardsList sortType={SORT_TYPE.POPULAR} items={[]} onOfferTitleClick={() => {}} onSort={() => {}} onItemSelected={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
