import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CitiesContainer from './cities-container';
import {CITIES_TESTS} from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Cities Container Component`, () => {
  it(`Should title be clicked`, () => {
    let clickedCityName = null;
    const onCityTitleClick = jest.fn((city) => {
      clickedCityName = city;
    });

    const citiesList = shallow(
        <CitiesContainer activeItem={CITIES_TESTS[0]} items={CITIES_TESTS} onItemSelected={onCityTitleClick} />
    );

    const link = citiesList.find(`a.locations__item-link`).first();
    link.prop(`onClick`)();

    expect(onCityTitleClick.mock.calls.length).toBe(1);
    expect(clickedCityName).toBe(CITIES_TESTS[0]);
  });
});
