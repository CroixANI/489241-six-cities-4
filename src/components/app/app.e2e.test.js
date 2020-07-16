import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './app';
import OffersCardsList from '../offers-cards-list/offers-cards-list.jsx';
import {ActionCreator} from '../../reducer';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`App Component`, () => {
  const store = mockStore({
    filteredOffers: OFFERS_TESTS,
    city: CITIES_TESTS[0],
    sortType: SORT_TYPE.POPULAR,
    cities: CITIES_TESTS,
    currentOfferId: null
  });

  it(`Should mouse over be triggered`, () => {
    const appComponent = mount(
        <Provider store={store}>
          <App />
        </Provider>
    );

    const card = appComponent.find(`.place-card`).first();

    card.simulate(`mouseenter`, {});

    expect(appComponent.find(OffersCardsList).childAt(0).instance().state.activeItem).toBe(OFFERS_TESTS[0]);
  });

  it(`Should offer title be clicked and change state`, () => {
    const wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
    );

    const appComponent = wrapper.find(App).first();
    const title = appComponent.find(`h2.place-card__name`).first();

    title.simulate(`click`, {});

    const actions = store.getActions();
    expect(actions[0]).toEqual(ActionCreator.changeCurrentOffer(OFFERS_TESTS[0].id));
  });
});
