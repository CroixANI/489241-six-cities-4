import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const MAP_STARTING_POINT = [52.38333, 4.9];
const MAP_PIN_ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const MAP_ZOOM = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = createRef();
  }

  componentDidMount() {
    if (!this.mapRef.current) {
      return;
    }

    const map = leaflet.map(this.mapRef.current, {
      center: MAP_STARTING_POINT,
      MAP_ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(MAP_STARTING_POINT, MAP_ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    const offerCords = [52.3709553943508, 4.89309666406198];
    leaflet
      .marker(offerCords, {MAP_PIN_ICON})
      .addTo(map);
  }

  render() {
    return (
      <section ref={this.mapRef} className="cities__map map">
      </section>
    );
  }
}

Map.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })).isRequired
};

export default Map;
