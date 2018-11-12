export function geocodeLocation(lat, lng) {
	const url="https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyDZhHS4OYBe0AGr1cByePHG-pz8ORJ1KtU"
	fetch(url)
	.then(res => {return res.json()})
	.then(data => {
		let currentLocation = (data.results[0].address_components[2].long_name);
		document.getElementById("currentLocation").innerHTML = currentLocation;
		new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});
	})
	.catch(error => console.log(error))
}
