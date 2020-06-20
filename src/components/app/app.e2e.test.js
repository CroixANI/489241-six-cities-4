import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';
import OFFERS_TESTS from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`App Component`, () => {
  it(`Should offer title be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const appComponent = mount(
        <App offers={OFFERS_TESTS} />
    );

    const allTitles = appComponent.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(OFFERS_TESTS.length);
  });
});
