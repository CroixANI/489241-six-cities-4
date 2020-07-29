import React from 'react';
import {Link} from "react-router-dom";
import {APP_ROUTE} from '../../data/constants';

const Footer = () => {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to={APP_ROUTE.ROOT}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
};

export default Footer;
