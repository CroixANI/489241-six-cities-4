import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = (props) => {
  const {titles, onOfferTitleClick} = props;

  return (
    <Main titles={titles} onOfferTitleClick={onOfferTitleClick} />
  );
};

App.propTypes = {
  titles: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        apartmentType: PropTypes.string.isRequired,
        offerTag: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        mainImageUrl: PropTypes.string.isRequired
      })
  ),
};

export default App;
