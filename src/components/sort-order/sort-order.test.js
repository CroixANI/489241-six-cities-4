import React from 'react';
import renderer from 'react-test-renderer';

import SortMenu from './sort-menu';
import {SORT_TYPE} from '../../data/constants';

describe(`Render Sort Menu component`, () => {
  it(`Render Sort Menu component as opened`, () => {
    const options = Object.values(SORT_TYPE);
    const activeOption = options[0];
    const tree = renderer
      .create(<SortMenu isOpened={true} options={options} activeOption={activeOption} onMenuClicked={() => {}} onOptionSelected={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Sort Menu component as closed`, () => {
    const options = Object.values(SORT_TYPE);
    const activeOption = options[0];
    const tree = renderer
      .create(<SortMenu isOpened={false} options={options} activeOption={activeOption} onMenuClicked={() => {}} onOptionSelected={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

