import React from 'react';
import renderer from 'react-test-renderer';

import SortOffersMenu from './sort-offers-menu.jsx';
import {SORT_TYPE} from '../../data/constants';

describe(`Render Sort Offers Menu component`, () => {
  it(`Render Sort Offers Menu component as opened`, () => {
    const options = Object.values(SORT_TYPE);
    const activeOption = options[0];
    const tree = renderer
      .create(<SortOffersMenu isOpened={true} activeOption={activeOption} onMenuClicked={() => {}} onSortTypeChange={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Sort Offers Menu component as closed`, () => {
    const options = Object.values(SORT_TYPE);
    const activeOption = options[0];
    const tree = renderer
      .create(<SortOffersMenu isOpened={false} activeOption={activeOption} onMenuClicked={() => {}} onSortTypeChange={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

