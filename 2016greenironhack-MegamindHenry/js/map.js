function initMap() {
	var map;

	map = new google.maps.Map(document.getElementById('map'), {
	  	center: {lat: 40.41798, lng: -86.920298},
	  	zoom: 9
	});

  	init(map);
}

function new_marker(latlng, map, market){
	var marker;

	marker = new google.maps.Marker({
		position:latlng,
		map: map,
	});

	var infowindow = new google.maps.InfoWindow({
	    content: market.name
 	});

	marker.addListener('click', function() {
	    show_market_details(market);
	    infowindow.open(map, marker);
  	});

	return marker;
};