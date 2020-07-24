import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header/header.jsx';

export const withHeader = (Component) => {
  const Wrapper = (props) => {
    const {className} = props;
    const rootDivClassName = `page ${className ? className : ``}`;
    return (
      <div className={rootDivClassName}>
        <Header />
        <Component {...props} />
      </div>
    );
  };

  Wrapper.propTypes = {
    className: PropTypes.string
  };

  return Wrapper;
};
