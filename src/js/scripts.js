import {
  geocodeLocation
} from './geocode.js'

// Initialisierung der Karte mit Zentrierung auf das Waldstadion
let map;

const initMap = () => {
  const element = document.getElementById('map');

  map = new google.maps.Map(element, {
    center: {
      lat: 50.068611,
      lng: 8.645278
    },
    zoom: 12
  });
};

// Standort ermitteln, Karte darauf zentrieren, mit Koordinaten Geocode aufrufen und ausgeben im Textfeld
const getLocation = () => {
  const url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDZhHS4OYBe0AGr1cByePHG-pz8ORJ1KtU";

  fetch(url, {
    method: "POST"
  })
    .then(res => res.json())
    .then(({ location }) => {
      const { lat, lng } = location;

      map.setCenter({
        lat,
        lng
      });

      geocodeLocation(map, lat, lng);
    })
    .catch(error => console.log(error))
};

const waitForGoogle = () => {
  if (typeof google !== 'undefined') {
    return initMap();
  }

  setTimeout(() => waitForGoogle(), 1000);
};

(() => {
  waitForGoogle();

  const element = document.getElementsByClassName('text-city__button')

  element[0].addEventListener("click", getLocation);
})();
