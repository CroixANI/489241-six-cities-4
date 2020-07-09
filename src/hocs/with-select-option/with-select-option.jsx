import React from 'react';

const withSelectableOption = (Component, options, initialActiveOption, onOptionChanged) => {
  return class WithSelectableOption extends React.PureComponent {
    constructor() {
      super();

      this.state = {
        activeOption: initialActiveOption
      };

      this._handlerMenuItemClick = this._handlerMenuItemClick.bind(this);
    }

    render() {
      const {activeOption} = this.state;
      return <Component options={options} activeOption={activeOption} onOptionSelected={this._handlerMenuItemClick} {...this.props} />;
    }

    _handlerMenuItemClick(selectedOption) {
      const {activeOption} = this.state;

      this.setState((prevState) => ({
        isOpened: !prevState.isOpened,
        activeOption: selectedOption
      }), () => {
        if (activeOption !== selectedOption) {
          onOptionChanged(selectedOption);
        }
      });
    }
  };
};

export default withSelectableOption;
