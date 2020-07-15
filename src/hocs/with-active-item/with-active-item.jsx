import React from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      const {activeItem} = props;
      this.state = {
        activeItem
      };

      this._handlerMenuItemClick = this._handlerMenuItemClick.bind(this);
    }

    render() {
      const {activeItem} = this.state;
      return <Component activeOption={activeItem} onOptionSelected={this._handlerMenuItemClick} {...this.props} />;
    }

    _handlerMenuItemClick(selectedItem) {
      const {activeItem} = this.state;
      const {onItemSelected} = this.props;

      this.setState((prevState) => ({
        isOpened: !prevState.isOpened,
        activeOption: selectedItem
      }), () => {
        if (activeItem !== selectedItem) {
          onItemSelected(selectedItem);
        }
      });
    }
  }

  WithActiveItem.propTypes = {
    activeItem: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onItemSelected: PropTypes.func.isRequired
  };

  return WithActiveItem;
};

export default withActiveItem;
