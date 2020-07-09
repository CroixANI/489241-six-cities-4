import React from 'react';

const withOpenedClosedState = (WrappedComponent) => {
  return class WithOpenedClosedState extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false
      };

      this._handleMenuClick = this._handleMenuClick.bind(this);
    }

    render() {
      const {isOpened} = this.state;
      return <WrappedComponent isOpened={isOpened} onMenuClicked={this._handleMenuClick} {...this.props} />;
    }

    _handleMenuClick() {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened
      }));
    }
  };
};

export default withOpenedClosedState;
