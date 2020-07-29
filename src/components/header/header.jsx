import React from 'react';
import {Link} from 'react-router-dom';

import Auth from '../auth/auth.jsx';
import {AuthorizationStatus} from '../../reducer/user/user';
import {APP_ROUTE} from '../../data/constants.js';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={APP_ROUTE.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Auth authorizationStatus={AuthorizationStatus.NO_AUTH} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
