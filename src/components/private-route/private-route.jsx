import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {APP_ROUTE} from "../../data/constants";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus, isAuthChecked} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus !== AuthorizationStatus.AUTH && isAuthChecked
            ? <Redirect to={APP_ROUTE.LOGIN} />
            : render()
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthChecked: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
