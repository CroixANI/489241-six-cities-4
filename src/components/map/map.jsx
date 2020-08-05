import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const MAP_STARTING_POINT = [52.38333, 4.9];
const MAP_PIN_ICON = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});
const MAP_ORANGE_PIN_ICON = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});
const MAP_ZOOM = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._map = null;
    this._mapPinsLayer = null;

    this._renderPinsOnSeparateLayer = this._renderPinsOnSeparateLayer.bind(this);
  }

  componentDidMount() {
    if (!this._mapRef.current) {
      return;
    }

    const {activeLocation, locations} = this.props;

    this._map = leaflet.map(this._mapRef.current, {
      MAP_STARTING_POINT,
      MAP_ZOOM,
      zoomControl: false,
      marker: true
    });

    const center = activeLocation ? [activeLocation.city.latitude, activeLocation.city.longitude] : MAP_STARTING_POINT;
    const zoom = activeLocation ? activeLocation.city.zoom : MAP_ZOOM;
    this._map.setView(center, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._mapPinsLayer = leaflet.featureGroup().addTo(this._map);

    this._renderPinsOnSeparateLayer(activeLocation, locations);
  }

  componentDidUpdate() {
    const {activeLocation, locations} = this.props;
    this._renderPinsOnSeparateLayer(activeLocation, locations);
  }

  componentWillUnmount() {
    this._map.remove();
  }

  _renderPinsOnSeparateLayer(activeLocation, locations) {
    if (this._mapPinsLayer) {
      this._mapPinsLayer.clearLayers();
    }

    const locationsMarkers = locations.map((location) => leaflet.marker([location.latitude, location.longitude], {icon: MAP_PIN_ICON}));
    if (activeLocation) {
      locationsMarkers.push(leaflet.marker([activeLocation.latitude, activeLocation.longitude], {icon: MAP_ORANGE_PIN_ICON}));
    }

    locationsMarkers.forEach((marker) => marker.addTo(this._mapPinsLayer));
    const bounds = this._mapPinsLayer.getBounds();
    this._map.fitBounds(bounds, {maxZoom: 12});
  }

  render() {
    const {className} = this.props;
    const fullClassName = `${className || ``} map`;

    return (
      <section ref={this._mapRef} className={fullClassName}>
      </section>
    );
  }
}

Map.propTypes = {
  className: PropTypes.string,
  activeLocation: PropTypes.shape({
    city: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }),
  locations: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })).isRequired
};

export default Map;
