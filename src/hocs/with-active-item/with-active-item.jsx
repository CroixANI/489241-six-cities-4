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

      this._handleItemSelected = this._handleItemSelected.bind(this);
    }

    _handleItemSelected(selectedItem) {
      const {onItemSelected} = this.props;

      this.setState(() => ({
        activeItem: selectedItem
      }), () => {
        if (onItemSelected) {
          onItemSelected(selectedItem);
        }
      });
    }

    render() {
      const {items} = this.props;
      const {activeItem} = this.state;
      return <Component items={items} activeItem={activeItem} onItemSelected={this._handleItemSelected} {...this.props} />;
    }
  }

  WithActiveItem.propTypes = {
    activeItem: PropTypes.any,
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    onItemSelected: PropTypes.func
  };

  return WithActiveItem;
};

export default withActiveItem;
