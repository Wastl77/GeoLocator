export function geocodeLocation(map, lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDZhHS4OYBe0AGr1cByePHG-pz8ORJ1KtU`;

  const element = document.querySelector("[data-current-location]");

  const hlf = {
    url: 'src/img/HLF.svg',
    labelOrigin: new google.maps.Point(22, 39)
  };

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
        icon: hlf,
        label: "0146-1",
        draggable: true,
        map,
      });
    })
    .catch(error => console.error(error))
}
