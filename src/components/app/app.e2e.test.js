import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';
import OffersList from '../offers-list/offers-list.jsx';
import OFFERS_TESTS from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`App Component`, () => {
  it(`Should mouse over be triggered`, () => {
    const appComponent = mount(
        <App offers={OFFERS_TESTS} />
    );

    const card = appComponent.find(`.place-card`).first();

    card.simulate(`mouseover`, {});

    expect(appComponent.find(OffersList).state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
  });

  it(`Should offer title be clicked and change state`, () => {
    const appComponent = mount(
        <App offers={OFFERS_TESTS} />
    );

    const title = appComponent.find(`h2.place-card__name`).first();

    title.simulate(`click`, {});

    expect(appComponent.state(`clickedOfferId`)).toBe(OFFERS_TESTS[0].id);
  });
});
