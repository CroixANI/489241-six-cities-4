import React from 'react';
import PropTypes from 'prop-types';

import SortMenu from './sort-menu.jsx';
import withOpenedClosedState from '../../hocs/with-opened-closed-state/with-opened-closed-state.jsx';
import withSelectableOption from '../../hocs/with-select-option/with-select-option.jsx';
import {SORT_TYPE} from '../../data/constants.js';

const sortOptions = Object.values(SORT_TYPE);

const SortOffers = (props) => {
  const {onSortTypeChange, activeOption} = props;
  const WrappedComponent = withOpenedClosedState(withSelectableOption(SortMenu, sortOptions, activeOption, onSortTypeChange));

  return <WrappedComponent />;
};

SortOffers.propTypes = {
  onSortTypeChange: PropTypes.func.isRequired,
  activeOption: PropTypes.string.isRequired
};

export default SortOffers;
