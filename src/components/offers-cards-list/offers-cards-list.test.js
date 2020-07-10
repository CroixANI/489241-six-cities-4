import React from 'react';
import renderer from 'react-test-renderer';

import {OffersCardsList} from './offers-cards-list';
import {OFFERS_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';

it(`Render Offers List component`, () => {
  const tree = renderer
    .create(<OffersCardsList sortType={SORT_TYPE.POPULAR} offers={OFFERS_TESTS} onOfferTitleClick={() => {}} onSort={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render empty Offers List component`, () => {
  const tree = renderer
    .create(<OffersCardsList sortType={SORT_TYPE.POPULAR} offers={[]} onOfferTitleClick={() => {}} onSort={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
