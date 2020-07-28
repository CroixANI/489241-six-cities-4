import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import Favorites from './favorites.jsx';

import {getBookmarkedOffers} from '../../reducer/data/selectors';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';
import NameSpace from '../../reducer/name-space';
import {createAPI} from '../../api';
import {createOfferDto} from '../../data/offer';

Enzyme.configure({
  adapter: new Adapter(),
});

const offerDtoRemovedFromFavorite = createOfferDto(OFFERS_TESTS[0]);
// eslint-disable-next-line camelcase
offerDtoRemovedFromFavorite.is_favorite = false;
const api = createAPI(() => {});
const apiMock = new MockAdapter(api);
apiMock
      .onPost(`/favorite/${OFFERS_TESTS[0].id}/0`)
      .reply(200, offerDtoRemovedFromFavorite);

const mockStore = configureStore([thunk.withExtraArgument(api)]);

describe(`Favorites component E2E tests`, () => {
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
      authorizationStatus: `AUTH`,
    },
  });

  it(`Should offer favorite toggle button be clicked and change favorite state`, () => {
    const wrapper = mount(
        <Provider store={store}>
          <Favorites />
        </Provider>
    );

    const countBefore = getBookmarkedOffers(store.getState()).length;
    const component = wrapper.find(Favorites).first();
    const favoriteToggleButton = component.find(`.place-card__bookmark-button`).first();

    favoriteToggleButton.simulate(`click`, {});

    store.subscribe(() => {
      const countAfter = getBookmarkedOffers(store.getState()).length;
      expect(countAfter).toBe(countBefore - 1);
    });
  });
});
