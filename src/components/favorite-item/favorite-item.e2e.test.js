import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FavoriteItem from './favorite-item.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Favorite Item component E2E tests`, () => {
  it(`Should favorite button be clicked`, () => {
    let clickedOffer = null;
    const handleFavoriteToggle = jest.fn((offer) => {
      clickedOffer = offer;
    });

    const citiesList = shallow(
        <FavoriteItem offer={OFFERS_TESTS[0]} onFavoriteToggle={handleFavoriteToggle} />
    );

    const link = citiesList.find(`button.place-card__bookmark-button`).first();
    link.prop(`onClick`)();

    expect(handleFavoriteToggle.mock.calls.length).toBe(1);
    expect(clickedOffer).toBe(OFFERS_TESTS[0]);
  });
});
