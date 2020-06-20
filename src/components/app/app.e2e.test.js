import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';
import OFFERS_TITLES from '../../mocks/offers-titles';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`App Component`, () => {
  it(`Should offer title be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const appComponent = mount(
        <App titles={OFFERS_TITLES} onOfferTitleClick={onOfferTitleClick} />
    );

    const allTitles = appComponent.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(OFFERS_TITLES.length);
  });
});
