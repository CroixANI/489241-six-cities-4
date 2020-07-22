class OfferLocation {
  constructor(city, latitude, longitude, zoom) {
    this.city = city;
    this.latitude = latitude;
    this.longitude = longitude;
    this.zoom = zoom;
  }
}

const createOfferLocation = (cityData, offerLocationData) =>
  new OfferLocation(cityData, offerLocationData.latitude, offerLocationData.longitude, offerLocationData.zoom);

export {createOfferLocation};

export default OfferLocation;
