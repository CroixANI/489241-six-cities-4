import React from 'react';
import PropTypes from 'prop-types';

const SortMenu = (props) => {
  const {isOpened, options, activeOption, onMenuClicked, onOptionSelected} = props;
  const menuClass = `places__options places__options--custom ${isOpened ? `places__options--opened` : ``}`;

  return (
    <form onClick={onMenuClicked} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={menuClass}>
        {options.map((option) => (
          <li key={option} onClick={onOptionSelected} className={`places__option ${option === activeOption ? `places__option--active` : ``}`} tabIndex="0" data-option={option}>{option}</li>
        ))}
      </ul>
    </form>
  );
};

SortMenu.propTypes = {
  onMenuClicked: PropTypes.func.isRequired,
  onOptionSelected: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeOption: PropTypes.string.isRequired
};

export default SortMenu;
