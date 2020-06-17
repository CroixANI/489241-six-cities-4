import React from "react";
import Main from "../main/main.js";
import PropTypes from "prop-types";

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
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        apartmentType: PropTypes.string.isRequired,
        offerTag: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired,
      })
  ),
};

export default App;
