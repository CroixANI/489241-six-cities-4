import React from 'react';
import PropTypes from 'prop-types';

import {AuthorizationStatus} from '../../reducer/user/user';

const Auth = (props) => {
  const {authorizationStatus} = props;
  const UserInfo = <span className="header__user-name user__name">Oliver.conner@gmail.com</span>;
  const SignIn = <span className="header__login">Sign in</span>;
  return (
    <a className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      {authorizationStatus === AuthorizationStatus.NO_AUTH ? SignIn : UserInfo}
    </a>
  );
};

Auth.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

export default Auth;
