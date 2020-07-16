import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SortOffersMenu from './sort-offers-menu.jsx';
import {SORT_TYPE} from '../../data/constants';

Enzyme.configure({
  adapter: new Adapter(),
});

const options = Object.values(SORT_TYPE);

describe(`Sort Offers Component`, () => {
  it(`Should menu item be clicked`, () => {
    let sortType = null;
    const onSortTypeChange = jest.fn((selectedSortType) => {
      sortType = selectedSortType;
    });

    const sortComponent = mount(
        <SortOffersMenu activeOption={SORT_TYPE.POPULAR} onSortTypeChange={onSortTypeChange} />
    );

    const menuItem = sortComponent.find(`li.places__option`).last();
    menuItem.simulate(`click`, {preventDefault: () => {}, stopPropagation: () => {}});

    expect(sortType).toBe(options[options.length - 1]);
  });
});
