class City {
  constructor(name, latitude, longitude, zoom) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.zoom = zoom;
  }
}

const createCity = (cityData) =>
  new City(cityData.name, cityData.location.latitude, cityData.location.longitude, cityData.location.zoom);

const createCityDto = (city) => ({
  'location': {
    'latitude': city.latitude,
    'longitude': city.longitude,
    'zoom': city.zoom
  },
  'name': city.name
});

export {createCity, createCityDto};

export default City;
