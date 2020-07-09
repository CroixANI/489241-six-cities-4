import React from 'react';
import PropTypes from 'prop-types';

const withSelectableOption = (Component) => {
  class WithSelectableOption extends React.PureComponent {
    constructor(props) {
      super(props);

      const {activeOption} = props;
      this.state = {
        activeOption
      };

      this._handlerMenuItemClick = this._handlerMenuItemClick.bind(this);
    }

    render() {
      const {activeOption} = this.state;
      return <Component activeOption={activeOption} onOptionSelected={this._handlerMenuItemClick} {...this.props} />;
    }

    _handlerMenuItemClick(selectedOption) {
      const {activeOption} = this.state;
      const {onOptionSelected} = this.props;

      this.setState((prevState) => ({
        isOpened: !prevState.isOpened,
        activeOption: selectedOption
      }), () => {
        if (activeOption !== selectedOption) {
          onOptionSelected(selectedOption);
        }
      });
    }
  }

  WithSelectableOption.propTypes = {
    activeOption: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onOptionSelected: PropTypes.func.isRequired
  };

  return WithSelectableOption;
};

export default withSelectableOption;
