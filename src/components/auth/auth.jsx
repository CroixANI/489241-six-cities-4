import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import {AuthorizationStatus} from '../../reducer/user/user';
import {getAuthorizationStatus, getCurrentUserEmail} from '../../reducer/user/selectors';
import {APP_ROUTE} from '../../data/constants';

const Auth = (props) => {
  const {authorizationStatus, currentUserEmail} = props;

  const UserInfo = <span className="header__user-name user__name">{currentUserEmail}</span>;
  const SignIn = <span className="header__login">Sign in</span>;

  return (
    <Link className="header__nav-link header__nav-link--profile"
      to={authorizationStatus === AuthorizationStatus.NO_AUTH ? APP_ROUTE.LOGIN : `/favorites`}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      {authorizationStatus === AuthorizationStatus.NO_AUTH ? SignIn : UserInfo}
    </Link>
  );
};

Auth.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentUserEmail: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  currentUserEmail: getCurrentUserEmail(state),
});

export {Auth};
export default connect(mapStateToProps)(Auth);
