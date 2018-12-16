export function geocodeLocation(map, lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDZhHS4OYBe0AGr1cByePHG-pz8ORJ1KtU`;

  const element = document.querySelector("[data-current-location]");

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      let currentLocation = data.results[0].address_components[2].long_name;

      element.innerText = currentLocation;

      new google.maps.Marker({
        position: {
          lat,
          lng
        },
        map,
      });
    })
    .catch(error => console.error(error))
}
