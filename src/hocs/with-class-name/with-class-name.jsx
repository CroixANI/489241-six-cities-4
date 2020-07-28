import React from 'react';

export const withClassName = (addClassName, Component) => (props) => {
  const className = `${addClassName} ${props.className || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <Component className={className} {...restProps} />
  );
};
