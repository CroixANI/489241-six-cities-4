import React from "react";
import Main from "../main/main.js";
import PropTypes from "prop-types";

const App = (props) => {
  const {offers} = props;

  return (
    <Main titles={offers} />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

export default App;
