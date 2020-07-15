import React from 'react';
import PropTypes from 'prop-types';

import SortMenu from './sort-menu.jsx';
import withOpenedClosedState from '../../hocs/with-opened-closed-state/with-opened-closed-state.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import {SORT_TYPE} from '../../data/constants.js';

const sortOptions = Object.values(SORT_TYPE);

const SortOffers = (props) => {
  const {onSortTypeChange, activeOption} = props;
  const WrappedComponent = withOpenedClosedState(withActiveItem(SortMenu));

  return <WrappedComponent items={sortOptions} activeItem={activeOption} onItemSelected={onSortTypeChange} {...props} />;
};

SortOffers.propTypes = {
  onSortTypeChange: PropTypes.func.isRequired,
  activeOption: PropTypes.string.isRequired
};

export default SortOffers;
