import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import App from './app';
import OffersCardsList from '../offers-cards-list/offers-cards-list.jsx';
import {ActionCreator} from '../../reducer/app/app';
import {OFFERS_TESTS, CITIES_TESTS, REVIEWS_TEST} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';
import NameSpace from '../../reducer/name-space';
import {createAPI} from '../../api';
import {createOfferReviewDto} from '../../data/offer-review';
import {createOfferDto} from '../../data/offer';

Enzyme.configure({
  adapter: new Adapter(),
});

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);
apiMock
      .onGet(`/comments/${OFFERS_TESTS[0].id}`)
      .reply(200, REVIEWS_TEST.map((x) => createOfferReviewDto(x)));
apiMock
      .onGet(`/hotels/${OFFERS_TESTS[0].id}/nearby`)
      .reply(200, OFFERS_TESTS.map((x) => createOfferDto(x)));

const mockStore = configureStore([thunk.withExtraArgument(api)]);

describe(`App Component`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: CITIES_TESTS[0],
      currentOfferId: null,
      sortType: SORT_TYPE.POPULAR,
    },
    [NameSpace.DATA]: {
      cities: CITIES_TESTS,
      offers: OFFERS_TESTS,
      isDataLoaded: true,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      isAuthChecked: true,
    },
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
