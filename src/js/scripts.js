import {geocodeLocation} from './geocode.js'

  // Initialisierung der Karte mit Zentrierung auf das Waldstadion
  let map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 50.068611, lng: 8.645278},
      zoom: 12
    });
  };

  // Standort ermitteln, Karte darauf zentrieren, mit Koordinaten Geocode aufrufen und ausgeben im Textfeld
  function getLocation() {
    const url="https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDZhHS4OYBe0AGr1cByePHG-pz8ORJ1KtU"
    fetch(url,{method:"POST"})
    .then(res => {return res.json()})
    .then(data => {
      map.setCenter({lat: data.location.lat, lng: data.location.lng});
      geocodeLocation(data.location.lat, data.location.lng);
      new google.maps.Marker({position: {lat: data.location.lat, lng: data.location.lng}, map: map});
    })
    .catch(error => console.log(error))
  }

  function waitForGoogle() {
    if (typeof google==='undefined') {
      setTimeout (() => waitForGoogle(), 1000);
    }
    else {
      initMap();
    }
  }
  waitForGoogle();

  const element = document.getElementsByClassName('text-city__button')
  element[0].addEventListener("click", getLocation);
