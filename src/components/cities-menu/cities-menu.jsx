import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {ActionCreator} from '../../reducer/app/app';
import {getCity} from '../../reducer/app/selectors.js';
import {getCities} from '../../reducer/data/selectors.js';
import {APP_ROUTE} from '../../data/constants';

const MAX_CITIES = 6;

class CitiesMenu extends PureComponent {
  constructor(props) {
    super(props);

    this._changeCityIfUrlCityNameDiffers = this._changeCityIfUrlCityNameDiffers.bind(this);
  }

  componentDidMount() {
    this._changeCityIfUrlCityNameDiffers();
  }

  componentDidUpdate() {
    this._changeCityIfUrlCityNameDiffers();
  }

  _changeCityIfUrlCityNameDiffers() {
    const {selectedCity, changeCity} = this.props;
    const cityName = this.props.match.params.cityName;
    if (selectedCity && cityName && selectedCity !== cityName) {
      changeCity(cityName);
    }
  }

  render() {
    const {cities, selectedCity} = this.props;
    const defaultCityClass = `locations__item-link tabs__item`;
    const activeCityClass = `${defaultCityClass} tabs__item--active`;
    const limitedCities = cities.sort().slice(0, MAX_CITIES);

    return (
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {limitedCities.map((city) => (
              <li key={city} className="locations__item">
                <Link to={`${APP_ROUTE.ROOT}${city}`} className={city === selectedCity ? activeCityClass : defaultCityClass}>
                  <span>{city}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

CitiesMenu.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      cityName: PropTypes.string,
    }),
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  selectedCity: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesMenu};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesMenu);
