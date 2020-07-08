import React from 'react';

const withSelectableOption = (Component, options, initialActiveOption, onOptionChanged) => {
  return class WithSelectableOption extends React.PureComponent {
    constructor() {
      super();

      this.state = {
        isOpened: false,
        activeOption: initialActiveOption
      };

      this._handleSortMenuClick = this._handleSortMenuClick.bind(this);
      this._handlerMenuItemClick = this._handlerMenuItemClick.bind(this);
    }

    render() {
      const {isOpened, activeOption} = this.state;
      return <Component isOpened={isOpened} options={options} activeOption={activeOption} onMenuClicked={this._handleSortMenuClick} onOptionSelected={this._handlerMenuItemClick} />;
    }

    _handleSortMenuClick() {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened
      }));
    }

    _handlerMenuItemClick(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      const selectedOption = evt.target.dataset.option;
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
