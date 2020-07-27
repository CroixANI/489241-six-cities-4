import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator as AppActionCreator} from '../../reducer/app/app';
import {getErrorMessage} from '../../reducer/app/selectors';

const Error = (props) => {
  const {errorMessage, onClose} = props;

  const handleCloseClick = () => {
    onClose();
  };

  if (errorMessage) {
    return (
      <div className="notification top-right">
        <div className="notification-buttons">
          <button onClick={handleCloseClick}>X</button>
        </div>
        <div className="notification-message-container">
          <p className="notification-title">Error</p>
          <p className="notification-message">{errorMessage}</p>
        </div>
      </div>
    );
  }

  return null;
};

Error.propTypes = {
  errorMessage: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClose() {
    dispatch(AppActionCreator.setErrorMessage(null));
  }
});

export {Error};
export default connect(mapStateToProps, mapDispatchToProps)(Error);
