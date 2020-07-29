import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OffersCardsList} from './offers-cards-list.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Offers List Component`, () => {
  it(`Should offers titles be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const offersList = mount(
        <OffersCardsList sortType={SORT_TYPE.POPULAR} items={OFFERS_TESTS} onOfferTitleClick={onOfferTitleClick} onSort={() => {}} onItemSelected={() => {}} onFavoriteToggle={() => {}} />
    );

    const allTitles = offersList.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(OFFERS_TESTS.length);
  });
});
