import React from 'react';
import PropTypes from 'prop-types';

const SortMenu = (props) => {
  const {isOpened, items, activeItem, onMenuClicked, onItemSelected} = props;
  const menuClass = `places__options places__options--custom ${isOpened ? `places__options--opened` : ``}`;
  const handleMenuItemClick = (sortOption) => (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    return onItemSelected(sortOption);
  };

  return (
    <form onClick={onMenuClicked} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {activeItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={menuClass}>
        {items.map((item) => (
          <li key={item} onClick={handleMenuItemClick(item)} className={`places__option ${item === activeItem ? `places__option--active` : ``}`} tabIndex="0">{item}</li>
        ))}
      </ul>
    </form>
  );
};

SortMenu.propTypes = {
  onMenuClicked: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeItem: PropTypes.string.isRequired
};

export default SortMenu;
