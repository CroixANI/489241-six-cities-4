import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import OffersCardsList from '../offers-cards-list/offers-cards-list.jsx';
import OfferCard from '../offer-card/offer-card.jsx';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';
import NameSpace from '../../reducer/name-space';
import {getFilteredOffers} from '../../reducer/app/selectors';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.APP]: {
    city: CITIES_TESTS[0],
    currentOfferId: null,
    sortType: SORT_TYPE.POPULAR,
  },
  [NameSpace.DATA]: {
    cities: CITIES_TESTS,
    offers: OFFERS_TESTS,
  },
  [NameSpace.USER]: {
    authorizationStatus: `NO_AUTH`,
  },
});


describe(`Offers List Component`, () => {
  const filteredOffers = getFilteredOffers(store.getState());

  it(`Should mouse over be triggered and change component state`, () => {
    const offersList = mount(
        <Provider store={store}>
          <OffersCardsList onOfferTitleClick={() => {}} />
        </Provider>
    );

    const card = offersList.find(`.place-card`).first();

    card.simulate(`mouseenter`, {});

    expect(offersList.find(OffersCardsList).childAt(0).instance().state.activeItem).toBe(OFFERS_TESTS[0]);
    expect(offersList.find(OfferCard).length).toBe(filteredOffers.length);
  });

  it(`Should offers titles be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const offersList = mount(
        <Provider store={store}>
          <OffersCardsList onOfferTitleClick={onOfferTitleClick} />
        </Provider>
    );

    const allTitles = offersList.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(filteredOffers.length);
  });
});
