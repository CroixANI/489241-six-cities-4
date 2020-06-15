import React from "react";
import Main from "../main/main.js";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offers} = props;

  return (
    <Main titles={offers} />
  );
};

export default App;
